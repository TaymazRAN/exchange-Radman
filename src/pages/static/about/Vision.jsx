import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const Vision = () => {
  return (
    <div className="page">
      <h2> چشم انداز و ماموریت </h2>
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <Typography>
            <div className="customAnswer">
              <ul>
                <li className="textBody">
                  <b> چشم انداز :</b>
                  چشم انداز مرجع پیشرو و سرآمد در صنعت خدمات مالی و سرمایه گذاری
                  با ارائه راهکارهای تخصصی و روزآمد مالی در راستای بهینه سازی
                  تصمیمات مالی با افق سال 1400
                </li>

                <li className="textBody">
                  <b> ماموریت :</b>
                  شرکتی است دانشی و روزآمد که با رویکرد تبلور دانش مالی در
                  ارزش‌آفرینی، با تکیه بر سرمایه انسانی متخصص و با هدف ارائه
                  راهکارهای تخصصی مالی در صنعت واسطه گری مالی و بنگاه داری
                  (بازار سرمایه، بازار پول و هلدینگ ها) فعالیت می کند.
                </li>
              </ul>
            </div>
          </Typography>
        </Accordion>
      </div>
    </div>
  );
};

export default Vision;
