import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: start;
	justify-content: center;
	height: 100vh;
	gap: 2.63rem;
	margin: 1rem;
	p {
		display: flex;
		width: 100%;
		justify-content: center;
	}
`;

export const Logo = styled.img`
	width: 10.1875rem;
	height: 10.6875rem;
	margin-bottom: 17rem;
	flex-shrink: 0;
`;

export const Title = styled.h1`
	display: flex;
	justify-content: start;
	width: 100%;
	font-size: 2rem;
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
`;

export const Input = styled.input`
	display: flex;
	width: 280px;
	height: 100%;
	font-size: 20px;
	border: 0;
	align-items: center;
	outline: none;
	border-radius: 0.875rem;
	padding: 1.3125rem 1.5rem;
	border: 1.5px solid #1c1c1c;
`;

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

export const Text = styled(Link)`
	display: flex;
	width: 100%;
	justify-content: center;
	color: var(--gray-700, #4f4f4f);
	text-align: center;
	font-size: 0.875rem;
	font-style: normal;
	font-weight: 400;
	line-height: 140%; /* 1.225rem */
	letter-spacing: 0.00875rem;
	text-decoration: none;
`;

export const Cross = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	align-items: center;
	gap: 5px;
`;

export const Line = styled.span`
	width: 50px;
	border: 1px solid black;
`;

export const Auth = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;

	div {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 62.4375rem;
		background: #f5f5f5;
	}
`;
