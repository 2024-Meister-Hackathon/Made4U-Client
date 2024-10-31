import React, { useState } from "react";
import { Arrow } from "../../../SVG";
import * as S from "./style";
import { useNavigate } from "react-router-dom";

const Recipe = ({ setStep }) => {
	const [recipe, setRecipe] = useState([]);
	const [steps, setSteps] = useState([{ id: 1, description: "" }]);
	const nav = useNavigate();

	const handleAddStep = () => {
		setSteps([...steps, { id: steps.length + 1, description: "" }]);
	};

	const handleChange = (id, value) => {
		setSteps(
			steps.map((step) =>
				step.id === id ? { ...step, description: value } : step
			)
		);
	};
	return (
		<>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
				}}
			>
				<S.Title>
					<div onClick={() => setStep((prev) => prev - 1)}>
						<Arrow />
					</div>
					레시피 등록
				</S.Title>
				<S.Title>조리 순서</S.Title>
				<S.List>
					{steps.map((step) => (
						<S.ListItem key={step.id} className="step-container">
							<label>{step.id}</label>
							<S.Input
								value={step.description}
								onChange={(e) => handleChange(step.id, e.target.value)}
								placeholder={`레시피를 입력하세요`}
							/>
						</S.ListItem>
					))}
					<S.Add onClick={handleAddStep}>조리 순서 추가 +</S.Add>
				</S.List>
				<S.Success
					onClick={() => {
						alert("Successfully, Posted");
						nav("/home");
					}}
				>
					피드 등록
				</S.Success>
			</div>
		</>
	);
};

export default Recipe;
