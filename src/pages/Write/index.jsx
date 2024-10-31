import React, { useState } from "react";
import * as S from "./style";
import Category from "./Category";
import Enroll from "./Enroll";
import Recipe from "./Recipe";

const XIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
		>
			<rect width="40" height="40" />
			<g mask="url(#mask0_127_1007)">
				<path
					d="M10.6667 31.0896L8.9104 29.3333L18.2437 20L8.9104 10.6667L10.6667 8.9104L20 18.2437L29.3333 8.9104L31.0896 10.6667L21.7562 20L31.0896 29.3333L29.3333 31.0896L20 21.7562L10.6667 31.0896Z"
					fill="#1C1C1C"
				/>
			</g>
		</svg>
	);
};

const ArrowIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="40"
			height="40"
			viewBox="0 0 40 40"
			fill="none"
		>
			<rect
				x="40"
				width="40"
				height="40"
				rx="20"
				transform="rotate(90 40 0)"
				fill="#C8F844"
			/>
			<rect x="34" y="6" width="28" height="28" transform="rotate(90 34 6)" />
			<g mask="url(#mask0_78_2517)">
				<path
					d="M11.25 19.125L25.3982 19.125L18.7525 12.4794L20 11.25L28.75 20L20 28.75L18.7525 27.5206L25.3982 20.875L11.25 20.875L11.25 19.125Z"
					fill="#1C1C1C"
				/>
			</g>
		</svg>
	);
};

const Write = () => {
	const [step, setStep] = useState(1);
	const [img, setImg] = useState("");

	const [active, setActive] = useState(false);

	const [selectTastes, setSelectTastes] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const [selectKinds, setSelectKinds] = useState([
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
			name: "단맛",
		},
		{
			id: 2,
			name: "짠맛",
		},
		{
			id: 3,
			name: "쓴맛",
		},
		{
			id: 4,
			name: "감칠맛",
		},
		{
			id: 5,
			name: "신맛",
		},
		{
			id: 6,
			name: "매운맛",
		},
	];
	const kinds = [
		{
			id: 1,
			name: "면",
		},
		{
			id: 2,
			name: "밥",
		},
		{
			id: 3,
			name: "국",
		},
		{
			id: 4,
			name: "조림",
		},
		{
			id: 5,
			name: "무침",
		},
		{
			id: 6,
			name: "찜",
		},
		{
			id: 7,
			name: "디저트",
		},
		{
			id: 8,
			name: "기타",
		},
	];

	const [confirmedTastes, setConfirmedTastes] = useState([]);
	const [confirmedKinds, setConfirmedKinds] = useState([]);

	// console.log(confirmedTastes, confirmedKinds);

	const [tags, setTags] = useState([]);
	const [tag, setTag] = useState("");

	const [desc, setDesc] = useState("");

	const ImgUploadHandler = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("image/")) {
			const reader = new FileReader();
			reader.onload = () => {
				setImg(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const AddTagHandler = (event) => {
		event.preventDefault();
		setTag("");
		setTags((prev) => [...prev, tag]);
	};

	return (
		<S.Container>
			{step === 1 && (
				<>
					<S.Head>
						<span style={{ width: "2.5rem", height: "2.5rem" }}>
							<XIcon />
						</span>
						사진선택
						<S.Next onClick={() => setStep(step + 1)}>다음으로</S.Next>
					</S.Head>
					<S.Img>
						<S.Label htmlFor="img">
							{img.length > 0 ? <img src={img} alt="사진" /> : <S.DefImg />}
						</S.Label>
						<input
							id="img"
							type="file"
							accept="image/*"
							style={{ display: "none" }}
							onChange={ImgUploadHandler}
							alt="profile"
						/>
					</S.Img>
					<S.BottomBox>
						<S.TagWrapper>
							{tags.map((item, idx) => (
								<S.Tag key={idx}># {item}</S.Tag>
							))}
						</S.TagWrapper>
						<S.Description
							value={desc}
							onChange={(e) => setDesc(e.target.value)}
							placeholder="글을 입력해주세요."
						/>
						<S.HashTag onSubmit={AddTagHandler}>
							#
							<S.Input
								placeholder="해시태그"
								value={tag}
								onChange={(e) => setTag(e.target.value)}
							/>
						</S.HashTag>
						<S.Select>
							카테고리 설정
							<div onClick={() => setActive(true)}>
								<ArrowIcon />
							</div>
						</S.Select>
					</S.BottomBox>
					{active && (
						<Category
							setActive={setActive}
							tastes={tastes}
							selectTastes={selectTastes}
							setSelectTastes={setSelectTastes}
							kinds={kinds}
							selectKinds={selectKinds}
							setSelectKinds={setSelectKinds}
							setConfirmedTastes={setConfirmedTastes}
							setConfirmedKinds={setConfirmedKinds}
						/>
					)}
				</>
			)}
			{step === 2 && <Enroll setStep={setStep} />}
			{step === 3 && <Recipe setStep={setStep} />}
		</S.Container>
	);
};

export default Write;
