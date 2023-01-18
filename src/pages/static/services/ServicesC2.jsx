import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const ServicesC2 = () => {
  return (
    <div className="page">
      <h2> معرفی ServicesC2 </h2>
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <Typography>
            <div className="customAnswer">
              <ul>
                <li>
                  <b> سامانه ServicesC2 :</b>
                  شرکت کارگزاری صباجهاد در تاریخ 1383/06/08 و با شماره 229185 در
                  اداره ثبت شرکت‌ها و مؤسسات غیرتجاری تهران به ثبت رسید و از اول
                  مهرماه همان سال با افتتاح تالار بورس کالای کشاورزی، فعالیت خود
                  را آغاز نمود. صباجهاد با تکیه بر سرمایه انسانی متخصص و با هدف
                  ارائه راهکارهای تخصصی مالی در صنعت واسطه گری مالی و بنگاه داری
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

export default ServicesC2;
