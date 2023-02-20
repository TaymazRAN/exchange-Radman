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
                ورود
                <KeyboardArrowLeftRoundedIcon className="icon" />
              </Button>
            </a>
          </div>
          <div className="image platform3"></div>
        </div>
        {/* Left 1 */}
        <div className="compartment left">
          <div className="image PlatformA31"></div>
          <div className="data">
            <h2> ویژگی های آنلاین پلاس </h2>
            <p>
              سفارش چند نمادی کاربر می تواند با قرار دادن چندین پنل ارسال سفارش
              در یک صفحه برای نمادهای مختلف، سفارش های خرید و فروش خود را به
              صورت همزمان و با سرعت بالا ارسال نماید.
            </p>
          </div>
        </div>
        {/* Right 2 */}
        <br /> <br /> <br />
        <div className="compartment right">
          <div className="data">
            <h2> تنظیمات اختصاصی</h2>
            <p>
              علاوه بر صفحه پیش فرض آنلاین پلاس، چهار صفحه دیگر در اختیار مشتری
              قرار داده شده که می تواند ابزارک های مختلف را با توجه به نیاز و
              سلیقه خود در آنها بچیند و استفاده نماید.
            </p>
          </div>
          <div className="image PlatformA32"></div>
        </div>
        {/* Left 2 */}
        <br /> <br /> <br />
        <div className="compartment left">
          <div className="image PlatformA33"></div>
          <div className="data">
            <h2> ابزارک ها </h2>
            <p>
              ابزارک ها دسترسی های سریع به بخش های مختلفی از سامانه می باشند که
              توسط کاربر قابل انتخاب هستند. از طریق این ابزارک ها مشتری می تواند
              تمامی اطلاعات مورد نظر خود را از بازار سهام گردآوری نماید.
            </p>
          </div>
        </div>
        {/* Right 2 */}
        <br /> <br /> <br />
        <div className="compartment right">
          <div className="data">
            <h2> سفارش با حجم بالا </h2>
            <p>
              از این ویژگی برای ارسال درخواست های خرید و فروش با حجم بالاتر از
              آستانه سفارش استفاده می گردد. بدین منظور حجم درخواست مورد نظر را
              وارد می کنیم و با استفاده از گزینه تقسیم سفارشات بزرگ، درخواست
              خرید یا فروش به دسته های کوچک تر تقسیم شده و به صورت همزمان ارسال
              می گردد.
            </p>
          </div>
          <div className="image PlatformA34"></div>
        </div>
      </div>
    </div>
  );
};

export default PlatformA3;
