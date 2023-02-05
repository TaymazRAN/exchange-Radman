import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const Permissions = () => {
  return (
    <div className="page">
      <h2> افتخارات و مجوز ها </h2>
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <Typography>
            <div className="customAnswer">
              <ul>
                <li className="textBody">
                  {/* <b> افتخارات :</b> */}
                  - دارای رتبه الف از سازمان بورس و اوراق بهادار
                  <br />
                  - جزو 10 کارگزاری اول از نظر حجم و ارزش معاملات
                  <br />
                  - جزو 5 کارگزار اول در تالار محصولات پتروشیمی و فرآورده‌های
                  نفتی در بورس کالا از نظر حجم و ارزش معاملات
                  <br />
                  - جزو کارگزاران عرضه کننده محصولات پتروشیمی و صنعتی
                  <br />
                </li>
              </ul>
            </div>
          </Typography>
        </Accordion>
      </div>
    </div>
  );
};

export default Permissions;
