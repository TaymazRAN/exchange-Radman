import React from "react";
import Divider from "../../components/divider/Divider";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Holder from "../../components/slider/Holder";
import Slider from "../../components/slider/Slider";
import Faq from "../../components/faq/Faq";
import Services from "../../components/services/Services";
import Trophies from "../../components/trophies/Trophies";
import Steps from "../../components/steps/Steps";
import Whys from "../../components/whys/Whys";
import ServicesCompany from "../../components/services/ServicesCompany";
import Support from "../../components/support/Support";

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
