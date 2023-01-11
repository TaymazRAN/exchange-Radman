import React from "react";
import HrLine from "../../components/hr-Line/HrLine";
// import Faq from "../../components/faq/Faq";
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
      <Holder height="390px" />
      <Slider />
      <div className="widthFix">
        {/* <Faq /> */}
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
    </>
  );
};

export default Landing;
