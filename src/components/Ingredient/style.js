import styled from "@emotion/styled";

export const Container = styled.div`
	display: flex;
	width: ${({ type }) => (type === "feed" ? "19.19rem" : "100%")};
	border-radius: 15px;
`;

export const DetailBox = styled.div`
	display: flex;
	width: ${({ type }) => (type === "feed" ? "15rem" : "100%")};
	height: 2.125rem;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid var(--gray-200, #cfcfcf);
	padding: 0.75rem 0.75rem 0.75rem 1.5rem;
`;

export const TextWrapper = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Text = styled.h2`
	color: var(--gray-900, #1c1c1c);
	font-size: 0.875rem;
`;

export const Counter = styled.div`
	display: flex;
	gap: 1rem;
`;
