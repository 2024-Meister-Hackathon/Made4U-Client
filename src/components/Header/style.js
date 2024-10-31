import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const NavWrapper = styled.div`
	display: flex;
	position: fixed;
	top: 0;
	width: 21rem;
	height: 50px;
	justify-content: space-between;
	align-items: center;
	background-color: white;
	padding: 0.5rem 1.25rem 0.3rem 1.25rem;
`;

export const Nav = styled(Link)`
	width: 2rem;
	height: 2rem;

	img {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}

	svg {
		width: 2rem;
		height: 2rem;
	}
`;
