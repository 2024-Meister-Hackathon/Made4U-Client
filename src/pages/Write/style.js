import styled from "@emotion/styled";

export const Container = styled.div``;

export const Head = styled.span`
	display: flex;
	height: 4rem;
	justify-content: space-around;
	align-items: center;
	font-size: 1.375rem;
`;

export const Next = styled.h2`
	color: var(--secondary, #f911c7);
	font-size: 1rem;
`;

export const Img = styled.span`
	display: flex;
	width: 24.1875rem;
	height: 24.1875rem;
`;

export const Label = styled.label`
	width: 24.1875rem;
	height: 24.1875rem;
`;

export const DefImg = styled.div`
	width: 24.1875rem;
	height: 24.1875rem;
	background-color: #bbb;
`;

export const BottomBox = styled.div`
	display: flex;
	flex-direction: column;
	padding: 20px;
	gap: 2rem;
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	gap: 4px;
	margin-top: 1rem;
`;

export const Tag = styled.div`
	display: flex;
	padding: 8px 14px;
	justify-content: center;
	align-items: center;
	gap: 8px;
	border-radius: 999px;
	border: 1px solid var(--secondary, #f911c7);
	color: #f911c7;
`;

export const Description = styled.input`
	width: 335px;
	color: var(--gray-600, #696969);
	font-size: 16px;
	border: 0;
	outline: none;
`;

export const HashTag = styled.form`
	display: flex;
	align-items: center;
	color: #f911c7;
	gap: 4px;
`;

export const Input = styled.input`
	width: 335px;
	align-items: center;
	color: #696969;
	border: 0;
	outline: none;
`;

export const Select = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	color: #000;
	font-size: 16px;
`;

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
`;
