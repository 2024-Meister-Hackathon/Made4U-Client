import React from "react";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { Arrow } from "../../SVG";

const Bookmark = () => {
	const dummy = [1, 2, 3, 4, 5];
	const nav = useNavigate();
	return (
		<>
			<S.Container>
				<div
					onClick={() => {
						nav(-1);
					}}
				>
					<Arrow />
				</div>
				<S.Title>북마크</S.Title>
				<S.IngredientWrapper>
					{dummy.map((item) => (
						<S.Ingredient key={item} />
					))}
				</S.IngredientWrapper>
				<S.Next onClick={alert("회원가입 성공")}>{0}개 구매하기</S.Next>
			</S.Container>
		</>
	);
};

export default Bookmark;
