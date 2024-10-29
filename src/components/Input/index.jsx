import React, { useState } from "react";
import * as S from "./style";

const Input = ({ placeholder, type }) => {
	const [value, setValue] = useState("");

	return (
		<S.Container>
			<S.Input
				placeholder={placeholder}
				value={value}
				onChange={(e) => setValue(e.target.value)}
				type={type}
			/>
		</S.Container>
	);
};

export default Input;
