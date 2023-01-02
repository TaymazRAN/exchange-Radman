import "./login.css";
import React from "react";
import MenuTop from "../../../component/menuTop/MenuTop";
import Footer from "../../../component/footer/Footer";
import Faq from "../../../component/faq/Faq";
import FormLogin from "./FormLogin";
import { Routes, Route } from "react-router-dom";
import LoginAdmin from "./loginPages/LoginAdmin";
import LoginOrganization from "./loginPages/LoginOrganization";
import LoginUser from "./loginPages/LoginUser";
import FormRegister from "./FormRegister";

export default function Login() {
	return (
		<div>
			<MenuTop />
			<Routes>
				<Route exact path="/" element={<FormLogin />} />
				<Route path="/new" element={<FormRegister />} />
				<Route path="/admin" element={<LoginAdmin />} />
				<Route path="/manager" element={<LoginOrganization />} />
				<Route path="/user" element={<LoginUser />} />
			</Routes>
			<Faq />
			<Footer />
		</div>
	);
}
