import React from "react";
import * as S from "./style";
import { Bookmark, Cart } from "../../SVG";

const Header = () => {
	return (
		<S.NavWrapper>
			<S.Nav to={"/feed"}>
				<img
					src="https://raw.githubusercontent.com/akns27/EssetStorage/refs/heads/master/black(backX).png"
					alt="로고"
				/>
			</S.Nav>
			<div>
				<S.Nav to={"/bookmark"}>
					<Bookmark />
				</S.Nav>
				<S.Nav to={"/shopping"}>
					<Cart />
				</S.Nav>
			</div>
		</S.NavWrapper>
	);
};

export default Header;
