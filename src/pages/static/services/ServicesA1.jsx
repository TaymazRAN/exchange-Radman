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
					<div className="hollowCard">
						<h3>سامانه قدیم (آنلاین-سامانه قدیم1)</h3>
						<Button className="button yellow" variant="text" color="error">
							ورود
						</Button>
						<Button className="button blue" variant="text" color="error">
							راهنمایی
						</Button>
					</div>
					<div className="hollowCard">
						<h3>سامانه قدیم (آنلاین-سامانه قدیم2)</h3>
						<Button className="button yellow" variant="text" color="error">
							ورود
						</Button>
						<Button className="button blue" variant="text" color="error">
							راهنمایی
						</Button>
					</div>
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
			<div className="split big centered">
				<h2>سوالات متداول بورس اوراق بهادار</h2>
				<p>
					اگر پرسش بی‌پاسخی درباره‌ی موضوعاتی که در این صفحه مشاهده می‌فرمایید،
					در ذهن دارید، می‌توانید روی موضوع مورد نظر کلیک کنید تا متداول‌ترین
					پرسش‌های مطرح شده را به همراه پاسخ‌های آن‌ها مشاهده کنید. ممکن است
					پرسش شما نیز مشابه یکی از این پرسش‌‌های متداول باشد.{" "}
				</p>
				<div className="accordionContainer">
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
							}
							aria-controls="panel1a-content"
							id="panel1a-header"
						>
							<div className="customQuestion">
								سهام چیست؟
								<div className="customBorder"></div>
							</div>
						</AccordionSummary>
						<AccordionDetails>
							<Typography>
								<div className="customAnswer">
									سرمایه هر شرکت سهامی به قسمت‌های مساوی تقسیم می‌شود که به هر
									یک از این قسمت‌ها، یک سهم می‌گویند. معمولا قیمت اسمی سهام در
									ایران 100 تومان است. هر فرد وقتی اقدام به خرید سهام می‌کند در
									واقع فعالیت خود در بازار سرمایه را شروع کرده است. افراد پس از
									خرید سهام، مالک جزئی از دارایی شرکت می‌شوند.
								</div>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
								<div className="customAnswer">تکست </div>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
								<div className="customAnswer">تکست </div>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
								<div className="customAnswer">تکست </div>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
								<div className="customAnswer">تکست </div>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
								<div className="customAnswer">تکست </div>
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion className="customAccordion">
						<AccordionSummary
							expandIcon={
								<ExpandMoreIcon style={{ color: "#D0CD38", fontSize: 25 }} />
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
								<div className="customAnswer">تکست </div>
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</div>
		</div>
	);
};

export default ServicesA1;
