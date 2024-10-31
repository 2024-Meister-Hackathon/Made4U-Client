import React, { useState } from "react";
import * as S from "./style";
import { Home, Search, Write, Profile } from "../../SVG";
import Subscribe from "../../SVG/Subscribe";

const Footer = () => {
	const [url] = useState("");
	return (
		<S.NavWrapper>
			<S.Nav to={"/home"}>
				<Home />
			</S.Nav>
			<S.Nav to={"/search"}>
				<Search />
			</S.Nav>
			<S.Nav to={"/write"}>
				<Write />
			</S.Nav>
			<S.Nav to={"/subscribe"}>
				<Subscribe />
			</S.Nav>
			<S.Nav to={"/myPage"}>
				<S.ProImg>
					{url.length > 0 ? <img src={url} alt="프로필 사진" /> : <Profile />}
				</S.ProImg>
			</S.Nav>
		</S.NavWrapper>
	);
};

export default Footer;
