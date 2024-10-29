import React from "react";
import { Temp } from "./pages";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./pages/SignIn";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<div />} />
				<Route path="/temp" element={<Temp />} />
				<Route path="/signIn" element={<SignIn />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
