import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: 100vh;
	gap: 2.63rem;
	margin: 1rem;
`;

export const Title = styled.h1`
	display: flex;
	justify-content: start;
	width: 100%;
	font-size: 2rem;
`;

export const ProImg = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	label {
		width: 8.125rem;
		height: 8.125rem;
		border-radius: 62.4375rem;
		img {
			width: 8.125rem;
			height: 8.125rem;
			border-radius: 100%;
		}
	}
	input {
		display: none;
	}
`;

export const InputWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
	margin-bottom: 9rem;
`;

export const Input = styled.input`
	display: flex;
	width: 280px;
	font-size: 20px;
	border: 0;
	align-items: center;
	outline: none;
	border-radius: 0.875rem;
	padding: 1.3125rem 1.5rem;
	border: 1.5px solid #1c1c1c;
`;

export const SubTitle = styled.h3`
	display: flex;
	width: 100%;
	color: #000;
	font-size: 1.375rem;
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80vw;
	gap: 0.5rem;
`;

export const Tag = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.75rem 1rem;
	height: 16px;
	gap: 0.5rem;
	border-radius: 0.25rem;
	border: 1px solid ${({ isSelected }) => (isSelected ? "#1c1c1c" : "#828282")};
	color: ${({ isSelected }) => (isSelected ? "#1c1c1c" : "#828282")};
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
