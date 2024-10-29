import React from "react";
import * as S from "./style";

const Header = () => {
	return (
		<S.Container>
			<S.NavWrapper>
				<S.Nav to={"/feed"}>
					<img src="" alt="로고" />
				</S.Nav>
				<div>
					<S.Nav to={"/bookmark"}>
						<img src="" alt="북마크" />
					</S.Nav>
					<S.Nav to={"/shopping"}>
						<img src="" alt="장바구니" />
					</S.Nav>
				</div>
			</S.NavWrapper>
		</S.Container>
	);
};

export default Header;
