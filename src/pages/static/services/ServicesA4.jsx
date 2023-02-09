import Typography from "@mui/material/Typography";
import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ServicesA4 = () => {
  return (
    <div className="page">
      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <div className="compartmentBox">
            <h2> سوالات متداول </h2>

            <div className="compartment">
              {/* <div className="image faq"></div> */}
              <div className="data faq">
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      موعد تحویل خودرو چه زمانی است؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        موعد تحویل برای خودروهای مختلف توسط کارخانه سازنده آن
                        تعیین شده و در اطلاعیه عرضه خودرو در بورس کالا مشخص می
                        شود
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      چه نوع خودرو هایی در بورس کالا قابل معامله است؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        باتوجه به تلاش وزارت صمت و بورس کالا قرار است تمام
                        محصولات تولیدی کارخانه های مهم سازنده خودرو در بورس کالا
                        عرضه شود. درحال حاضر محصولات مختلفی از سواری و وانت تا
                        کشنده و از چندین کارخانه در بورس کالا قابل خرید است.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      اگر خرید انجام نشود، مبلغ بلوکه شده در حساب عملیاتی چگونه
                      آزاد خواهد شد؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        باتوجه به شرایط بورس کالا مبلغ پایه که برای خرید خودرو
                        واریز شده درصورت لغو یا ناموفق بودن در انجام معامله در
                        طی چند ساعت تا 1 روز به حساب بازخواهد گشت.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      -آیا برای خرید خودرو محدودیتی در بورس کالا وجود دارد؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        باتوجه به شرایط عرضه محصولات مختلف ممکن است محدودیت های
                        مختلفی برای خریداران خودرو از بورس کالا وضع شود.محدودیت
                        هایی که تا به امروز برای برخی خودروها اعمال شدند عبارتند
                        از:شرط سن بالای 18 سال یا نخریدن خودرو از بورس کالا در
                        طی سال جاری هم چنین در برخی از خودروهای عرضه شده در بورس
                        کالا شرط نخریدن خودرو از شرکت های خودروسازی از ابتدای
                        سال 98 نیز وجود دارد.برای مطالعه شرایط و محدودیت های هر
                        خودرو به مشخصات عرضه آن خودرو مراجعه کنید.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      چگونه از زمان عرضه خودرو در بورس کالا مطلع شویم ؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        با مراجعه به سایت بورس کالا و قسمت اطلاعیه عرضه خودروهای
                        مختلف می توان از شرایط و زمان عرضه خودروها مطلع شد
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      نحوه ثبت سفارش خرید خودرو چگونه است؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        درمرحله اول باید در سامانه ebgo ثبت نام کرده و در این
                        سامانه ثبت سفارش کنید.پس از آن باید با کارگزاری خود در
                        تماس بوده تا بتوانید هماهنگی های لازم برای معامله را
                        انجام دهید.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      مبلغ پیش پرداخت جهت خرید خودرو را باید به چه حسابی واریز
                      کنیم؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        مبلغ پیش پرداخت جهت خرید خودرو به حساب وکالتی که فرد
                        متقاضی در بانک ها باز کرده است باید واریز شود.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      امکان خرید خودرو با کد آتی وجود دارد؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        برای خرید خودرو از بورس کالا باید کد بورس کالا از سایت
                        EBGO را دریافت کرد و این کد با کد آتی فرق میکند. در
                        نتیجه نمیتوان با کد آتی از بورس کالا خودرو خریداری کرد.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      نام کاربری و رمز عبور سامانه EBGO را از کجا دریافت کنیم؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        برای دریافت نام کاربری و رمز عبور سامانه EBGO باید اول
                        در این سامانه ثبت نام کرد و سپس نام کابربری و رمز عبور
                        برای فرد متقاضی ارسال میشود.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      در صورتی که خرید خودرو انجام نشود، مبلغ پیش‌پرداخت چگونه
                      عودت داده خواهد شد؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        در صورتی که خودرو خریداری نشود، مبلغ پیش پرداخت در همان
                        حساب وکالتی باقی میماند و فرد میتواند پول خود را برداشت
                        کند.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      -چگونه از بورس خودرو بخریم؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        برای خرید خودرو از بورس کالا ابتدا لازم است که در سامانه
                        سجام ثبت نام کنید و سپس کد بورسی خود را از کارگزاری
                        دریافت نمایید. سپس با واریز وجه نقد در حساب وکالتی و ثبت
                        سفارس در روز عرضه تا روز معامله می‌توانید خورو مورد نظر
                        را خریداری کنید.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      برای خرید خودرو از بورس کالا چه نوع کد بورسی لازم است؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        جهت خرید ماشین از بورس کالا تنها کد بورسی بازار فیزیکی
                        بورس کالا مورد نیاز است و کد بورس خرید سهام و آتی
                        کاربردی ندارد.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">حساب وکالتی چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        حساب وکالتی یک نوع حساب بانکی است که برای واریز وجوه
                        پیش‌پرداخت مشتری نزد یکی از بانک‌های منتخب افتتاح
                        می‌شود.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      چه زمانی باید ثبت سفارش کنیم؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        از تاریخ انتشار اطلاعیه عرضه تا ساعت ۸:۳۰ صبح روز عرضه
                        امکان ثبت سفارش وجود دارد.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>

                <Accordion className="faqAccordion">
                  <AccordionSummary
                    expandIcon={
                      <ExpandMoreIcon
                        style={{ color: "#D0CD38", fontSize: 25 }}
                      />
                    }
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <div className="faqQuestion">
                      مبلغ پیش پرداخت خرید خودرو را چطور باید واریز کرد؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        پیش پرداخت خرید خودرو می‌بایست به حساب وکالتی اخذ شده
                        واریز شود.
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </div>
        </Accordion>
      </div>
    </div>
  );
};

export default ServicesA4;
