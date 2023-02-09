import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Faq = () => {
  return (
    <div className="compartmentBox">
      <h2> سوالات متداول </h2>

      <div className="compartment">
        <div className="image faq"></div>
        <div className="data faq">
          <Accordion className="faqAccordion">
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="faqQuestion">موعد تحویل خودرو چه زمانی است؟</div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="faqAnswer">
                  موعد تحویل برای خودروهای مختلف توسط کارخانه سازنده آن تعیین
                  شده و در اطلاعیه عرضه خودرو در بورس کالا مشخص می شود
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faqAccordion">
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
                  باتوجه به تلاش وزارت صمت و بورس کالا قرار است تمام محصولات
                  تولیدی کارخانه های مهم سازنده خودرو در بورس کالا عرضه شود.
                  درحال حاضر محصولات مختلفی از سواری و وانت تا کشنده و از چندین
                  کارخانه در بورس کالا قابل خرید است.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faqAccordion">
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <div className="faqQuestion">
                اگر خرید انجام نشود، مبلغ بلوکه شده در حساب عملیاتی چگونه آزاد
                خواهد شد؟
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                <div className="faqAnswer">
                  باتوجه به شرایط بورس کالا مبلغ پایه که برای خرید خودرو واریز
                  شده درصورت لغو یا ناموفق بودن در انجام معامله در طی چند ساعت
                  تا 1 روز به حساب بازخواهد گشت.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faqAccordion">
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
                  باتوجه به شرایط عرضه محصولات مختلف ممکن است محدودیت های مختلفی
                  برای خریداران خودرو از بورس کالا وضع شود.محدودیت هایی که تا به
                  امروز برای برخی خودروها اعمال شدند عبارتند از:شرط سن بالای 18
                  سال یا نخریدن خودرو از بورس کالا در طی سال جاری هم چنین در
                  برخی از خودروهای عرضه شده در بورس کالا شرط نخریدن خودرو از
                  شرکت های خودروسازی از ابتدای سال 98 نیز وجود دارد.برای مطالعه
                  شرایط و محدودیت های هر خودرو به مشخصات عرضه آن خودرو مراجعه
                  کنید.
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="faqAccordion">
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
                  با مراجعه به سایت بورس کالا و قسمت اطلاعیه عرضه خودروهای مختلف
                  می توان از شرایط و زمان عرضه خودروها مطلع شد
                </div>
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default Faq;
