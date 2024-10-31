import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: auto;
`;

export const Title = styled.div`
	display: flex;
	padding: 0.5rem 1.25rem;
	align-items: center;
	justify-content: space-between;
	gap: 0.5rem;
	align-self: stretch;
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

export const Bookmark = styled.div`
	width: 10px;
	height: 10px;
	background-color: red;
`;

export const Img = styled.div`
	width: 100%;
	height: auto;
	img {
		width: 100%;
	}
`;

export const Info = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: start;
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 90%;
	padding: 1rem 1.22rem 0 1.22rem;
	justify-content: space-between;
	align-items: center;
`;

export const ComButton = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
`;

export const RecButton = styled.span`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 30px;
	height: 30px;
`;

export const RecipeBox = styled.div`
	display: ${({ active }) => (active ? "flex" : "none")};
	flex-direction: column;
	width: 100%;
	height: 100%;
	position: absolute;
	bottom: 0;
	overflow: hidden;
`;

export const Temp = styled.div`
	height: 10rem;
`;

export const Recipe = styled.ul`
	display: flex;
	flex-direction: column;
	height: 33rem;
	padding: 2rem 1rem 0 1rem;
	background-color: white;
	align-items: center;
	border-radius: 15px 15px 0 0;
	overflow-y: scroll;
	::-webkit-scrollbar {
		display: none;
	}
`;

export const Bar = styled.span`
	display: flex;
	width: 100%;
	height: auto;
	flex-direction: column;
	align-items: center;
	gap: 1rem;
	background-color: white;
	border-radius: 15px 15px 0 0;

	span {
		width: 3.75rem;
		height: 0.375rem;
		border-radius: 62.4375rem;
		background: var(--gray-800, #363636);
	}
`;

export const Content = styled.div`
	width: 100%;
	margin: 2rem 0;
	width: 100%;
`;

export const SubTitle = styled.h2`
	display: flex;
	width: 100%;
	color: #000;
	padding: 10px 0;
	border-bottom: 1px solid black;
	font-size: 1.25rem;
`;

export const Material = styled.div`
	display: flex;
	width: 95%;
	padding: 0.875rem 0.625rem 0.875rem 0.5rem;
	justify-content: space-between;
	align-items: center;
	${({ des }) => (des ? "border: none;" : "border-bottom: 1px solid #888;")}
	div {
		display: flex;
		width: 8.125rem;
		justify-content: space-between;
		align-items: center;
		gap: 5rem;
	}

	h2 {
		font-size: 2rem;
	}
`;

export const IngredientWrapper = styled.div`
	display: flex;
	width: 95vw;
	overflow-x: scroll;
	::-webkit-scrollbar {
		display: none;
	}
	gap: 10px;
	padding: 0.75rem 0 0.75rem 1.22rem;
`;

export const Description = styled.p`
	display: flex;
	height: 2.75rem;
	padding: 0 1.25rem;
	color: #1c1c1c;
	font-size: 0.875rem;
`;
