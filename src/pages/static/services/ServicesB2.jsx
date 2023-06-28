import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import Typography from "@mui/material/Typography";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByID } from "../../../features/account/subMenuSlice";

const ServicesB2 = () => {
  const id = "f9c4ea5c-a170-4f3d-a8ef-d7ddb5cab0e3";
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

export default ServicesB2;

// import React from "react";
// import Divider from "../../../components/divider/Divider";

// const ServicesB2 = () => {
//   return (
//     <div className="page">
//       <div className="fullImage madarek"></div>
//       <h2 className="fullWidth">
//         مدارک مورد نیاز صدور کد مشتریان بازار فیزیکی
//       </h2>
//       <h2 className="small fullWidth">مشتریان حقیقی</h2>
//       <p>
//         افراد حقیقی که متقاضی دریافت کد بورس کالای جهاد هستند می‌توانند به راحتی
//         و از طریق سامانه Ebgo اقدام به ثبت‌نام و اخذ کد بورس کالا نمایند. لازم
//         به ذکر است پیش از ثبت‌نام، افراد می‌بایست در سامانه سجام ثبت‌نام و مراحل
//         احراز هویت خود را تکمیل کنند. مشتریان حقیقی با توجه به خرید مدنظر خود
//         جهت کسب راهنمایی بیشتر می‌توانند با کارشناسان مربوطه در کارگزاری بورس
//         بیمه جهاد تماس حاصل نمایند. شماره تماس 8948 داخلی (237-224)
//       </p>
//       <Divider centered />
//       <h2 className="small fullWidth">مشتریان حقوقی :</h2>
//       <p>
//         متقاضیان حقوقی با تکمیل فرم‌ها، تهیه و ارسال مدارک ذیل می‌توانند نسبت به
//         اخذ کد بورس کالا اقدام نمایند.
//         <ol>
//           <li>
//             معاملات، متشکل و سازمان یافته، قانونمند، قابل نظارت، شفاف، عادلانه،
//             رقابتی و کم‌هزینه است.
//           </li>
//           <li>در بورس کالا، امکان پوشش، توزیع و انتقال ریسک وجود دارد.</li>
//           <li>
//             در بورس کالا، کیفیت و کمیت کالا و مبلغ معامله و مدت معامله تضمین شده
//             است.
//           </li>
//           <li>
//             کشف قیمت در بورس کالا از طریق حراج حضوری و بصورت شفاف صورت گرفته و
//             با حذف رانت باعث فسادزدایی از بازار معاملات می‌گردد.
//           </li>
//           <li>
//             پذیرش کالا جهت فروش در بورس کالا منوط به داشتن استانداردهای اجباری
//             برای آن کالا می‌باشد و از این راه کیفیت کالا در بورس تضمین می گردد.
//           </li>
//           <li>در بورس کالا، مبداء کالا مشخص و تضمین شده است.</li>
//           <li>
//             در مقایسه با تشریفات مناقصات و مزایدات، سرعت انجام معاملات در بورس
//             کالا بسیار بالاتر بوده و جریان معاملات از امنیت کامل برخوردار است.
//           </li>
//           <li>
//             در صورت بروز اختلاف میان طرفین معامله، بورس کالا دارای مراجع اختصاصی
//             بررسی و رسیدگی به دعاوی بوده و سرعت رسیدگی به دعاوی مطرح شده در
//             مقایسه با دادگاه‌های عادی بالاتر است.
//           </li>
//           <li>
//             با استفاده از ابزارهای مالی مانند قراردادهای سلف و سلف استاندارد و
//             ساز‌وکار اوراق بهادار مبتنی بر کالا، امکان تامین مالی بنگاه‌ها از
//             این طریق وجود دارد.
//           </li>
//           <li>
//             بخشی از هزینه‌های مرتبط با فروش و بازاریابی با توجه به وجود بازار
//             مستقیم و بدون واسطه در بورس کالا حذف می‌گردد.
//           </li>
//           <li>
//             وجود شفافیت در معاملات بورس کالا و حذف هرگونه عاملی که در حوزه فروش،
//             منجر به ایجاد رانت خواهد شد.
//           </li>
//         </ol>
//       </p>
//       <div className="banksContainer">
//         <div className="bank tosee"></div>
//         <div className="bank parsian"></div>
//         <div className="bank shahr"></div>
//         <div className="bank melli"></div>
//         <div className="bank sepah"></div>
//         <div className="bank mellat"></div>
//         <div className="bank sanat"></div>
//         <div className="bank keshavarzi"></div>
//         <div className="bank saderat"></div>
//         <div className="bank gardeshgari"></div>
//         <div className="bank refah"></div>
//         <div className="bank pasargad"></div>
//         <div className="bank ayandeh"></div>
//       </div>
//       <Divider centered />
//       <h2 className="small fullWidth">مشتریان حقوقی خارجی:</h2>
//       <p>
//         <ol>
//           <li>اصل فرم درخواست کد حقوقی خارجی</li>
//           <li>
//             کپی برابر اصل شده مدارک شناسایی مدیر عامل و اعضای هیات مدیره (کارت
//             ملی، شناسنامه، گذرنامه معتبر)
//           </li>
//           <li>
//             مدارک ثبت شرکت در کشور مبدا به زبان فارسی یا انگلیسی ممهور به مهر
//             تائیدیه کنسولگری جهاد در آن کشور
//           </li>
//           <li>
//             مدارک مثبت مالی ( صورت مالی حسابرسی شده یا مدرک مشابه) به تشخیص بورس
//           </li>
//           <li>
//             * مدارک ثبت شرکت عبارتند از : گواهی تاسیس یا مدرک مشابه، اساسنامه یا
//             مدرک مشابه، مدارک مثبت مشخصات ، حدود اختیارات صاحبان امضای مجاز شخص
//             حقوقی، مدارک مربوط به مجوز فعالیت در کشور متبوع که به تائید کنسولگری
//             جهاد رسیده باشد.
//           </li>
//           <li>
//             *لطفاً در صورت بروز هرگونه مشکل یا ابهام در طول مراحل ثبت‌نام جهت
//             اخذ کد بورس کالا، با کارشناسان ما در واحد بورس کالای کارگزاری بورس
//             بیمه جهاد تماس حاصل فرمایید. شماره تماس ۶۴۴۸۶۰۰۰ - ۰۲۱
//           </li>
//         </ol>
//       </p>
//     </div>
//   );
// };

// export default ServicesB2;
