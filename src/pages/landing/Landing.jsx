import React from "react";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
// import Faq from "../../componentss/faq/Faq";
import Holder from "../../components/slider/Holder";
import Slider from "../../components/slider/Slider";
import Branch from "./branch/Branch";
import ServiceCompany from "./serviceCompany/ServiceCompany";
import Services from "./services/Services";
import Trophies from "./trophies/Trophies";
import StepperInvestment from "./StepperInvestment/StepperInvestment";
import WhyJahad from "./whyJahad/WhyJahad";

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
				<StepperInvestment />
				<WhyJahad />
				<ServiceCompany />
				<Branch />
			</div>
			<Footer />
		</>
	);
};

export default Landing;
