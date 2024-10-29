import React from "react";
import * as S from "./style";
import { Input } from "../../components";

const SignUp = () => {
	return (
		<S.Container>
			<Input placeholder={"id"} type={"text"} />
			<Input placeholder={"password"} type={"password"} />
			<S.Next>next</S.Next>
			<S.Cross>
				<S.Line />
				or
				<S.Line />
			</S.Cross>
			<S.Auth>Login for Google</S.Auth>
		</S.Container>
	);
};

export default SignUp;
