import React from "react";
import Faq from "../../components/faq/Faq";
import Holder from "../../components/slider/Holder";
import Slider from "../../components/slider/Slider";
import Branch from "./branch/Branch";

const Landing = () => {
  return (
    <>
      <Holder height = "390px" />
			<Slider />
			<div className="widthFix">
				<Faq />
				<Branch />
			</div>
		</>
	);
};

export default Landing;
