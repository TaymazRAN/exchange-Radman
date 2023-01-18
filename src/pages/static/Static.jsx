import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Branch from "./contactus/Branch";
import Contact from "./contactus/Contact";

const Static = () => {
	return (
		<>
			<Header dark />
			<div className="widthFix">
				<Routes>
					<Route path="/contact" element={<Contact />} />
					<Route path="/branch" element={<Branch />} />
				</Routes>
			</div>
			<Footer />
		</>
	);
};

export default Static;
