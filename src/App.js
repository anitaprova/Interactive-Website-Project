import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Characters from "./components/Characters";
import Statistics from "./components/Statistics";
import Contact from "./components/Contact";

export default function App() {
	return (
		<main>
			<Navbar />
			<Home />
			<Characters />
			<Statistics />
			<Contact />
		</main>
	);
}