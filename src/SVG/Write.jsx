import React from "react";
import { useLocation } from "react-router-dom";

const Write = () => {
	const { pathname } = useLocation();
	return (
		<>
			{pathname === "/write" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
				>
					<path
						d="M8 14H10V10H14V8H10V4H8V8H4V10H8V14ZM0 18V0H18V18H0Z"
						fill="#1C1B1F"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="18"
					height="18"
					viewBox="0 0 18 18"
					fill="none"
				>
					<path
						d="M8 14H10V10H14V8H10V4H8V8H4V10H8V14ZM0 18V0H18V18H0ZM2 16H16V2H2V16Z"
						fill="#1C1B1F"
					/>
				</svg>
			)}
		</>
	);
};

export default Write;
