import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Account = () => {
	return (
		<div className="page">
			<h2>شماره حساب های کارگزاری صباجهاد</h2>
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
							بانک ملی
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image melli"></div>
								<ul>
									<li>
										<b>شعبه:</b>بورس اوراق بهادار
									</li>
									<li>
										<b>شماره حساب:</b>0108302002002
									</li>
									<li>
										<b>شماره شبا:</b>IR03 0170 0000 0010 8302 0020 02
									</li>
								</ul>
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
							بانک ملت
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image mellat"></div>
								<ul>
									<li>
										<b>شعبه:</b>بورس کالا
									</li>
									<li>
										<b>شماره حساب:</b>4674170062
									</li>
									<li>
										<b>شماره شبا:</b>IR58 0120 0000 0000 4674 1700 62
									</li>
								</ul>
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
							بانک سامان
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image saman"></div>
								<ul>
									<li>
										<b>شعبه:</b>سی تیر
									</li>
									<li>
										<b>شماره حساب:</b>849408868093
									</li>
									<li>
										<b>شماره شبا:</b>IR78 0560 0849 0400 0886 8090 03
									</li>
								</ul>
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
							بانک پاسارگاد
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image pasargad"></div>
								<ul>
									<li>
										<b>شعبه:</b>فاطمی
									</li>
									<li>
										<b>شماره حساب:</b>225110139213921
									</li>
									<li>
										<b>شماره شبا:</b>IR88 0570 0225 1101 3921 3920 01
									</li>
								</ul>
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
							بانک پارسیان
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image parsian"></div>
								<ul>
									<li>
										<b>شعبه:</b>میدان سلماس
									</li>
									<li>
										<b>شماره حساب:</b>20100190072604
									</li>
									<li>
										<b>شماره شبا:</b>IR43 0540 1065 2010 0190 0726 04
									</li>
								</ul>
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
							بانک کشاورزی
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image keshavarzi"></div>
								<ul>
									<li>
										<b>شعبه:</b>بورس کالا
									</li>
									<li>
										<b>شماره حساب:</b>647533658
									</li>
									<li>
										<b>شماره شبا:</b>IR30 0160 0000 0000 0647 5336 58
									</li>
								</ul>
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
							بانک شهر
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image shahr"></div>
								<ul>
									<li>
										<b>شعبه:</b>سهروردی شمالی تهران
									</li>
									<li>
										<b>شماره حساب:</b>1001001984172
									</li>
									<li>
										<b>شماره شبا:</b>IR17 0610 0000 0100 1001 9841 72
									</li>
								</ul>
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
							بانک رسالت
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<div className="image resalat"></div>
								<ul>
									<li>
										<b>شعبه:</b>بانکداری اجتماعی
									</li>
									<li>
										<b>شماره حساب:</b>1056055571
									</li>
									<li>
										<b>شماره شبا:</b>IR96 0700 0010 0022 5605 5570 01
									</li>
								</ul>
							</div>
						</Typography>
					</AccordionDetails>
				</Accordion>
			</div>
		</div>
	);
};

export default Account;
