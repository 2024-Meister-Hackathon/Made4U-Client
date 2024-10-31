import React, { useState } from "react";
import * as S from "./style";
import { Arrow, Profile, X } from "../../SVG";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
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

	const [selectKinds, setSelectKinds] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);
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

	const [selectAllergy, setSelectAllergy] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const allergy = [
		{
			id: 1,
			name: "없음",
		},
		{
			id: 2,
			name: "난류",
		},
		{
			id: 3,
			name: "육류",
		},
		{
			id: 4,
			name: "갑각류",
		},
		{
			id: 5,
			name: "어패류",
		},
		{
			id: 6,
			name: "견과류",
		},
		{
			id: 7,
			name: "복숭아",
		},
		{
			id: 8,
			name: "토마토",
		},
		{
			id: 9,
			name: "밀",
		},
		{
			id: 10,
			name: "메밀",
		},
		{
			id: 11,
			name: "아황산류 함유",
		},
	];

	const [selectVegetables, setSelectVegetables] = useState([
		false,
		false,
		false,
		false,
		false,
		false,
	]);
	const vegetables = [
		{
			id: 1,
			name: "없음",
		},
		{
			id: 2,
			name: "비건",
		},
		{
			id: 3,
			name: "락토",
		},
		{
			id: 4,
			name: "오브",
		},
		{
			id: 5,
			name: "락토-오브",
		},
		{
			id: 6,
			name: "폴로",
		},
	];

	const [selectReligions, setSelectReligions] = useState([
		false,
		false,
		false,
		false,
		false,
	]);
	const religions = [
		{
			id: 1,
			name: "없음",
		},
		{
			id: 2,
			name: "힌두교",
		},
		{
			id: 3,
			name: "이슬람교",
		},
		{
			id: 4,
			name: "유대교",
		},
		{
			id: 5,
			name: "불교",
		},
	];

	const [step, setStep] = useState(1);
	const nav = useNavigate();

	const [url, setUrl] = useState("");

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
		console.log(target, " - ", id);
		setSelectKinds((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	const selectAllergyHandler = (e) => {
		const target = e.target;
		const id = parseInt(target.id) + 1;
		console.log(target, " - ", id);
		setSelectAllergy((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	const selectVegetablesHandler = (e) => {
		const target = e.target;
		const id = parseInt(target.id) + 1;
		console.log(target, " - ", id);
		setSelectVegetables((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	const selectReligionsHandler = (e) => {
		const target = e.target;
		const id = parseInt(target.id) + 1;
		console.log(target, " - ", id);
		setSelectReligions((prev) => {
			const newIsSelect = [...prev];
			newIsSelect[id] = !newIsSelect[id];
			return newIsSelect;
		});
	};

	const ImgUploadHandler = (e) => {
		const file = e.target.files[0];
		if (file && file.type.startsWith("image/")) {
			// 이미지 파일인지 확인
			const reader = new FileReader();
			reader.onload = () => {
				setUrl(reader.result); // 이미지 URL을 상태에 저장
			};
			reader.readAsDataURL(file); // 파일을 base64 URL로 변환
		}
	};

	return (
		<S.Container>
			<div
				onClick={() => {
					console.log(step);
					if (step === 1) nav(-1);
					else setStep(step - 1);
				}}
			>
				<Arrow />
			</div>
			{step === 1 && (
				<>
					<S.Title>회원가입</S.Title>
					<S.Input placeholder="이메일" type="text" />

					<S.InputWrapper>
						<S.Input placeholder={"비밀번호"} type={"password"} />
						<S.Input placeholder={"비밀번호 확인"} type={"password"} />
					</S.InputWrapper>
				</>
			)}
			{step === 2 && (
				<>
					<S.ProImg>
						<label htmlFor="image">
							{url.length > 0 ? (
								<img src={url} alt="프로필 사진" />
							) : (
								<Profile />
							)}
						</label>
						<input
							type="file"
							alt="profile"
							id="image"
							accept="image/*"
							onChange={ImgUploadHandler}
						/>
					</S.ProImg>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "0.75rem",
							marginBottom: "13.25rem",
						}}
					>
						<S.SubTitle>아이디</S.SubTitle>
						<S.Input placeholder="10자 이내로 입력해주세요" type="text" />
					</div>
				</>
			)}
			{step === 3 && (
				<>
					<div
						style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
					>
						<S.SubTitle>좋아하는 맛</S.SubTitle>
						<S.TagWrapper>
							{tastes.map((item, idx) => (
								<S.Tag
									key={item.id}
									id={idx.toString()}
									isSelected={selectTastes[idx + 1]}
									onClick={selectTasteHandler}
								>
									{item.name} <>{selectTastes[idx + 1] ? <X /> : ""}</>
								</S.Tag>
							))}
						</S.TagWrapper>
					</div>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1.25rem",
							marginBottom: "8.06rem",
						}}
					>
						<S.SubTitle>좋아하는 한식 종류</S.SubTitle>
						<S.TagWrapper>
							{kinds.map((item, idx) => (
								<S.Tag
									key={item.id}
									id={idx.toString()}
									isSelected={selectKinds[idx + 1]}
									onClick={selectKindHandler}
								>
									{item.name}
									<>{selectKinds[idx + 1] ? <X /> : ""}</>
								</S.Tag>
							))}
						</S.TagWrapper>
					</div>
				</>
			)}
			{step === 4 && (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1.25rem",
							marginBottom: "13.06rem",
						}}
					>
						<S.SubTitle>알레르기</S.SubTitle>
						<S.TagWrapper>
							{allergy.map((item, idx) => (
								<S.Tag
									key={item.id}
									id={idx.toString()}
									isSelected={selectAllergy[idx + 1]}
									onClick={selectAllergyHandler}
								>
									{item.name}
									<>{selectAllergy[idx + 1] ? <X /> : ""}</>
								</S.Tag>
							))}
						</S.TagWrapper>
					</div>
				</>
			)}
			{step === 5 && (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1.25rem",
							marginBottom: "13.06rem",
						}}
					>
						<S.SubTitle>채식주의자/비건</S.SubTitle>
						<S.TagWrapper>
							{vegetables.map((item, idx) => (
								<S.Tag
									key={item.id}
									id={idx.toString()}
									isSelected={selectVegetables[idx + 1]}
									onClick={selectVegetablesHandler}
								>
									{item.name}
									<>{selectVegetables[idx + 1] ? <X /> : ""}</>
								</S.Tag>
							))}
						</S.TagWrapper>
					</div>
				</>
			)}
			{step === 6 && (
				<>
					<div
						style={{
							display: "flex",
							flexDirection: "column",
							gap: "1.25rem",
							marginBottom: "13.06rem",
						}}
					>
						<S.SubTitle>종교</S.SubTitle>
						<S.TagWrapper>
							{religions.map((item, idx) => (
								<S.Tag
									key={item.id}
									id={idx.toString()}
									isSelected={selectReligions[idx + 1]}
									onClick={selectReligionsHandler}
								>
									{item.name}
									<>{selectReligions[idx + 1] ? <X /> : ""}</>
								</S.Tag>
							))}
						</S.TagWrapper>
					</div>
				</>
			)}
			<S.Next
				onClick={() => {
					if (step !== 6) setStep(step + 1);
					else {
						alert("회원가입 성공");
						nav("/signIn");
					}
				}}
			>
				{step !== 6 ? "다음으로" : "회원가입 완료"}
			</S.Next>
		</S.Container>
	);
};

export default SignUp;
