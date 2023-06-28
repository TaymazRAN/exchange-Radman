import React from "react";
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import FaxRoundedIcon from "@mui/icons-material/FaxRounded";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export default function Footer() {
  return (
    <div className="footerBox">
      <div className="data">
        <div className="columns">
          <div className="column about">
            <h2>کارگزاری صبا جهاد</h2>
            <p>
              شرکت کارگزاری صباجهاد در تاریخ 1383/06/08 و با شماره 229185 در
              اداره ثبت شرکت‌ها و مؤسسات غیرتجاری تهران به ثبت رسید و از اول
              مهرماه همان سال با افتتاح تالار بورس کالای کشاورزی، فعالیت خود را
              آغاز نمود. صباجهاد با تکیه بر سرمایه انسانی متخصص و با هدف ارائه
              راهکارهای تخصصی مالی در صنعت واسطه گری مالی و بنگاه داری (بازار
              سرمایه، بازار پول و هلدینگ ها) فعالیت می کند.
            </p>
          </div>
          <div className="column">
            <h2>خدمات</h2>
            <a href="/">بورس اوراق بهادر</a>
            <a href="/">بورس کالا</a>
            {/* <a href="/">آتی کالا</a> */}
            <a href="/">بورس انرژی</a>
            <a href="/">عرضه و پذیرش شرکت‌ها</a>
          </div>
          <div className="column contact">
            <h2>راه‌های ارتباطی با ما</h2>
            <p>
              <LocationOnRoundedIcon className="footerIcon" />
              آدرس: تهران، بالاتر از چهار راه ولیعصر، خیابان بزرگمهر، بعد از
              تقاطع فلسطین ، پلاک 38
            </p>
            <p>
              <PhoneRoundedIcon className="footerIcon" />
              شماره تماس : ۰۲۱۶۳۴۸۶۰۰۰
            </p>
            <p>
              <FaxRoundedIcon className="footerIcon" />
              شماره فکس : ۰۲۱۶۴۴۸۶۰۰۰
            </p>
            <p>
              <EmailRoundedIcon className="footerIcon" />
              ایمیل: info@sjb.co.ir
            </p>
          </div>
          {/* <a
            target="_blank"
            href="https://www.google.com/maps/place/%D8%B4%D8%B1%DA%A9%D8%AA+%DA%A9%D8%A7%D8%B1%DA%AF%D8%B2%D8%A7%D8%B1%DB%8C+%D8%B5%D9%86%D8%AF%D9%88%D9%82+%D8%A8%D8%A7%D8%B2%D9%86%D8%B4%D8%B3%D8%AA%DA%AF%DB%8C+%DA%A9%D8%B4%D9%88%D8%B1+(%D8%B5%D8%A8%D8%A7+%D8%AC%D9%87%D8%A7%D8%AF)%E2%80%AD/@35.7038756,51.4015164,18z/data=!3m1!4b1!4m5!3m4!1s0x3f8e0142c7ed3b85:0x9873faef5750da59!8m2!3d35.7038734!4d51.4026107"
          > */}
          <div className="column map"> </div>
          <div>
            <a
              referrerPolicy="origin"
              target="_blank"
              href="https://trustseal.enamad.ir/?id=19257&amp;Code=BHPCp06fyJXpYFR9zahu"
              rel="noreferrer"
            >
              <img
                referrerPolicy="origin"
                src="https://Trustseal.eNamad.ir/logo.aspx?id=19257&amp;Code=BHPCp06fyJXpYFR9zahu"
                alt=""
                style={{ cursor: "pointer" }}
                id="BHPCp06fyJXpYFR9zahu"
                width="100px"
              />{" "}
            </a>
          </div>

          {/* <div className="column social">
            <h2>ما را در شبکه‌های اجتماعی دنبال کنید</h2>
            <div className="socialContainer">
              <a href="/" className="socialLink">
                <TwitterIcon className="footerIcon" />
              </a>
              <a href="/" className="socialLink">
                <InstagramIcon className="footerIcon" />
              </a>
              <a href="/" className="socialLink">
                <TelegramIcon className="footerIcon" />
              </a>
              <a href="/" className="socialLink">
                <LinkedInIcon className="footerIcon" />
              </a>
            </div>
          </div> */}
        </div>
      </div>
      <div className="copyright">
        {/* تمام حقوق برای کارگزاری صبا جهاد وهلدینگ الماس داده محفوظ می‌باشد. © */}
        <a href="radman.app" style={{ fontSize: 18 }}>
          طراحی و اجرا توسط رادمان ۱۳۹۰ - ۱۴۰۱
        </a>
      </div>
    </div>
  );
}
