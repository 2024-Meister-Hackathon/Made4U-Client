import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
	const { pathname } = useLocation();
	return (
		<>
			{pathname === "/home" ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M3 21V9.01367L12 3L21 9.01367V21H14.2845V13.8697H9.7155V21H3Z"
						fill="#1C1B1F"
					/>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
				>
					<path
						d="M4.8 19.4018H8.8155V13.0706H15.1845V19.4018H19.2V9.81276L12 4.99772L4.8 9.81276V19.4018ZM3 21V9.01367L12 3L21 9.01367V21H13.3845V14.6688H10.6155V21H3Z"
						fill="#1C1B1F"
					/>
				</svg>
			)}
		</>
	);
};

export default Home;
