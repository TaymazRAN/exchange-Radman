import * as React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Services() {
  const navigate = useNavigate();

  return (
    <div className="cardBox">
      <h2> خدمات کارگزاری صبا جهاد </h2>

      <div className="cards">
        <div className="card service">
          <div className="circle"></div>
          <div className="sign one"></div>
          <h3 className="title">بورس اوراق بهادار</h3>
          <p className="description">
            بازار رسمی و سازمان‌یافتهٔ سرمایه است که در آن خرید و فروش سهام
            شرکت‌ها و اوراق بهادار ...
          </p>
          <Button
            className="button"
            variant="text"
            color="error"
            onClick={(event) => navigate("/static/ServicesA1")}
          >
            مطالب بیشتر
            <KeyboardArrowLeftRoundedIcon className="icon" />
          </Button>
        </div>

        <div className="card service">
          <div className="circle"></div>
          <div className="sign two"></div>
          <h3 className="title">بورس کالا</h3>
          <p className="description">
            به داد و ستد نقد، نسیه و سلف انواع محصولات صنعتی و کشاورزی در جهاد
            می‌پردازد و راه‌اندازی معاملات ابزارهای مشتقه و ...
          </p>
          <Button
            className="button"
            variant="text"
            color="error"
            onClick={(event) => navigate("/static/ServicesB1")}
          >
            مطالب بیشتر
            <KeyboardArrowLeftRoundedIcon className="icon" />
          </Button>
        </div>

        <div className="card service">
          <div className="circle"></div>
          <div className="sign three"></div>
          <h3 className="title">آتی کالا</h3>
          <p className="description">
            یک مرکز مالی برای انجام قراردادهای آتی استاندارد است که شامل
            توافق‌نامه‌ای قانونی با حدومرز مشخص است و ...
          </p>
          <Button
            className="button"
            variant="text"
            color="error"
            onClick={(event) => navigate("/static/ServicesC2")}
          >
            مطالب بیشتر
            <KeyboardArrowLeftRoundedIcon className="icon" />
          </Button>
        </div>

        <div className="card service">
          <div className="circle"></div>
          <div className="sign four"></div>
          <h3 className="title">بورس انرژی</h3>
          <p className="description">
            به منظور انجام معاملات حامل‌های انرژی با مجوز شورای عالی بورس و
            اوراق بهادار به عنوان چهارمین بورس رسمی کشور و ...
          </p>
          <Button
            className="button"
            variant="text"
            color="error"
            onClick={(event) => navigate("/static/ServicesD1")}
          >
            مطالب بیشتر
            <KeyboardArrowLeftRoundedIcon className="icon" />
          </Button>
        </div>
      </div>
    </div>
  );
}
