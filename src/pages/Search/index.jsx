import React from "react";
import * as S from "./style";
import { Advertise, Footer, SearchBar } from "../../components";

const Search = () => {
	const posts = [
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-LJbfGBD9H1k7MgB0RYw43Ou2YHREEn_OA&s",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-LJbfGBD9H1k7MgB0RYw43Ou2YHREEn_OA&s",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-LJbfGBD9H1k7MgB0RYw43Ou2YHREEn_OA&s",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
		{
			img: "https://i.pinimg.com/236x/44/f9/83/44f9831be884e4c65f167b96e16fa94e.jpg",
		},
	];
	return (
		<S.Container>
			<SearchBar />
			<S.TempWrapper>
				<S.PostsWrapper>
					{posts.map((item, idx) => (
						<Advertise img={item.img} idx={idx} key={idx} />
					))}
				</S.PostsWrapper>
			</S.TempWrapper>
			<Footer />
		</S.Container>
	);
};

export default Search;
