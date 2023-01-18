import "./contact.css";
import React from "react";
import Footer from "../../../components/footer/Footer";
import MenuTop from "../../../components/menuTop/MenuTop";
import FormContact from "../../../components/formContact/FormContact";

export default function Contact() {
	return (
		<div>
			<MenuTop />
			<FormContact />
			<Footer />
		</div>
	);
}
