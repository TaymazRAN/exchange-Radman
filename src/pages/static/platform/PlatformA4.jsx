import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA4 = () => {
  return (
    <div className="page">
      <div className="compartmentContainer">
        <div className="compartment left">
          <div className="image platform4"></div>
          <div className="data">
            <h2> اطمینان در معاملات! </h2>
            <p>
              با نصب این اپلیکیشن بر روی تلفن همراه و تبلت Android یا iOS خود،
              تغییر و تحولات لحظه ای در جهان را از دست نمی دهید و از هر کجا که
              باشید می توانید معاملات خود را انجام دهید.{" "}
            </p>
            <a
              href="https://c.sjb.co.ir/User/Login?ReturnUrl=/"
              rel="noreferrer"
              target="_blank"
            >
              <Button className="button" variant="text" color="error">
                مطالب بیشتر
                <KeyboardArrowLeftRoundedIcon className="icon" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformA4;
