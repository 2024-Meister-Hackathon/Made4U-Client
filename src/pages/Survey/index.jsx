import React, { useState } from "react";
import * as S from "./style";

const Survey = () => {
	const [selectTastes, setSelectTastes] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const tastes = [
		{
			id: 1,
			name: "1",
		},
		{
			id: 2,
			name: "2",
		},
		{
			id: 3,
			name: "3",
		},
		{
			id: 4,
			name: "4",
		},
		{
			id: 5,
			name: "5",
		},
		{
			id: 6,
			name: "6",
		},
	];

	const selectTasteHandler = (e) => {
		const target = e.target;
		const id = parseInt(target.id) + 1;
		console.log(target, " - ", id);
		setSelectTastes((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	return (
		<S.Container>
			<S.Title>Tastes</S.Title>
			<S.TagWrapper>
				{tastes.map((item, idx) => (
					<S.Tag
						key={item.id}
						id={idx.toString()}
						isSelected={selectTastes[idx + 1]}
						onClick={selectTasteHandler}
					>
						{item.name}
					</S.Tag>
				))}
			</S.TagWrapper>
		</S.Container>
	);
};

export default Survey;
