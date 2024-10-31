import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	height: 100vh;
	flex-direction: column;
	justify-content: center;
`;

export const PostsWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-content: flex-start;
	width: 300px;
	height: auto;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const TempWrapper = styled.div`
	display: flex;
	width: 100%;
	height: 84%;
	justify-content: center;
`;
