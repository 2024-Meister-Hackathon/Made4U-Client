import React from "react";
import * as S from "./style";

const Ingredient = ({ type, img, brand, name, number, price }) => {
	return (
		<S.Container>
			<S.Img src={img} alt={name} type={type} />
			{type === "feed" ? (
				<S.DetailBox type={type}>
					<S.TextWrapper>
						<S.Text>{brand}</S.Text>
						<S.Text>{name}</S.Text>
						<S.Text>{price || 0}개</S.Text>
					</S.TextWrapper>
					<div>장바구니 추가</div>
				</S.DetailBox>
			) : (
				<S.DetailBox>
					<S.TextWrapper>
						<S.Text>{name}</S.Text>
						<S.Text>
							{number || 0}개/{price || 0}원
						</S.Text>
					</S.TextWrapper>
					<div>X</div>
				</S.DetailBox>
			)}
		</S.Container>
	);
};

export default Ingredient;
