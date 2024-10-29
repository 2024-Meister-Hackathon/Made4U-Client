import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	width: 500px;
	margin: 15px;
`;

export const Img = styled.img`
	width: 50px;
	height: 50px;
	border: 1px solid black;
`;

export const DetailBox = styled.div`
	display: flex;
	width: 200px;
	justify-content: space-between;
	align-items: center;
	border: 1px solid black;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Text = styled.h2`
	font-size: 16px;
`;
