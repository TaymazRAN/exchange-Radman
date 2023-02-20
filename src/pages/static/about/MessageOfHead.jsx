import React from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";

const MessageOfHead = () => {
  return (
    <div className="split big centered">
      <h2> پیام مدیر عامل :</h2>
      <p className="textBody">
        توسعه اقتصادی کشور و تامین مالی واحدهای تولیدی در گرو رونق بازار سرمایه
        است. در این راستا در کارگزاری صباجهاد برآن شدیم که با اعتلای تخصص، توسعه
        فناوری و همت روزافزون پرسنل توانمند کارگزاری با بهره گیری از سال ها
        تجربه ارزشمند، خدمات خود را بهبود بخشیده تا نقشی در رونق بازار سرمایه و
        تعالی اقتصادی ایران عزیمان داشته باشیم و بتوانیم به عنوان یکی از زیر
        مجموعه های صندوق بازنشستگی کشوری به افزایش سرمایه بازنشستگان و شاغلین
        کشور کمک کنیم.
        <br />
        <p style={{ alignItems: "flex-start", textAlign: "center" }}>
          {" "}
          علیرضا مرادی <br /> مدیرعامل و نائب رئیس هیات مدیره{" "}
        </p>
      </p>
    </div>
  );
};

export default MessageOfHead;
