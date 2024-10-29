import React, { useState } from "react";
import * as S from "./style";
import Input from "../Input";
import Ingredient from "../Ingredient";

const Post = () => {
	const [comActive, setComActive] = useState(false);
	const [recActive, setRecActive] = useState(false);

	return (
		<>
			<S.Container>
				<S.Title>
					<S.Profile>
						<img src="" alt="프로필 사진" />
						<h2>닉네임</h2>
					</S.Profile>
					<S.ButtonWrapper>
						<S.Bookmark />
						<S.Buy />
					</S.ButtonWrapper>
				</S.Title>
				<S.Img>
					<img src="" alt="음식사진" />
				</S.Img>
				<S.Info>
					<S.ButtonWrapper2>
						<S.ComButton onClick={() => setComActive(true)} />
						<S.RecButton onClick={() => setRecActive(true)} />
					</S.ButtonWrapper2>
					<S.IngredientWrapper>
						<Ingredient />
						<Ingredient />
						<Ingredient />
						<Ingredient />
						<Ingredient />
						<Ingredient />
						<Ingredient />
						<Ingredient />
						<Ingredient />
					</S.IngredientWrapper>
					<S.Description></S.Description>
				</S.Info>
				<S.Comment active={comActive}>
					<div onClick={() => setComActive(false)}></div>
					<div>
						<ul>
							<li>댓글 1</li>
							<li>댓글 2</li>
							<li>댓글 3</li>
						</ul>
						<Input placeholder={"댓글 달기"} type={"text"} />
					</div>
				</S.Comment>
				<S.Recipe active={recActive}>
					<div onClick={() => setRecActive(false)}></div>
					<div></div>
				</S.Recipe>
			</S.Container>
		</>
	);
};

export default Post;
