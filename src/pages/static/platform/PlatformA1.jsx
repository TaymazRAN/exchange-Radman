import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA1 = () => {
  return (
    <div className="page">
      <div className="compartmentContainer">
        <div className="compartment right">
          <div className="data">
            <h2>همراه پلاس</h2>
            <p>
              با همراه پلاس نیازی به نصب اپلیکیشن ندارید. اگر در زمان معاملات،
              خارج از محل کار و یا زندگی خود هستید، ما همراه پلاس را به شما
              پیشنهاد می کنیم. از طریق این سامانه به راحتی، با سرعت بالا و بدون
              نیاز به نصب اپلیکیشن، با گوشی ها و تبلت ها با سیستم عامل Android و
              iOS وارد سامانه معاملات شوید.{" "}
            </p>

            <a href="https://mobile.sjb.co.ir" rel="noreferrer" target="_blank">
              <Button className="button" variant="text" color="error">
                ورود
                <KeyboardArrowLeftRoundedIcon className="icon" />
              </Button>
            </a>
          </div>
          <div className="image platform1"></div>
        </div>
        {/* Left 1 */}
        <div className="compartment left">
          <div className="image PlatformA11"></div>
          <div className="data">
            <h2> ویژگی های همراه پلاس</h2>
            <p>
              دیده بان در این بخش با انتخاب گروه مورد نظر و اضافه کردن نماد به
              گروه، قادر خواهید بود برای خود پرتفوی مجازی بسازید.
            </p>
          </div>
        </div>
        {/* Right 2 */}
        <br /> <br /> <br />
        <div className="compartment right">
          <div className="data">
            <h2>ابزارهای ویژه</h2>
            <p>
              با فشردن دکمه “بیشتر” وارد صفحه ابزارهای ویژه می شوید که امکاناتی
              نظیر واریز و برداشت وجه و تغییر کارگزار ناظر را نمایش می دهد.
            </p>
          </div>
          <div className="image PlatformA12"></div>
        </div>
        {/* Left 2 */}
        <br /> <br /> <br />
        <div className="compartment left">
          <div className="image PlatformA13"></div>
          <div className="data">
            <h2> تنظیمات </h2>
            <p>
              در این بخش می توانید تنظیمات برنامه از جمله نمایش پیغام های ناظر،
              تایید قبل از ارسال و تقسیم سفارش بیش از آستانه را انجام دهید.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformA1;
