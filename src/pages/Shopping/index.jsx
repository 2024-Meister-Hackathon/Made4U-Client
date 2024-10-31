import React, { useState } from "react";
import * as S from "./style";
import { Ingredient } from "../../components";

const Shopping = () => {
	const dummy = [1, 2, 3, 4, 5];
	const [success, setSuccess] = useState(false);
	return (
		<>
			{success ? (
				<S.Container>
					<S.Title>Successfully purchase</S.Title>
					<S.Success to="/feed">홈으로</S.Success>
				</S.Container>
			) : (
				<S.Container>
					<S.Title>Shopping List</S.Title>
					<S.IngredientWrapper>
						{dummy.map((item) => (
							<Ingredient key={item} />
						))}
					</S.IngredientWrapper>
					<S.Purchase onClick={() => setSuccess(true)}>
						{dummy.length}개 제품 구매
					</S.Purchase>
				</S.Container>
			)}
		</>
	);
};

export default Shopping;
