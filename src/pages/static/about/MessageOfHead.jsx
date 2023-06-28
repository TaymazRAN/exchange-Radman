import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";
import { Accordion, Typography } from "@mui/material";

const MessageOfHead = () => {
  const id = "a139215b-01d1-4698-a3cd-77d81ba97e47";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);
  useEffect(() => {
    dispatch(fetchsubMenuByID(id));
    // window.location.reload();
  }, []);

  console.log("Pass Data", data);
  return (
    <div className="split big centered">
      <h2> پیام مدیر عامل :</h2>

      <Accordion className="customAccordion">
        <Typography>
          <div
            className="textBody"
            dangerouslySetInnerHTML={{
              __html: data.body,
            }}
          ></div>
        </Typography>
      </Accordion>
      <p className="textBody">
        {/* توسعه اقتصادی کشور و تامین مالی واحدهای تولیدی در گرو رونق بازار سرمایه
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
         */}
      </p>
    </div>
  );
};

export default MessageOfHead;
