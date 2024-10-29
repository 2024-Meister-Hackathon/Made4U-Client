import React from "react";
import * as S from "./style";

const Ingredient = ({ img, brand, name, price }) => {
	return (
		<S.Container>
			<S.Img src={img} alt={name} />
			<S.DetailBox>
				<S.TextWrapper>
					<S.Text>{brand}</S.Text>
					<S.Text>{name}</S.Text>
					<S.Text>{price}</S.Text>
				</S.TextWrapper>
				<div>장바구니 추가</div>
			</S.DetailBox>
		</S.Container>
	);
};

export default Ingredient;
