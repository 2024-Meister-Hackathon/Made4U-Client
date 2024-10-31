import React from "react";
import * as S from "./style";
import { X } from "../../SVG";

const Ingredient = ({ name, number }) => {
	return (
		<S.Container>
			<S.DetailBox>
				<S.TextWrapper>
					<S.Text>{name}</S.Text>
				</S.TextWrapper>
				<S.Counter>
					<p>{"<"}</p>
					{number}
					<p>{">"}</p>
				</S.Counter>
				<X />
			</S.DetailBox>
		</S.Container>
	);
};

export default Ingredient;
