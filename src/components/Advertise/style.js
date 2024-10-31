import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Img = styled(Link)`
	width: 100px;
	height: 100px;
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
`;
