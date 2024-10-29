import React from "react";
import * as S from "./style";

const Footer = () => {
	return (
		<S.Container>
			<S.NavWrapper>
				<S.Nav to={"/feed"}>
					<img src="" alt="피트" />
				</S.Nav>
				<S.Nav to={"/search"}>
					<img src="" alt="탐색" />
				</S.Nav>
				<S.Nav to={"/write"}>
					<img src="" alt="작성" />
				</S.Nav>
				<S.Nav to={"/subscribe"}>
					<img src="" alt="구독" />
				</S.Nav>
				<S.Nav to={"/myPage"}>
					<img src="" alt="마이페이지" />
				</S.Nav>
			</S.NavWrapper>
		</S.Container>
	);
};

export default Footer;
