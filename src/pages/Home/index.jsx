import React from "react";
import { Footer, Header, Post } from "../../components";
import * as S from "./style";

const Home = () => {
	return (
		<>
			<Header />
			<S.Container>
				<Post />
				<Post />
				<Post />
				<Post />
			</S.Container>
			<Footer />
		</>
	);
};

export default Home;
