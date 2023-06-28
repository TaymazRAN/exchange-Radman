import Typography from "@mui/material/Typography";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchsubMenuByGroupType } from "../../../features/account/subMenuSlice";
import Loading from "../../../components/loading/Loading";

const ServicesSumSuppluymeny = () => {
  const groupName = "Tamin_Mali_Jamei";
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);

  useEffect(() => {
    dispatch(fetchsubMenuByGroupType(groupName));
    // window.location.reload();
  }, []);

  console.log("Pass Data", data);

  const renderTitle = (
    <>
      {data.length > 0 ? (
        data.map((item, index) => (
          <Accordion
            className="faqAccordion tabTypographyVertical"
            style={{ color: "#2e3192", fontSize: 25, margin: 25 }}
          >
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon
                  style={{ color: "#2e3192", fontSize: 25, margin: 5 }}
                />
              }
              aria-controls="panel1a-content"
              id={index}
            >
              <div className="faqQuestion "> {item.title} </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="faqAnswer textBody"> {item.body}</div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))
      ) : (
        <p>
          {" "}
          Title Loding ....... <Loading />{" "}
        </p>
      )}
    </>
  );

  return (
    <div className="page">
      <div className="accordionContainer">{renderTitle}</div>
    </div>
  );
};

export default ServicesSumSuppluymeny;

// import Typography from "@mui/material/Typography";
// import * as React from "react";
// import Accordion from "@mui/material/Accordion";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// const ServicesSumSuppluymeny = () => {

//   return (
//     <div className="page">
//       <div className="accordionContainer">
//         <Accordion className="customAccordion">
//           <div className="compartmentBox  ">
//             <h2> تامین مالی جمعی </h2>

