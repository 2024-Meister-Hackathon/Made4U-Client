import styled from "@emotion/styled";

export const CategoryBox = styled.div`
	display: flex;
	width: 95%;
	height: 100%;
	flex-direction: column;
	position: absolute;
	top: 0;
	padding: 1rem;
	background-color: white;
	gap: 28px;
`;

export const CategoryWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 80vw;
	gap: 0.5rem;
`;

export const Category = styled.span`
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

export const Success = styled.button`
	display: flex;
	width: 100%;
	height: 4rem;
	justify-content: center;
	align-items: center;
	border: 0;
	border-radius: 0.875rem;
	background: #c8f844;
	font-size: 1.25rem;
`;

export const SubTitle = styled.h3`
	display: flex;
	width: 100%;
	color: #000;
	font-size: 1.375rem;
	font-weight: 700;
`;
