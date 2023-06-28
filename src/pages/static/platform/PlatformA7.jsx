import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA7 = () => {
  return (
    <div className="page">
      <div className="compartmentContainer">
        {/* Right  1 */}
        <div className="compartment right">
          <div className="data">
            <h2>سامانه معاملات اینترنتی (آفلاین)</h2>
            <p>
              با سامانه سفارش های اینترنتی در هر زمان از شبانه روز می توانید
              درخواست خرید و یا فروش خود را به اتاق معاملات ما ارسال نمایید و
              اجرای آنها را به معامله گران حرفه ای بسپارید. اگر مشغله روزانه به
              شما فرصت معامله نمی دهد، ما اجرای سفارش های از پیش ارسال شده شما
              را به عهده می گیریم.
            </p>
            <a
              href="https://c.sjb.co.ir/User/Login?ReturnUrl=/"
              rel="noreferrer"
              target="_blank"
            >
              <Button className="button" variant="text" color="error">
                ورود
                <KeyboardArrowLeftRoundedIcon className="icon" />
              </Button>
            </a>
          </div>
          <div className="image platform7"></div>
        </div>
        <br /> <br />
        <div className="borderC"></div>
        <br />
        {/* Left 1 */}
        <div className="compartment left">
          <div className="image platformA71"></div>
          <div className="data">
            <h2> ویژگی های سامانه اینترنتی </h2>
            <p>
              سرعت در اجرای فرآیند خرید و فروش
              <br />
              در این روش، سفارش‌های سرمایه‌گذار در کمترین زمان ممکن بدست
              معامله‌گران می‌رسد و اجرا می شود.
            </p>
          </div>
        </div>
        {/* Right 2 */}
        <br /> <br /> <br />
        <div className="compartment right">
          <div className="data">
            <h2> امکانات متنوع</h2>
            <p>
              امکان واریز آنی وجه، مشاهده گردش حساب، مشاهده سبد سهام و حجم
              معاملات، همگی از طریق سامانه معاملات اینترنتی برای مشتری فراهم شده
              است.
            </p>
          </div>
          <div className="image platformA72"></div>
        </div>
      </div>
    </div>
  );
};

export default PlatformA7;
