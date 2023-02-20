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
                    <div className="faqQuestion">سهم چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        سرمایه هر شرکت سهامی به قسمت‌های مساوی تقسیم می‌شود که
                        به هر یک از این قسمت‌ها، یک سهم می‌گویند. معمولا قیمت
                        اسمی سهام در ایران 100 تومان است. هر فرد وقتی اقدام به
                        خرید سهام می‌کند در واقع فعالیت خود در بازار سرمایه را
                        شروع کرده است. افراد پس از خرید سهام، مالک جزئی از
                        دارایی شرکت می‌شوند.
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
                    <div className="faqQuestion">سهام عادی چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        {" "}
                        سهام عادی، سهامی است که شرکت‌ها عرضه می‌کنند و سهامداران
                        به نسبت سهام خود، مالک شرکت می‌شوند. افراد سهام عادی را
                        هر زمان که بخواهند می‌توانند بفروشند اما اگر شرایط بازار
                        و کشور خوب باشد با قیمت بالاتر و اگر شرایط بازار خوب
                        نباشد با قیمت کمتر به فروش می‌رسد.
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
                    <div className="faqQuestion">سهام ممتاز چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        سهامی است که شرکت عرضه می‌کند و سود آن مثلا این طور گفته
                        می‌شود: 10 درصد از قیمت اسمی سهام. حال اگر قیمت اسمی
                        سهام 100 تومان باشد، 10درصد آن 10 تومان می‌شود. سود سهام
                        ممتاز نسبتا دائمی است و پرداخت سود آن نسبت به سهام عادی
                        اولویت دارد. برای رعایت حقوق سهامداران شرکت‌هایی که در
                        بورس پذیرفته می‌شوند دارای سهام عادی، مشابه و یکسان
                        هستند.
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
                    <div className="faqQuestion">سرمایه‌گذاری چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        منظور از سرمایه‌گذاری، صرف هزینه‌ای مشخص به همراه
                        پذیرفتن ریسک (احتمال خطر) مشخص یا نامشخص برای کسب سود در
                        آینده است. مهمترین هدف سرمایه‌گذاری، کاهش «هزینه‌های
                        فرصت» است به این معنا که ممکن است فرد پول مازاد راکدی
                        داشته باشد که بتواند آن را در محلی برای سرمایه‌گذاری و
                        کسب سود به کارگیرد اما به علت عدم آگاهی، فرصت کسب سود را
                        از دست بدهد.
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
                    <div className="faqQuestion">کارگزار کیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        شرکت‌هایی هستند که افراد برای خرید و فروش سهام باید به
                        آنها مراجعه کنند. کارگزاری‌ها واسطه بین سهامداران و
                        شرکت‌های حاضر در بورس هستند و به دو دسته دولتی و خصوصی
                        تقسیم می‌شوند.
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
                      شرکت‌های سهامی‌خاص و سهامی‌عام چیست؟
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        به شرکت‌هایی که سهام آنها در دست عموم مردم باشد (بیشتر
                        از 51 درصد) و کنترل آنها نیز در اختیار مردم باشد، سهامی
                        عام می‌گویند مانند شرکت‌های پذیرفته‌شده در بورس اوراق
                        بهادار. در نقطه مقابل،‌ چنانچه کنترل و مالکیت شرکت و
                        تصمیم‌گیری درباره آن در اختیار افراد خاص باشد، سهامی خاص
                        نامیده می‌شوند.
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
                    <div className="faqQuestion">کد بورسی چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        کد بورسی مانند شماره ملی منحصر به فرد است. شما با داشتن
                        کد بورسی می‌توانید از طریق یک یا چند کارگزاری به خرید و
                        فروش سهام،‌ عرضه اولیه، اوراق اسناد خزانه اسلامی یا
                        تسهیلات مسکن بپردازید. حتی اگر از چند کارگزاری خرید و
                        فروش آنلاین سهام انجام دهید، کد بورسی شما یکسان خواهد
                        بود. بعد از داشتن کد بورسی لازم است رمز خرید و فروش
                        آنلاین سهام دریافت و معاملات خود را آغاز کنید.
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
                    <div className="faqQuestion">عرضه اولیه چیست؟</div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        در عرضه اولیه، سهام یک شرکت برای بار اول در بورس توسط
                        عموم قابل خریداری خواهد بود.
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
                    <div className="faqQuestion">اعتبار چیست؟ </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="faqAnswer">
                        اعتبار پولی است که کارگزاری‌ها با درخواست مشتریان، بسته
                        به شرایط پرتفوی اشخاص، برای خرید و فروش در اختیار آنها
                        قرار می‌دهند.
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
