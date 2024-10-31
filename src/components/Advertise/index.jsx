import React from "react";
import * as S from "./style";
const Advertise = ({ spc, img, idx }) => {
	return (
		<S.Img spc={spc} to={"/"} idx={idx}>
			<img src={img} alt="광고" />
		</S.Img>
	);
};

export default Advertise;