//             <div className="compartment">
//               {/* <div className="image faq"></div> */}
//               <div className="data faq">
//                 <Accordion className="faqAccordion tabTypographyVertical">
//                   <AccordionSummary
//                     expandIcon={
//                       <ExpandMoreIcon
//                         style={{ color: "#2e3192", fontSize: 25 }}
//                       />
//                     }
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                   >
//                     <div className="faqQuestion ">تامین مالی جمعی</div>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography>
//                       <div className="faqAnswer textBody">
//                         تامین مالی جمعی (Crowdfunding) یکی از شیوه های نوین
//                         تامین مالی است که بسط و گسترش آن را می توان حاصل پیشرفت
//                         فناوری اطلاعات و ارتباطات در کنار اقبال و اعتماد عمومی
//                         دانست. در واقع نوعی جمع سپاری است که مشتریان نقش سرمایه
//                         گذاران را ایفا کرده و بصورت یک کانال تامین مالی مؤثر
//                         برای دریافت مقدار اندکی سرمایه از جمعیت جهت سرمایه گذاری
//                         های متوسط تعریف می شود. یک راه جدید تامین سرمایه برای
//                         پروژه های جدید و طرح های نوآورانه و کسب وکارهای کوچک است
//                         که اغلب برای شرکت های استارت آپ مورد استفاده قرار می
//                         گیرد و بعنوان یک "فراخوان عمومی" اساسا از طریق اینترنت
//                         برای تامین منابع مالی در قالب کمک های مالی یا در ازای
//                         برخی پاداش ها و یا به صورت سهام، به منظور حمایت از ایده
//                         ها و طرح ها برای مقاصد خاص تعریف می شود. مهمترین ویژگی
//                         این شیوه تأکید بر تمرکززدایی است و یک ساختار شبکه ای را
//                         در تامین مالی ایجاد می کند که در رقابت با الگوهای سنتی
//                         واسطه گری مالی به حذف واسطه مالی (بانک) درتامین مالی می
//                         انجامد.
//                         <br />
//                         تامین سرمایه از این روش برای شرکت‌های بزرگ به‌ خصوص
//                         شرکت‌هایی که در بورس و فرابورس پذیرش شده‌اند منع شده است
//                         تا رقابت صرفا برای تامین سرمایه شرکت‌های کوچک و دارای
//                         طرح و ایده‌‌ی نو صورت پذیرد
//                       </div>
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//                 <Accordion className="faqAccordion tabTypographyVertical">
//                   <AccordionSummary
//                     expandIcon={
//                       <ExpandMoreIcon
//                         style={{ color: "#2e3192", fontSize: 25 }}
//                       />
//                     }
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                   >
//                     <div className="faqQuestion">
//                       تامین مالی جمعی مدل های مختلفی اعم از :
//                     </div>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography>
//                       <div className="faqAnswer textBody">
//                         جمع‌سپاری اهدا که شامل جمع‌سپاری مبتنی بر بخشش و پاداش
//                         است از معمول ترین اشکال جمع‌سپاری و انتخابی مناسب برای
//                         سازمان‌های غیرانتفاعی، اهداف اجتماعی، پروژه های هنری، و
//                         توسعه کالاها به شمار می‌رود. مدل مبتنی بر اهدا معمولا
//                         برای پروژه‌های خیریه، اجتماعی، بشردوستانه و غیرانتفاعی
//                         کاربرد دارد. سرمایه گذاری جمعی مبتنی بر پاداش بزرگترین
//                         چارچوب تامین مالی به صورت آنلاین است و رشد سریع تری در
//                         میان انواع سرمایهگذاری مالی جمعی دارد. در این مدل،
//                         حامیان همانند مشتریان عمل می کنند، زیرا مدل اصلی کسب
//                         وکار در این سیستم عامل، بر اساس "پیش خرید" می باشد و
//                         زمانیکه سرمایه گذار بررسی می کند که آیا پروژه های پیش
//                         فروش را تامین مالی کند، رفتار آنلاین آنها همانند مشتریان
//                         برای خرید کالا می باشد.
//                         <br />
//                         جمع‌سپاری مبتنی بر سرمایه گذاری، با منفعت‌های مالی همراه
//                         است که جمع سپاری مبتنی بر بدهی و جمع سپاری مبتنی بر سهم
//                         از انواع آن است.
//                         <br />
//                         ساختار جمع‌سپاری مبتنی بر سهام شبیه به سرمایه گذاری سهام
//                         خصوصی است. این مدل زمانی مورد استفاده قرار می گیرد که
//                         کارآفرین گروهی از مردم را به جای فرشتگان کسب و کار یا
//                         دیگر سرمایه‌گذاران خصوصی جهت جذب سرمایه انتخاب می کند.
//                         این نوع جمع‌سپاری معمولا محدود به بازارهای سرمایه و
//                         ترتیبات بانکی می شوند و بنابراین میزان تامین مالی،
//                         جغرافیا و امکان بازاریابی در آن‌ها دارای اهمیت است. در
//                         این مدل، تامین کنندگان سرمایه می توانند از منافع مانند
//                         حق رای و تقسیم سود بهره مند شوند.
//                         <br />
//                         در تامین مالی جمعی سهام محور، فرشتگان کسب وکار و سرمایه
//                         گذاران در ازای بخشی از سهام شرکت اقدام به سرمایه گذاری
//                         می کنند. هر سرمایه گذار در نقش یک فرشته کسب وکار می
//                         باشد. فرشتگان کسب وکار (business angels) به افراد
//                         ثروتمند و کارآفرین اطلاق می شود که در ازای تامین مالی
//                         قسمتی از سهام شرکت را دریافت می کنند. آنها با توجه به
//                         ریسک بسیار بالایی که از تامین مالی متحمل می شوند، انتظار
//                         بازدهی زیادی از رشد سهام شرکت و موفقیت کسب وکار دارند.
//                         <br />
//                         در مدل مبتنی بر مشارکت که معمولاً بودجه موردنیاز توسعه
//                         یک کسب‌ وکار نوپا یا در حال‌ توسعه تامین می‌شود، تامین
//                         -کننده منابع، نقش مشارکت‌کننده پروژه را دارد و در سود و
//                         زیان پروژه شریک است که دستورالعمل تامین مالی جمعی که از
//                         سوی شورای عالی بورس و اوراق بهادار به‌طور رسمی ابلاغ‌
//                         شده نیز مبتنی بر مشارکت است
//                         <br />
//                       </div>
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//                 <Accordion className="faqAccordion tabTypographyVertical">
//                   <AccordionSummary
//                     expandIcon={
//                       <ExpandMoreIcon
//                         style={{ color: "#2e3192", fontSize: 25 }}
//                       />
//                     }
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                   >
//                     <div className="faqQuestion">
//                       ارکان تامین مالی در مدل سازمان بورس :
//                     </div>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography>
//                       <div className="faqAnswer textBody">
//                         با توجه به دستوالعمل تامین مالی جمعی کسب و کارهای نوپا و
//                         با توجه به فرایندهای اجرایی آن، ارکان این روش عبارتند
//                         از:
//                         <br />
//                         • سازمان بورس به عنوان بالاترین مرجع که وظیفه صدور مجوز
//                         را بر عهده دارد.
//                         <br />
//                         • عامل یا عامل تامین مالی جمعی: یکی از نهادهای مالی
//                         دارای مجوز از سازمان بورس و اوراق بهادار یا شخصی حقوقی
//                         است که پس از عقد قرارداد همکاری با نهادهای مالی دارای
//                         مجوز و اخذ مجوز فعالیت تامین مالی جمعی، با تأیید کارگروه
//                         ارزیابی فرابورس، طبق مقررات این دستورالعمل برای تامین
//                         منابع مورد نیاز پروژه‌های مختلف به‌صورت برخط اقدام
//                         می‌کند. <br />
//                         • متقاضی: منظور متقاضی تامین منابع مالی است که به عامل
//                         مراجعه می‌کند.
//                         <br />
//                         • تامین کننده: منظور شخص حقیقی و حقوقی تامین‌کننده
//                         منابع‌ موردنیاز متقاضی است. <br />
//                         • ناظر فنی/مالی: شخص حقیقی یا حقوقی مورد تایید فرابورس
//                         ایران است که حسب درخواست عامل یا کارگروه ارزیابی نسبت به
//                         ارزیابی اولیه یا نظارت بر حسن اجرای پروژه تعریف ‌شده
//                         توسط متقاضی تامین مالی جمعی اقدام می‌کند. <br />
//                         • کارگروه ارزیابی: به‌منظور بررسی شرایط اعطای مجوز
//                         فعالیت به متقاضیان عاملیت تامین مالی جمعی، مطابق این
//                         دستورالعمل، تشکیل می شود. <br />
//                       </div>
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//                 <Accordion className="faqAccordion tabTypographyVertical">
//                   <AccordionSummary
//                     expandIcon={
//                       <ExpandMoreIcon
//                         style={{ color: "#2e3192", fontSize: 25 }}
//                       />
//                     }
//                     aria-controls="panel1a-content"
//                     id="panel1a-header"
//                   >
//                     <div className="faqQuestion fa-bold">
//                       فرایند تامین مالی جمعی :
//                     </div>
//                   </AccordionSummary>
//                   <AccordionDetails>
//                     <Typography>
//                       <div className="faqAnswer textBody">
//                         پس از ارائه طرح از طرف متقاضی(که باید یک شخص حقوقی
//                         باشد)، ابتدا قرارداد رسمی تامین مالی جمعی میان متقاضی و
//                         عامل منعقد می گردد. عامل طی یک فراخوان از طریق سکو با
//                         اعلان درخواست، متقاضی را به تامینکنندگان معرفی کرده و
//                         اقدام به تامین مالی می کند. سپس کارگروه ارزیابی که متشکل
//                         از پنج نفر است (1نفر به نمایندگی از رئیس سازمان، 2 نفر
//                         به نمایندگی از فرابورس و 2 کارشناس تامین مالی با پیشنهاد
//                         فرابورس و تایید رئیس سازمان) تشکیل می شود. حسب درخواست
//                         عامل یا کارگروه ارزیابی، شخص حقیقی یا حقوقی مورد تایید
//                         فرابورس به عنوان ناظر فنی/مالی انتخاب می شود که نسبت به
//                         ارزیابی اولیه یا نظارت بر حسن اجرای طرح اقدام میکند. در
//                         تامین مالی جمعی، تامین کننده منابع (که باید تحت نظارت
//                         سازمان بوده و دارای کد بورسی باشد)، نقش مشارکت کننده در
//                         طرح را داشته و در سود و زیان طرح شریک می باشد حوزه
//                         جغرافیایی اجرای طرح در داخل کشور بوده، اما جمع آوری
//                         منابع مالی مورد نیاز طرح ها از تامین کنندگان خارج از
//                         کشور نیز بلامانع می باشد.
//                         <br />
//                         موفقيت يا شکست تامين مالي جمعي ارتباط تنگاتنگي با
//                         رفتارهاي اجتماعي دارد، بنابراین بررسي رفتار مردم و
//                         مشاهده چالش‌هاي احتمالي در اين حوزه ضروري است.
//                         <br />
//                       </div>
//                     </Typography>
//                   </AccordionDetails>
//                 </Accordion>
//               </div>
//             </div>
//           </div>
//         </Accordion>
//       </div>
//     </div>
//   );
// };

// export default ServicesSumSuppluymeny;
