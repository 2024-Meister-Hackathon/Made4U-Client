import styled from "@emotion/styled";
import { Link } from "react-router-dom";

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

export const Purchase = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 30px;
	padding: 0 50px;
`;

export const Success = styled(Link)`
	display: flex;
	width: 100%;
	height: 30px;
	justify-content: center;
	align-items: center;
	text-decoration: none;
`;
