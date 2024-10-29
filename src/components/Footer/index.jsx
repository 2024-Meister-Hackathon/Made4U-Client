import React from "react";
import * as S from "./style";

const Footer = () => {
	return (
		<S.Container>
			<S.NavWrapper>
				<S.Nav to={"/feed"}>
					<img src="" alt="사진 1" />
				</S.Nav>
				<S.Nav to={"/search"}>
					<img src="" alt="사진 2" />
				</S.Nav>
				<S.Nav to={"/write"}>
					<img src="" alt="사진 3" />
				</S.Nav>
				<S.Nav to={"/subscribe"}>
					<img src="" alt="사진 4" />
				</S.Nav>
				<S.Nav to={"/myPage"}>
					<img src="" alt="사진 5" />
				</S.Nav>
			</S.NavWrapper>
		</S.Container>
	);
};

export default Footer;
