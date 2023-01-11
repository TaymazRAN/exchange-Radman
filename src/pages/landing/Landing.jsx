import React from "react";
import Faq from "../../components/faq/Faq";
import Slider from "../../components/slider/Slider";
import Branch from "./branch/Branch";

const Landing = () => {
  return (
    <div>
      <div className="widthFix">
        <Slider />
        <Faq />
        <Branch />
      </div>
    </div>
  );
};

export default Landing;
