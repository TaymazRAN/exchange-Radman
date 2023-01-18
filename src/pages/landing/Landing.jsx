import React from "react";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Holder from "../../components/holder/Holder";
import Slider from "./slider/Slider";
import Faq from "./faq/Faq";
import Services from "./services/Services";
import Trophies from "./trophies/Trophies";
import Steps from "./steps/Steps";
import Whys from "./whys/Whys";
import ServicesCompany from "./services/ServicesCompany";
import Support from "./support/Support";

const Landing = () => {
	return (
		<>
			<Header />
			<Holder height="440px" />
			<Slider />
			<div className="widthFix">
				<Services />
				<Divider />
				<Trophies />
				<Divider />
				<Whys />
				<Divider />
				<Steps />
				<Divider />
				<ServicesCompany />
				<Divider />
				<Faq />
				<Divider />
				<Support />
			</div>
			<Footer />
		</>
	);
};

export default Landing;
