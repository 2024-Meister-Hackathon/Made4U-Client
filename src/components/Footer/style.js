import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
	display: flex;
	position: fixed;
	bottom: 0;
	width: auto;
	height: 3rem;
	justify-content: center;
	align-items: center;
	flex-shrink: 0;
	gap: 2.5rem;
	padding: 0 1.6rem;
	background-color: white;
`;

export const Nav = styled(Link)`
	display: flex;
	width: 2rem;
	height: 2rem;
	justify-content: center;
	align-items: center;

	img {
		width: 1.25rem;
		height: 1.25rem;
		object-fit: cover;
	}
`;

export const ProImg = styled.div`
	display: flex;
	width: 100%;
	justify-content: center;
	img {
		width: 1.25rem;
		height: 1.25rem;
		border-radius: 100%;
	}
`;
