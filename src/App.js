import React from "react";
import {
	Temp,
	SignUp,
	Shopping,
	Bookmark,
	Search,
	SignIn,
	Home,
	Write,
} from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Footer } from "./components";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div />} />
				<Route path="*" element={<Footer />} />
				<Route path="/temp" element={<Temp />} />
				<Route path="/signIn" element={<SignIn />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/shopping" element={<Shopping />} />
				<Route path="/bookmark" element={<Bookmark />} />
				<Route path="/search" element={<Search />} />
				<Route path="/home" element={<Home />} />
				<Route path="/write" element={<Write />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
