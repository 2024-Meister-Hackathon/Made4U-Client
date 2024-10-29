import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Container = styled.div``;

export const NavWrapper = styled.div`
	display: flex;
	width: 100%;
	justify-content: space-between;
`;

export const Nav = styled(Link)`
	width: 30px;
	height: 30px;

	img {
		width: 30px;
		height: 30px;
		object-fit: cover;
	}
`;
