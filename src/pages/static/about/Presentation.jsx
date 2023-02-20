import React from "react";

const Presentation = () => {
  return (
    <div className="page" style={{ textAlign: "center" }}>
      <div className="accordionContainer">
        <div className="fullImage about"></div>
      </div>

      <div>
        <div className="split big centered">
          <h2>معرفی کارگزاری صبا جهاد</h2>
          <p className="textBody">
            شرکت کارگزاری صباجهاد در تاریخ 1383/06/08 و با شماره 229185 در اداره
            ثبت شرکت‌ها و مؤسسات غیرتجاری تهران به ثبت رسید و از اول مهرماه همان
            سال با افتتاح تالار بورس کالای کشاورزی، فعالیت خود را آغاز نمود.
          </p>
        </div>
      </div>

      <div className="split big centered">
        <h2> پیام مدیر عامل :</h2>
        <p className="textBody">
          توسعه اقتصادی کشور و تامین مالی واحدهای تولیدی در گرو رونق بازار
          سرمایه است. در این راستا در کارگزاری صباجهاد برآن شدیم که با اعتلای
          تخصص، توسعه فناوری و همت روزافزون پرسنل توانمند کارگزاری با بهره گیری
          از سال ها تجربه ارزشمند، خدمات خود را بهبود بخشیده تا نقشی در رونق
          بازار سرمایه و تعالی اقتصادی ایران عزیمان داشته باشیم و بتوانیم به
          عنوان یکی از زیر مجموعه های صندوق بازنشستگی کشوری به افزایش سرمایه
          بازنشستگان و شاغلین کشور کمک کنیم.
          <br />
          <p style={{ alignItems: "flex-start" }}>
            {" "}
            علیرضا مرادی <br /> مدیرعامل و نائب رئیس هیات مدیره{" "}
          </p>
        </p>
      </div>

      <div className="split big centered">
        <h2 className="small"> مشخصات ثبتی </h2>
        <p className="textBody">
          شرکتی است دانشی و روزآمد که با رویکرد تبلور دانش مالی در ارزش‌آفرینی،
          با تکیه بر سرمایه انسانی متخصص و با هدف ارائه راهکارهای تخصصی مالی در
          صنعت واسطه گری مالی و بنگاه داری (بازار سرمایه، بازار پول و هلدینگ ها)
          فعالیت می کند.
        </p>
      </div>
      <div className="fullImage sabt"></div>

      <div className="split big centered">
        <h2 className="small"> ترکیب سهامداران </h2>
        <p className="textBody">
          سهامدار اصلی مجموعه، شرکت گروه مدیریت ارزش سرمایه از شرکت های تابعه
          صندوق بازنشستگی کشوری است و ترکیب سهامداران شرکت به شرح زیر است.
        </p>
      </div>
      <div className="fullImage saham"></div>
    </div>
  );
};

export default Presentation;
