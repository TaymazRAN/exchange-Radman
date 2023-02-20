import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA6 = () => {
  return (
    <div className="page">
      <div className="compartmentContainer">
        <div className="compartment left">
          <div className="image platform6"></div>
          <div className="data">
            <h2>سامانه آنلاین آتی</h2>
            <p>
              با این سامانه هر آنچه را که در معاملات به آن نیاز خواهید داشت، به
              صورت یکجا به آن دسترسی دارید.{" "}
            </p>
            <a
              href="https://coinonline.sjb.co.ir"
              rel="noreferrer"
              target="_blank"
            >
              <Button className="button" variant="text" color="error">
                ورود
                <KeyboardArrowLeftRoundedIcon className="icon" />
              </Button>
            </a>
          </div>
        </div>
        {/* Right 2 */}
        <br /> <br /> <br />
        <div className="compartment right">
          <div className="data">
            <h2> ویژگی های سامانه آنلاین آتی </h2>
            <p>
              افزایش سرعت ارسال سفارشات صفحه ارسال سفارش سامانه آتی سکه به گونه
              ای طراحی شده که با کلیلک روی هر کدام از قیمت ها در قسمت اطلاعات
              نماد،همان قیمت در کادر ارسال سفارش درج شده و به این ترتیب سرعت
              ارسال سفارش افزایش و احتمال اشتباه کاهش می یابد.
            </p>
          </div>
          <div className="image PlatformA61"></div>
        </div>
        {/* Left 2 */}
        <br /> <br /> <br />
        <div className="compartment left">
          <div className="image PlatformA62"></div>
          <div className="data">
            <h2> محاسبه میانگین قیمت خرید و فروش و سود و زیان </h2>
            <p>
              میانگین قیمت خرید و فروش مشتری و سود و زیان موقعیت های تعهدی باز،
              براساس قیمت آخرین معامله در روزهای مختلف توسط سامانه محاسبه می
              شود.
            </p>
          </div>
        </div>
        {/* Right 2 */}
        <br /> <br /> <br />
        <div className="compartment right">
          <div className="data">
            <h2> نمایش خلاصه وضعیت مشتری </h2>
            <p>
              در صفحه ارسال سفارش، کلیه اطلاعات مورد نیار مشتری شامل مانده کل،
              تعداد موقعیت، وجه تضمین اولیه، وجه آزاد، حداقل وجه تضمین، سفارشات
              باز و … قابل مشاهده است.
            </p>
          </div>
          <div className="image PlatformA63"></div>
        </div>
        {/* Left 2 */}
        <br /> <br /> <br />
        <div className="compartment left">
          <div className="image PlatformA64"></div>
          <div className="data">
            <h2>
              {" "}
              نمایش لیست سفارشات و معاملات انجام شده مشتری با فیلترگذاری های
              مختلف
            </h2>
            <p>
              از طریق این سامانه مشتری به آرشیو کاملی از معاملات گذشته و سفارش
              های ارسال شده خود با فیلتر گذاری های مختلف، شامل زمان و سررسید
              دسترسی دارد.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformA6;
