import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const ServicesD3 = () => {
  const id = "26ce6855-cbfb-40a4-becf-1daeaf14236b";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);
  useEffect(() => {
    dispatch(fetchsubMenuByID(id));
    // window.location.reload();
  }, []);

  console.log("Pass Data", data);
  return (
    <div className="page">
      <div className="accordionContainer">
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
      </div>
    </div>
  );
};

export default ServicesD3;

// import React from "react";
// import Accordion from "@mui/material/Accordion";
// import Typography from "@mui/material/Typography";

// const ServicesD3 = () => {
//   return (
//     <div className="page">
//       <h2> مزایای پذیرش و معامله در بورس انرژی ایران</h2>
//       <div className="accordionContainer">
//         <Accordion className="customAccordion">
//           <Typography>
//             <div className="customAnswer">
//               <ul>
//                 <li>
//                   مزایای پذیرش و معامله در بورس انرژی ایران
//                   <br />
//                   معافیت مالیاتی:
//                   <br />
//                   بر اساس ماده 6 قانون توسعه ابزارهای نوین مالی، 10 درصد از
//                   مالیات بر در‎آمد حاصل از فروش کالاهایی که در بورس‌های کالایی
//                   پذیرفته شده و به فروش می‌‎رسد از بخشودگی مالیاتی برخوردارند.
//                   معافیت از تشریفات مزایده و مناقصه: <br />
//                   بر اساس ماده 17 قانون توسعه ابزار‎های مالیاتی جدید و بندهای
//                   قوانین بودجه سنواتی خرید و فروش کالاهای پذیرفته شده در
//                   بورس‌های کالایی که با رعایت مقررات حاکم بر این بورس‌ها مورد
//                   دادوستد قرار می‌‎گیرند توسط وزارتخانه‌ها و دستگاه‌های دولتی و
//                   عمومی و اجرایی نیاز به برگزاری مناقصه یا مزایده و تشریفات
//                   مربوط به آنها ندارد.
//                   <br />
//                   امکان بازاریابی و عرضه محصولات در رینگ داخلی و بین‎‌الملل از
//                   طریق شبکه کارگزاران عضو و سامانه‌های معاملاتی بورس انرژی امکان
//                   تأمین کالاهای مورد نیاز از طریق سازوکار شفاف و منصفانه بورس
//                   انرژی <br />
//                   امکان تأمین مالی و پوشش ریسک عرضه‎‌کنندگان از طریق ابزارهای
//                   مالی موجود در بورس انرژی امکان پوشش ریسک و تأمین کالاهای مورد
//                   نیاز مصرف‎‌کنندگان برای دوره‌های زمانی مختلف کاهش هزینه‎‌های
//                   معاملاتی برای مشتریان در مقایسه با معامله در خارج از بورس
//                   (شامل هزینه‌های عقد قرارداد، بازاریابی و ...) کاهش ریسک‎‌های
//                   معاملاتی از جمله ریسک عدم ایفای تعهدات طرفین و ... <br /> و
//                   مشخص همچنین تضمین استاندارد بودن و کیفیت کالاهای مورد معامله
//                   در بورس برخورداری از چارچوب مقرراتی جامع در حوزه پذیرش،
//                   معاملات، ثبت و سپرده‎‌گذاری و تسویه پایاپای کالاها و اوراق
//                   بهادار مبتنی بر کالا
//                 </li>
//               </ul>
//             </div>
//           </Typography>
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default ServicesD3;
