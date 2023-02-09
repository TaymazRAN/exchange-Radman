import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const ServicesD2 = () => {
  return (
    <div className="page">
      <h2>منابع بورس انرژی ایران </h2>
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <Typography>
            <div className="customAnswer">
              <ul className="textBody">
                <li>
                  سامانه معاملاتی تمام الکترونیکی ویژه معاملات بازار فیزیکی و
                  مشتقه
                </li>
                <li>
                  سامانه تمام الکترونیکی ثبت و سپرده‌گذاری و تسویه و پایاپای
                  معاملات{" "}
                </li>
                <li>
                  بیش از 40 شرکت کارگزاری دارای مجوز فعالیت در بورس انرژی که
                  اغلب آن‎ها دارای رتبه الف و ب می‌باشند.
                </li>
                <li>
                  پذیرش بیش از 100 کالا- عرضه‌‎کننده و قرارداد شامل کالاهای بیش
                  از 20 پالایشگاه نفت‌وگاز، بیش از 20 نیروگاه تولید برق، بیش از
                  10 مجتمع پتروشیمی و چندین شرکت کک‌سازی و پالایش قطران
                </li>
              </ul>
            </div>
          </Typography>
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesD2;
