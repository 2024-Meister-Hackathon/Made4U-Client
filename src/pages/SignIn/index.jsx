import React, { useState } from "react";
import * as S from "./style";
import { Arrow, Google } from "../../SVG";

const SignIn = () => {
	const [step, setStep] = useState(1);
	return (
		<>
			{step === 1 && (
				<S.Container>
					<p>
						<S.Logo
							src="https://raw.githubusercontent.com/akns27/EssetStorage/refs/heads/master/black(backX).png"
							alt="로고"
						/>
					</p>
					<S.Next onClick={() => setStep(step + 1)}>탭하여 시작</S.Next>
				</S.Container>
			)}
			{step === 2 && (
				<S.Container>
					<div
						onClick={() => {
							if (step !== 1) setStep(step - 1);
						}}
					>
						<Arrow />
					</div>
					<S.Title>로그인</S.Title>
					<S.InputWrapper>
						<S.Input placeholder={"이메일"} type={"text"} />
						<S.Input placeholder={"비밀번호"} type={"password"} />
					</S.InputWrapper>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "0.87rem" }}
					>
						<S.Next onClick={() => alert("Login Success")}>로그인</S.Next>
						<S.Text to="/signUp">회원가입</S.Text>
					</div>
					<S.Cross>
						<S.Line />
						또는
						<S.Line />
					</S.Cross>
					<S.Auth>
						<div>
							<Google />
						</div>
					</S.Auth>
				</S.Container>
			)}
		</>
	);
};

export default SignIn;
