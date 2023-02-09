import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA3 = () => {
  return (
    <div className="page">
      <div className="compartmentContainer">
        <div className="compartment right">
          <div className="data">
            <h2>آنلاین پلاس</h2>
            <p>
              سامانه «آنلاین پلاس» بر پایه نیازهای متفاوت معامله گران حرفه ای
              طراحی شده که یکی از ویژگی های برجسته آن، اختصاصی سازی امکانات
              متنوع این سامانه معاملاتی می باشد. امکان مدیریت سفارش ها با حجم
              بالا و یا ارسال همزمان سفارش در چند نماد مختلف، شما را قادر می
              سازد در کوتاه ترین زمان ممکن، استراتژی معاملاتی خود را اجرا
              نمایید.{" "}
            </p>
            <a
              href="https://onlineplus.sjb.co.ir/Account/Login"
              rel="noreferrer"
              target="_blank"
            >
              <Button className="button" variant="text" color="error">
                ,ورود
                <KeyboardArrowLeftRoundedIcon className="icon" />
              </Button>
            </a>
          </div>
          <div className="image platform3"></div>
        </div>
      </div>
    </div>
  );
};

export default PlatformA3;
