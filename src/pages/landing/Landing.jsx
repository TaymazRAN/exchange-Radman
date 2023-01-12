import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import HrLine from "../../components/hr-Line/HrLine";
// import Faq from "../../componentss/faq/Faq";
import Holder from "../../components/slider/Holder";
import Slider from "../../components/slider/Slider";
import Branch from "./branch/Branch";
import ServiceCompany from "./serviceCompany/ServiceCompany";
import Services from "./services/Services";
import Statistics from "./statistics/Statistics";
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
				<HrLine />
				<Statistics />
				<HrLine />
				<StepperInvestment />
				<HrLine />
				<WhyJahad />
				<HrLine />
				<ServiceCompany />
				<Branch />
			</div>
			<Footer />
		</>
	);
};

export default Landing;
