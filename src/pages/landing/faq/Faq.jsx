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
							<div className="faqQuestion">
								سرمایه گذاری در گروه مالی صبا جهاد چه مزیت هایی برای من دارد؟
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div className="faqAnswer">
									داشتن ابزارهای سرمایه گذاری متنوع دسترسی به ابزارهای متنوع
									سرمایه گذاری از جمله کارگزاری، سبدگردانی، صندوق های سرمایه
									گذاری، بیمه زندگی و ...
									<br /> دارا بودن طیف وسیعی از انواع صندوق های سرمایه گذاری
									استفاده از تیم حرفه ای مدیریت سرمایه عملکرد درخشان و قابل دفاع
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
								گروه مالی صبا جهاد چگونه از سرمایه من در برابر تورم و سایر آسیب
								های مالی حمایت می کند؟
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div className="faqAnswer">
									<ul>
										<li>
											تضمین اصل سرمایه ارائه ی سود به صورت روز شمار در برخی از
											صندوق های سرمایه گذاری
										</li>
										<li>
											فراهم آوردن شرایط و امکانات لازم در برخی از صندوق ها برای
											ورود مشتریان ریسک پذیر در راستای کسب سود بیشتر
										</li>
										<li>
											ایجاد پرتفوی اختصاصی برای مشتریان دارای سرمایه ی مطلوب و
											مدیریت آن توسط مدیران حرفه ای بازار سرمایه
										</li>
										<li>
											امکان استفاده از اهرم برای نخستین بار در بازار صندوق های
											سرمایه گذاری ایران و کسب سود بیشتر با اخذ مجوزهای شرعی و
											قانونی از سازمان بورس و وزارت اقتصاد
										</li>
									</ul>
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
								گروه صبا جهاد برای مشتریان دارای سرمایه ی خرد ( کمتر از ۱
								میلیارد تومان) که با وجود علاقه به بازار سرمایه، وقت و دانش کافی
								برای سرمایه گذاری در این حوزه را ندارند، چه پیشنهادی دارد؟
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div className="faqAnswer">
									<ul>
										<li>
											توصیه ی اصلی گروه مالی کاریزما به این دسته از مشتریان
											عزیز، داشتن رویکرد غیر مستقیم در سرمایه گذاری است، بدین
											معنا که ضمن اعتماد به مدیران حرفه ای کاریزما و یا سایر
											صندوق های سرمایه گذاری معتبر در ایران، از خرید و فروش
											مستقیم سهام در بازار بورس و ... خودداری کرده و سرمایه ی
											خود را در یک صندوق سرمایه گذاری مطمئن قرار دهند
										</li>
										<li>
											استفاده از ابزار پیشرفته ی مشاور هوشمند کاریزما (موجود در
											سایت). این مشاور هوشمند به صورت خودکار و طبق سلیقه، نوع
											نیاز و میزان ریسک پذیری شما، پیشنهادی به صورت اختصاصی برای
											شما آماده خواهد کرد.
										</li>
									</ul>
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
								اگر سرمایه ام ( مثلا ۵۰۰ میلیون تومان) را از ابتدای سال ۱۳۹۶ ( ۵
								سال) در هر یک از صندوق های صبا جهاد سرمایه گذاری میکردم، اکنون
								در بیشترین و کمترین حالت، بازده سرمایه گذاری من چقدر میشد؟
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div className="faqAnswer">
									در مجموعه کاریزما:
									<br />
									در بیشترین حالت ۱۹۰۰% سود معادل ۱۰/۰۰۰/۰۰۰/۰۰۰ تومان (اصل و
									سود سرمایه شما) (صندوق سهامی کاریزما)
									<br />
									در کمترین حالت ۱۰۸% سود معادل ۱/۰۴۰/۰۰۰/۰۰۰ تومان (اصل و سود
									سرمایه شما) (صندوق درآمد ثابت کاریزما)
									<br />
									در بازارهای موازی:
									<br />
									در بیشترین حالت ۸۳۷% سود معادل ۴/۶۸۵/۰۰۰/۰۰۰ تومان (اصل و سود
									سرمایه شما) (دلار نماینده بازار موازی فرض شده است- قیمت دلار
									تیر سال ۹۶ تا تیر سال ۱۴۰۱ لحاظ شده است)
									<br />
									کمترین حالت ۱۰۰% سود معادل ۱/۰۰۰/۰۰۰/۰۰۰ تومان (اصل و سود
									سرمایه شما) (سپرده ۲۰% بانکی)
									<br />
									(محاسبات از تیر ماه لحاظ شده است)
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
