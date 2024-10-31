import React from "react";
import { X, Arrow } from "../../../SVG";
import * as S from "./style";

const Category = ({
	setActive,
	tastes,
	selectTastes,
	setSelectTastes,
	kinds,
	selectKinds,
	setSelectKinds,
	setConfirmedTastes,
	setConfirmedKinds,
}) => {
	const selectTasteHandler = (e) => {
		const target = e.target;
		const id = parseInt(target.id) + 1;
		setSelectTastes((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	const selectKindHandler = (e) => {
		const target = e.target;
		const id = parseInt(target.id) + 1;
		setSelectKinds((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	const confirmSelection = () => {
		const confirmedTasteNames = tastes
			.filter((taste, index) => selectTastes[index + 1])
			.map((taste) => taste.name);

		const confirmedKindNames = kinds
			.filter((kind, index) => selectKinds[index + 1])
			.map((kind) => kind.name);

		setConfirmedTastes(confirmedTasteNames);
		setConfirmedKinds(confirmedKindNames);
		setActive(false);
	};

	return (
		<S.CategoryBox>
			<div onClick={() => setActive(false)}>
				<Arrow />
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1.25rem",
				}}
			>
				<S.SubTitle>음식의 맛</S.SubTitle>
				<S.CategoryWrapper>
					{tastes.map((item, idx) => (
						<S.Category
							key={item.id}
							id={idx.toString()}
							isSelected={selectTastes[idx + 1]}
							onClick={selectTasteHandler}
						>
							{item.name} <>{selectTastes[idx + 1] ? <X /> : ""}</>
						</S.Category>
					))}
				</S.CategoryWrapper>
			</div>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					gap: "1.25rem",
					marginBottom: "8.06rem",
				}}
			>
				<S.SubTitle>요리 종류</S.SubTitle>
				<S.CategoryWrapper>
					{kinds.map((item, idx) => (
						<S.Category
							key={item.id}
							id={idx.toString()}
							isSelected={selectKinds[idx + 1]}
							onClick={selectKindHandler}
						>
							{item.name}
							<>{selectKinds[idx + 1] ? <X /> : ""}</>
						</S.Category>
					))}
				</S.CategoryWrapper>
			</div>
			<S.Success onClick={confirmSelection}>설정 완료</S.Success>
		</S.CategoryBox>
	);
};

export default Category;
