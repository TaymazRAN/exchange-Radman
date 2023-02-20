import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import IconButton from "@mui/material/IconButton";
import FilledInput from "@mui/material/FilledInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const Support = () => {
  return (
    <>
      <div className="page row">
        <div className="split small centered">
          <h2>چطور میتوانیم به شما کمک کنیم؟</h2>
          <div className="inputBox">
            <FormControl className="input" variant="filled">
              <InputLabel htmlFor="search">جستجو کنید...</InputLabel>
              <FilledInput
                id="search"
                type="text"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton edge="end" color="warning" size="small">
                      <SearchRoundedIcon />
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </div>
        </div>
      </div>
      <div className="page">
        <h2>سوالات متداول</h2>
        <div className="row">
          <div className="split">
            <div className="accordionContainer">
              <Accordion className="customAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#D0CD38", fontSize: 25 }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="customQuestion">
                    سهم چیست؟
                    <div className="customBorder"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="customAnswer">
                      <ul>
                        <li>
                          سرمایه هر شرکت سهامی به قسمت‌های مساوی تقسیم می‌شود که
                          به هر یک از این قسمت‌ها، یک سهم می‌گویند. معمولا قیمت
                          اسمی سهام در ایران 100 تومان است. هر فرد وقتی اقدام به
                          خرید سهام می‌کند در واقع فعالیت خود در بازار سرمایه را
                          شروع کرده است. افراد پس از خرید سهام، مالک جزئی از
                          دارایی شرکت می‌شوند.
                        </li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="customAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#D0CD38", fontSize: 25 }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="customQuestion">
                    سهام عادی چیست؟
                    <div className="customBorder"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="customAnswer">
                      <ul>
                        <li>
                          سهام عادی، سهامی است که شرکت‌ها عرضه می‌کنند و
                          سهامداران به نسبت سهام خود، مالک شرکت می‌شوند. افراد
                          سهام عادی را هر زمان که بخواهند می‌توانند بفروشند اما
                          اگر شرایط بازار و کشور خوب باشد با قیمت بالاتر و اگر
                          شرایط بازار خوب نباشد با قیمت کمتر به فروش می‌رسد.
                        </li>
                      </ul>
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="customAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#D0CD38", fontSize: 25 }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="customQuestion">
                    سهام ممتاز چیست؟
                    <div className="customBorder"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="customAnswer">
                      سهامی است که شرکت عرضه می‌کند و سود آن مثلا این طور گفته
                      می‌شود: 10 درصد از قیمت اسمی سهام. حال اگر قیمت اسمی سهام
                      100 تومان باشد، 10درصد آن 10 تومان می‌شود. سود سهام ممتاز
                      نسبتا دائمی است و پرداخت سود آن نسبت به سهام عادی اولویت
                      دارد. برای رعایت حقوق سهامداران شرکت‌هایی که در بورس
                      پذیرفته می‌شوند دارای سهام عادی، مشابه و یکسان هستند.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
          <div className="split">
            <div className="accordionContainer">
              <Accordion className="customAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#D0CD38", fontSize: 25 }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="customQuestion">
                    سرمایه‌گذاری چیست؟
                    <div className="customBorder"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="customAnswer">
                      منظور از سرمایه‌گذاری، صرف هزینه‌ای مشخص به همراه پذیرفتن
                      ریسک (احتمال خطر) مشخص یا نامشخص برای کسب سود در آینده
                      است. مهمترین هدف سرمایه‌گذاری، کاهش «هزینه‌های فرصت» است
                      به این معنا که ممکن است فرد پول مازاد راکدی داشته باشد که
                      بتواند آن را در محلی برای سرمایه‌گذاری و کسب سود به
                      کارگیرد اما به علت عدم آگاهی، فرصت کسب سود را از دست بدهد.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="customAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#D0CD38", fontSize: 25 }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="customQuestion">
                    کارگزار کیست؟
                    <div className="customBorder"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="customAnswer">
                      منظور از سرمایه‌گذاری، صرف هزینه‌ای مشخص به همراه پذیرفتن
                      ریسک (احتمال خطر) مشخص یا نامشخص برای کسب سود در آینده
                      است. مهمترین هدف سرمایه‌گذاری، کاهش «هزینه‌های فرصت» است
                      به این معنا که ممکن است فرد پول مازاد راکدی داشته باشد که
                      بتواند آن را در محلی برای سرمایه‌گذاری و کسب سود به
                      کارگیرد اما به علت عدم آگاهی، فرصت کسب سود را از دست بدهد.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion className="customAccordion">
                <AccordionSummary
                  expandIcon={
                    <ExpandMoreIcon
                      style={{ color: "#D0CD38", fontSize: 25 }}
                    />
                  }
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <div className="customQuestion">
                    کارگزار کیست؟
                    <div className="customBorder"></div>
                  </div>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    <div className="customAnswer">
                      شرکت‌هایی هستند که افراد برای خرید و فروش سهام باید به
                      آنها مراجعه کنند. کارگزاری‌ها واسطه بین سهامداران و
                      شرکت‌های حاضر در بورس هستند و به دو دسته دولتی و خصوصی
                      تقسیم می‌شوند.
                    </div>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </div>
      <div className="page row">
        <div className="split big centered">
          <h2>راه‌های ارتباطی با کارگزاری صبا جهاد</h2>
          <div className="row">
            <div className="dataBox">
              <div className="image contact1"></div>
              <div className="text"> ۶۳۴۸۶۰۰۰ - ۰۲۱</div>
            </div>
            <div className="dataBox">
              <div className="image contact3"></div>
              <div className="text">info@sjb.co.ir</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
