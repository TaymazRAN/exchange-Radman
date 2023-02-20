import { Button } from "@mui/material";
import React from "react";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const ServicesA1 = () => {
  return (
    <div className="page">
      <div className="compartmentContainer">
        <div className="compartment right">
          <div className="data">
            <h2>معرفی بورس اوراق بهادار</h2>
            <p>
              بورس اوراق بهادار یک بازار متشکل و رسمی سرمایه است که در آن سهم
              شرکت‌ها و اوراق مشارکت بر اساس مقرارت مورد معامله قرار می‌گیرد.
              این بازار در قالب شرکت‌های سهامی با مسئولیت محدود یا شرکت سهامی‌
              عام تاسیس و اداره می‌شود که در آن سهام شرکت‌ها و اوراق مشارکت مورد
              معامله قرار می‌گیرد. مشخصه مهم این بازار، حمایت قانونی از صاحبان
              پس‌اندازها یا سرمایه‌های راکد است. سرمایه‌گذاری در بازار سرمایه
              می‌تواند منجر به تامین نقدینگی مورد نیاز صنایع مختلف شود و در
              نهایت به رونق تولید ملی و بهبود درآمد شهروندان کمک کند.{" "}
            </p>
          </div>
          <div className="image bours1 radius"></div>
        </div>
      </div>
      <div className="split big centered">
        <h2>سامانه معاملات بورس اوراق بهادار</h2>
        <div className="cardContainer">
          <div className="hollowCard">
            <h3>سامانه آفلاین</h3>
            <Button className="button yellow" variant="text" color="error">
              ورود
            </Button>
            <Button className="button blue" variant="text" color="error">
              راهنمایی
            </Button>
          </div>
          <div className="hollowCard">
            <h3>سامانه معاملات برخط(آنلاین)</h3>
            <Button className="button yellow" variant="text" color="error">
              ورود
            </Button>
            <Button className="button blue" variant="text" color="error">
              راهنمایی
            </Button>
          </div>
          {/* <div className="hollowCard">
            <h3>سامانه قدیم (آنلاین-سامانه قدیم1)</h3>
            <Button className="button yellow" variant="text" color="error">
              ورود
            </Button>
            <Button className="button blue" variant="text" color="error">
              راهنمایی
            </Button>
          </div> */}
          {/* <div className="hollowCard">
            <h3>سامانه قدیم (آنلاین-سامانه قدیم2)</h3>
            <Button className="button yellow" variant="text" color="error">
              ورود
            </Button>
            <Button className="button blue" variant="text" color="error">
              راهنمایی
            </Button>
          </div> */}
        </div>
      </div>
      <div className="fullImage bours2"></div>
      <div className="split big centered">
        <h2>فرم‌های موردنیاز بورس اوراق بهادار</h2>
        <div className="cardContainer">
          <Button className="button" variant="text" color="primary">
            دانلود فرم مشخصات اشخاص حقیقی
            <KeyboardArrowDownRoundedIcon className="icon" />
          </Button>
          <Button className="button" variant="text" color="primary">
            دانلود قرارداد اختیار معامله سهام
            <KeyboardArrowDownRoundedIcon className="icon" />
          </Button>
          <Button className="button" variant="text" color="primary">
            دانلود فرم اختیار سهام معامله
            <KeyboardArrowDownRoundedIcon className="icon" />
          </Button>
          <Button className="button" variant="text" color="primary">
            دانلود فرم قرارداد آتی
            <KeyboardArrowDownRoundedIcon className="icon" />
          </Button>
        </div>
      </div>

      <div className="accordionContainer">
        <Accordion className="customAccordion">
          <div className="compartmentBox">
            <h2> شرایط احراز سرمایه گذار حرفه ای </h2>
            <p className="textBody">
              <h4>
                شرایط احراز عنوان سرمایه گذار حرفه ای بورس برای اشخاص حقیقی{" "}
              </h4>
              <br />
              دستورالعمل شرایط احراز عنوان سرمایه گذار حرفه ای برای اشخاص حقیقی
              و مشارکت در عرضه اولیه سهام به شرح ذیل توسط فرابورس اعلام شد. در
              این راستا خواهشمند است در صورت داشتن حداقل یکی از شرایط ذکر شده
              مستندات خود را به شماره واتس آپ 09052544849 ارسال نمایید تا
              اقدامات و هماهنگی های لازم برای احراز شرایط سرمایه گذار حرفه ای از
              سوی کارگزاری صباجهاد صورت پذیرد. <br />
              • 1. شخصی که مانده حساب یا ارزش ریالی پرتفوی وی طی 6 ماه اخیر در
              انتهای هر ماه مساوی یا بیشتر از 50 میلیارد ریال باشد و یا در 6 ماه
              اخیر ، ماهانه به میزان حداقل 20 میلیارد ریال مجموع ارزش معاملات
              انجام شده در سمت خرید و فروش وی در بورس اوراق بهادار تهران و
              فرابورس ایران باشد.
              <br />
              • 2. دارای یکی از مدارک علمی شامل تحلیلگر مالی خبره (CFA) ،
              حسابرسان داخلی (CIA) ، حسابداری رسمی مدیریت (CMA) ، مدیریت ریسک
              مالی (FRM) ، اصول بازار سرمایه ، تحلیل گری ، مدیریت سبد اوراق
              بهادار و ارزشیابی اوراق بهادار باشد.
              <br />
              • 3. سابقه عضویت در هیات مدیره نهاد های مالی داشته باشد.
              <br />
              • 4. در یک سال گذشته جمع ارزش اعمال قراردادهای معامله شده (غیر از
              اوراق اختیار فروش تبعی) وی در بازار مشتقه بورس اوراق بهادار تهران
              و فرابورس ایران حداقل معادل 10 میلیارد ریال باشد. • 5. سبد ها با
              دارایی تحت مدیریت (AUM) بیش از 10 میلیارد ریال.
              <br />
              • 6. کارکنان ارکان بازار سرمایه با حداقل یک سال سابقه بیمه (سازمان
              بورس و اوراق بهادار ، بورس ها و بازار های خارج از بورس ، شرکت
              مدیریت فناوری بورس تهران و شرکت سپرده گذاری مرکزی اوراق بهادار و
              تسویه وجوه).
              <br />
            </p>
            <br />
            <br />
            <br />
            <h4>شرایط احراز عنوان سرمایه گذار حرفه ای بورس برای اشخاص حقوقی</h4>
            <p className="textBody">
              دستورالعمل شرایط احراز عنوان سرمایه گذار حرفه ای برای اشخاص حقوقی
              جهت مشارکت در عرضه اولیه سهام به شرح ذیل توسط فرابورس اعلام شد. در
              این راستا خواهشمند است در صورت داشتن حداقل یکی از شرایط ذکر شده
              مستندات خود را به شماره واتس آپ 09052544849 ارسال نمایید تا
              اقدامات و هماهنگی های لازم برای احراز شرایط سرمایه گذار حرفه ای از
              سوی کارگزاری صباجهاد صورت پذیرد.
              <br />
              در خصوص اشخاص حقوقی، احراز حداقل یکی از شرایط ذیل ضروری می باشد:
              <br />
              • 1. بانک، بیمه و تمامی نهادهای مالی تحت نظارت سازمان شامل شرکت
              های سبدگردانی، کارگزاری، تامین سرمایه ، پردازش اطلاعات مالی،
              مشاوره سرمایه گذاری ، صندوق های سرمایه گذاری مشترک یا قابل معامله،
              صندوق های بازنشستگی، صندوق های جسورانه(VC)، صندوق های خصوصی(PE)،
              شرکتهای سرمایه گذاری، شرکتهای لیزینگ، شرکتهای واسطه گری مالی و
              شرکتهای پذیرفته شده در یکی از بازارهای شرکت بورس اوراق بهادار
              تهران یا فرابورس ایران. <br />
              • 2. اشخاصی که حداقل حقوق صاحبان سهام سه سال آخر آنها بیش از 100
              میلیارد ریال باشد و یا میانگین میانگین ارزش پرتفوی سه سال آخر آنها
              (بر اساس ارزش پرتفوی انتهای هرماه) بیش از 100 میلیارد ریال باشد. •
              3. اشخصای که گردش حساب بانکی آنها در طی شش ماه اخیر به ازای هر ماه
              بیش از 100 میلیارد ریال باشد.
              <br />
              • 4. سبدها با دارایی تحت مدیریت(AUM) بیش از 10 میلیارد ریال باشد.
              <br />
            </p>
            <h2>سوالات متداول بورس اوراق بهادار</h2>
            <p>
              اگر پرسش بی‌پاسخی درباره‌ی موضوعاتی که در این صفحه مشاهده
              می‌فرمایید، در ذهن دارید، می‌توانید روی موضوع مورد نظر کلیک کنید
              تا متداول‌ترین پرسش‌های مطرح شده را به همراه پاسخ‌های آن‌ها مشاهده
              کنید. ممکن است پرسش شما نیز مشابه یکی از این پرسش‌‌های متداول
              باشد.{" "}
            </p>

            <div className="compartment">
              {/* <div className="image faq"></div> */}
              <div className="data faq">
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
                      شرکت‌های سهامی‌خاص و سهامی‌عام چیست؟
                      <div className="customBorder"></div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="customAnswer">
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
                      کد بورسی چیست؟
                      <div className="customBorder"></div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="customAnswer">
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
                      عرضه اولیه چیست؟
                      <div className="customBorder"></div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="customAnswer">
                        در عرضه اولیه، سهام یک شرکت برای بار اول در بورس توسط
                        عموم قابل خریداری خواهد بود.
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
                      اعتبار چیست؟
                      <div className="customBorder"></div>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="customAnswer">
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

export default ServicesA1;
