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
            <a href="/">آتی کالا</a>
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
              شماره تماس: ۰۲۱-۶۳۴۸۶۰۰۰
            </p>
            <p>
              <FaxRoundedIcon className="footerIcon" />
              شماره فکس: ۰۲۱-۶۴۴۸۶۰۰۰
            </p>
            <p>
              <EmailRoundedIcon className="footerIcon" />
              ایمیل: info@sjb.co.ir
            </p>
          </div>
          <div className="column map"></div>
          <div className="column social">
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
          </div>
        </div>
      </div>
      <div className="copyright">
        {/* تمام حقوق برای کارگزاری صبا جهاد وهلدینگ الماس داده محفوظ می‌باشد. © */}
        <a href="radman.app" style={{ fontSize: 25 }}>
          طراحی و اجرا توسط رادمان ۱۳۹۰ - ۱۴۰۱
        </a>
      </div>
    </div>
  );
}
