import React, { useEffect, useState } from "react";
import * as S from "./style";
import { Search } from "../../SVG";
// import { defaultInstance, authInstance } from "../../shared/api";

const SearchBar = ({ setList }) => {
	const [keyword, setKeyword] = useState("");
	const [result, setResult] = useState("");
	const materials = ["양파", "대파", "쪽파", "고추", "고추장"];

	const AddListHandler = (e) => {
		const value = e.target.textContent.split("추가")[0];
		setList((prev) => [...prev, { name: value, number: 1 }]);
		setKeyword("");
	};

	useEffect(() => {
		setResult(materials.filter((item) => item.includes(keyword)));
	}, [keyword]);

	// const KeywordSearchHandler = async (e) => {
	// 	setKeyword(e.target.value);
	// 	// console.log("hello");
	// 	// try {
	// 	// 	await authInstance.get(`/load?keyword=${keyword}`);
	// 	// } catch (e) {
	// 	// 	console.log(e);
	// 	// }
	// };

	return (
		<>
			<S.Container>
				<S.SearchBar>
					<S.Input
						type={"text"}
						placeholder="재료를 입력해주세요."
						value={keyword}
						onChange={(e) => setKeyword(e.target.value)}
					/>
					<Search />
				</S.SearchBar>
			</S.Container>
			<S.RecentBox length={keyword.length}>
				{result.length !== 0 &&
					result.map((item, idx) => (
						<S.Recent key={idx} onClick={AddListHandler}>
							{item}
							<div>추가</div>
						</S.Recent>
					))}
			</S.RecentBox>
		</>
	);
};

export default SearchBar;
