import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 500px;
	height: auto;
`;

export const Title = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border: 1px solid;
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
	gap: 16px;
	img {
		width: 50px;
		height: 50px;
		border-radius: 100%;
	}
	h2 {
		font-size: 16px;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 20px;
	height: 10px;
`;

export const Bookmark = styled.div`
	width: 10px;
	height: 10px;
	background-color: red;
`;

export const Buy = styled.div`
	width: 10px;
	height: 10px;
	background-color: blue;
`;

export const Img = styled.div`
	width: 100%;
	height: 500px;
	border: 1px solid aqua;
`;

export const Info = styled.div`
	width: 100%;
	height: 300px;
	border: 1px solid purple;
`;

export const ButtonWrapper2 = styled.div`
	display: flex;
	justify-content: space-between;
	border: 1px solid green;
`;

export const ComButton = styled.span`
	display: flex;
	background-color: red;
	width: 30px;
	height: 30px;
`;

export const RecButton = styled.span`
	display: flex;
	background-color: blue;
	width: 30px;
	height: 30px;
`;

export const Comment = styled.p`
	display: ${({ active }) => (active ? "flex" : "none")};
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;

	& > div:nth-child(1) {
		height: 30%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	& > div:nth-child(2) {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: center;
		height: 70%;
		background-color: green;
	}
`;

export const Recipe = styled.p`
	display: ${({ active }) => (active ? "flex" : "none")};
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;

	& > div:nth-child(1) {
		height: 30%;
		background-color: rgba(0, 0, 0, 0.5);
	}

	& > div:nth-child(2) {
		height: 70%;
		background-color: yellow;
	}
`;

export const Description = styled.p``;
