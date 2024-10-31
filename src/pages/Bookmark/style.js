import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 400px;
	height: 1000px;
	margin: 15px;
	height: auto;
`;

export const Title = styled.h1`
	display: flex;
	font-size: 24px;
	justify-content: center;
	margin-bottom: 20px;
`;

export const IngredientWrapper = styled.div`
	display: flex;
	flex-direction: column;
	overflow-y: scroll;
	width: 100%;
	height: 80vh;
	gap: 15px;
`;

export const Ingredient = styled.div``;

export const Next = styled.button`
	display: flex;
	width: 20.875rem;
	height: 4rem;
	justify-content: center;
	align-items: center;
	border: 0;
	border-radius: 0.875rem;
	background: #c8f844;
	font-size: 1.25rem;
`;
