import React from "react";

const Bookmark = ({ isSelect }) => {
	const isSel = isSelect;
	return (
		<>
			{isSel ? (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
				>
					<rect width="32" height="32" />
					<g mask="url(#mask0_68_1984)">
						<path
							d="M7.33331 27V4.66663H24.6666V27L16 23.2776L7.33331 27Z"
							fill="#F911C7"
						/>
					</g>
				</svg>
			) : (
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="32"
					height="32"
					viewBox="0 0 32 32"
					fill="none"
				>
					<rect width="32" height="32" />
					<g mask="url(#mask0_62_941)">
						<path
							d="M7.33337 27V4.66663H24.6667V27L16 23.2776L7.33337 27ZM9.33337 23.9333L16 21.0666L22.6667 23.9333V6.66663H9.33337V23.9333Z"
							fill="#1C1B1F"
						/>
					</g>
				</svg>
			)}
		</>
	);
};

export default Bookmark;
