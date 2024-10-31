import React, { useState } from "react";
import * as S from "./style";
import Ingredient from "../Ingredient";
import { Bookmark, Cart, Comment, Recipe } from "../../SVG";

const Post = () => {
	const [recActive, setRecActive] = useState(false);
	const [select, setSelect] = useState(false);

	const materials = [
		{
			name: "재료이름",
			unit: "1대",
		},
		{
			name: "재료이름",
			unit: "1대",
		},
		{
			name: "재료이름",
			unit: "1대",
		},
	];

	const sources = [
		{
			name: "재료이름",
			unit: "1대",
		},
		{
			name: "재료이름",
			unit: "1대",
		},
		{
			name: "재료이름",
			unit: "1대",
		},
	];

	const steps = ["hello", "world"];

	return (
		<>
			<S.Container>
				<S.Title>
					<S.Profile>
						<img src="" alt="프로필 사진" />
						<h2>닉네임</h2>
					</S.Profile>
					<div onClick={() => setSelect(!select)}>
						<Bookmark isSelect={select} />
					</div>
				</S.Title>
				<S.Img>
					<img
						src="https://cdn.discordapp.com/attachments/1300691924541509642/1301122547135545354/Frame2032.png?ex=6723544c&is=672202cc&hm=9232c2ec14b0aa79f79871d838683d440c1047f0e01cbf7aef3f2931a7872828&"
						alt="음식사진"
					/>
				</S.Img>
				<S.Info>
					<S.ButtonWrapper>
						<S.ComButton>
							<Comment />
						</S.ComButton>
						<S.RecButton onClick={() => setRecActive(true)}>
							<Recipe />
						</S.RecButton>
					</S.ButtonWrapper>
					<S.IngredientWrapper>
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
						<Ingredient type={"feed"} />
					</S.IngredientWrapper>
					<S.Description>helloworld worldhello helloworld</S.Description>
				</S.Info>
			</S.Container>
			<S.RecipeBox active={recActive}>
				<S.Temp onClick={() => setRecActive(false)}></S.Temp>
				<S.Recipe>
					<S.Bar>
						<span />
						레시피
					</S.Bar>
					<S.Content>
						<div style={{ marginBottom: "2rem", width: "100%" }}>
							<S.SubTitle>재료</S.SubTitle>
							{materials.map((item, idx) => (
								<S.Material key={idx}>
									{item.name}
									<div>
										{item.unit}
										<Cart />
									</div>
								</S.Material>
							))}
						</div>
						<div style={{ marginBottom: "2rem", width: "100%" }}>
							<S.SubTitle>양념</S.SubTitle>
							{sources.map((item, idx) => (
								<S.Material key={idx}>
									{item.name}
									<div>
										{item.unit}
										<Cart />
									</div>
								</S.Material>
							))}
						</div>
						<div style={{ marginBottom: "2rem", width: "100%" }}>
							<S.SubTitle>조리순서</S.SubTitle>
							{steps.map((item, idx) => (
								<S.Material key={idx} des>
									<h2>{idx + 1}</h2>
									<p>{item}</p>
								</S.Material>
							))}
						</div>
					</S.Content>
				</S.Recipe>
			</S.RecipeBox>
		</>
	);
};

export default Post;
