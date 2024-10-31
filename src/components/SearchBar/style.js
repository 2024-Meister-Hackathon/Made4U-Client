import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	width: 100vw;
	height: 10vh;
	justify-content: center;
	align-items: center;
`;

export const SearchBar = styled.div`
	display: flex;
	width: 303px;
	padding: 12px 16px;
	justify-content: space-between;
	align-items: center;
	border-radius: 14px;
	border: 1px solid #000;
	gap: 5px;
`;

export const Input = styled.input`
	color: var(--gray-600, #696969);
	font-size: 14px;
	width: 100%;
	height: 18px;
	outline: none;
	border: none;
`;

export const RecentBox = styled.ul`
	display: ${({ length }) => (length === 0 ? "none" : "flex")};
	position: absolute;
	top: 200px;
	flex-direction: column;
	width: 100%;
	justify-content: center;
	align-items: center;
	overflow-y: scroll;
	background-color: white;
`;

export const Recent = styled.span`
	display: flex;
	width: 60vw;
	height: 5vh;
	align-items: center;
	justify-content: space-between;
	padding: 0 12px;
	border-bottom: 1px solid black;
`;
