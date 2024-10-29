import styled from "@emotion/styled";

export const Container = styled.div``;

export const Title = styled.h1`
	font-size: 12px;
`;

export const TagWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

export const Tag = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100px;
	height: 20px;
	background-color: ${({ isSelected }) => (isSelected ? "grey" : "white")};
`;
