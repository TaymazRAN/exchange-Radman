import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const ServicesC4 = () => {
  const id = "fe95bf74-0918-4837-982c-e05cdbec768e";
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

export default ServicesC4;

// import React from "react";
// import Accordion from "@mui/material/Accordion";
// import Typography from "@mui/material/Typography";

// const ServicesC4 = () => {
//   return (
//     <div className="page">
//       <h2> اخذ کد بازار مشتقه </h2>
//       <div className="accordionContainer">
//         <Accordion className="customAccordion">
//           <Typography>
//             <div className="customAnswer">
//               <ul>
//                 <li className="textBody">
//                   مشتری حقیقی: افراد حقیقی که متقاضی سرمایه‌گذاری در بازار مشتقه
//                   می‌توانند به راحتی و از طریق سامانه Ebgo اقدام به ثبت‌نام و
//                   اخذ کد معاملات مشتقه نمایند. لازم به ذکر است پیش از ثبت‌نام،
//                   افراد می‌بایست در سامانه سجام ثبت‌نام و مراحل احراز هویت خود
//                   را تکمیل کنند. اصل فرم درخواست کد با تائیدیه بانک مربوطه و
//                   کارگزار کپی برابر اصل شده پشت و روی کارت ملی و تمام صفحات
//                   شناسنامه فرم معرفی اطلاعات حساب‌های بانکی مشتری اقرار نامه و
//                   بیانیه ریسک معاملات قراردادهای آتی مشتری حقوقی: اصل فرم
//                   درخواست کد با تائیدیه بانک مربوطه و کارگزار کپی برابر اصل شده
//                   پشت و روی کارت ملی و تمام صفحات شناسنامه مدیر عامل، تمام اعضای
//                   هیات مدیره و نماینده شرکت فرم مشخصات نماینده فرم معرفی اطلاعات
//                   حساب‌های بانکی مشتری اقرار نامه و بیانیه ریسک معاملات
//                   قراردادهای آتی آخرین تغییرات روزنامه رسمی شرکت که در آن سرمایه
//                   ثبتی شرکت درج شده باشد اساسنامه
//                 </li>
//               </ul>
//             </div>
//           </Typography>
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default ServicesC4;
