import React, { useState } from "react";
import { Arrow } from "../../../SVG";
import * as S from "./style";
import { Ingredient, SearchBar } from "../../../components";

const Enroll = ({ setStep }) => {
	const [list, setList] = useState([]);
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<S.Title>
					<div onClick={() => setStep((prev) => prev - 1)}>
						<Arrow />
					</div>
					레시피 등록
				</S.Title>
				<S.Title>재료</S.Title>
				<SearchBar setList={setList} />
				<S.List>
					{list.map((item, idx) => (
						<Ingredient name={item.name} number={item.number} key={idx} />
					))}
				</S.List>
				<S.Success onClick={() => setStep((prev) => prev + 1)}>
					다음으로
				</S.Success>
			</div>
		</>
	);
};

export default Enroll;
