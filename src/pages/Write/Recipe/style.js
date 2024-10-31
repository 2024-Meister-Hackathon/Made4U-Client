import styled from "@emotion/styled";

export const Title = styled.h3`
	display: flex;
	align-items: center;
	width: auto;
	color: #000;
	gap: 76px;
	margin: 1rem;
	font-size: 1.375rem;
	font-weight: 700;
`;

export const List = styled.ul`
	display: flex;
	width: auto;
	height: 50vh;
	margin: 1rem;
	overflow-y: scroll;
	flex-direction: column;
	gap: 1rem;
`;

export const ListItem = styled.li`
	display: flex;
	font-weight: 700;
	gap: 1rem;
`;

export const Input = styled.textarea`
	width: 100%;
	height: auto;
	border: 0;
	outline: none;
`;

export const Add = styled.button`
	display: flex;
	width: 100%;
	justify-content: center;
	background-color: white;
	border: none;
	outline: none;
`;

export const Success = styled.button`
	display: flex;
	width: auto;
	justify-content: center;
	align-items: center;
	border: 0;
	border-radius: 0.875rem;
	padding: 1.125rem 7.5rem;
	margin: 1rem;
	background: #c8f844;
	font-size: 1.25rem;
`;
