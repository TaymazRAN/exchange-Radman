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
									در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
									راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
									حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
									موجود طراحی اساسا مورد استفاده قرار گیرد.
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
									در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
									راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
									حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
									موجود طراحی اساسا مورد استفاده قرار گیرد.
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
									در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
									راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
									حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
									موجود طراحی اساسا مورد استفاده قرار گیرد.
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
									در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه
									راهکارها و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل
									حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای
									موجود طراحی اساسا مورد استفاده قرار گیرد.
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
