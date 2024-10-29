import React from "react";
import { Temp } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div />} />
				<Route path="*" element={<h1>hello</h1>} />
				<Route path="/temp" element={<Temp />} />
				<Route path="/signUp" element={<SignUp />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
