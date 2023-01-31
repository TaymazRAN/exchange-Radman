import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const Branch = () => {
	return (
		<div className="page">
			<h2>شعب و دفاتر</h2>
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
							شعبه تهران (تالار بزرگمهر)
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای ابوالفضل ابراهیم زاده
									</li>
									<li>
										<b>نشانی:</b>خیابان ولیعصر، خیابان بزرگمهر، بعد از تقاطع
										فلسطین، پلاک 38
									</li>
									<li>
										<b>تلفن:</b>63486000-021
									</li>
									<li>
										<b>فکس:</b>66496253-021
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
							شعبه تهران (تالار سعادت‌آباد)
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای فرشید طیب
									</li>
									<li>
										<b>نشانی:</b>سعادت آباد، بلوار شهرداری، نبش خیابان سیزدهم،
										تالارمعاملات بورس تهران
									</li>
									<li>
										<b>تلفن:</b>66735713-021
									</li>
									<li>
										<b>فکس:</b>66735713-021
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
							شعبه تبریز
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای صمد بهروزی راد
									</li>
									<li>
										<b>نشانی:</b>تبریز، خیابان ارتش جنوبی، جنب ساختمان پست
										مرکزی، طبقه دوم، تالار بورس منطقه ای تبریز
									</li>
									<li>
										<b>تلفن:</b>04135405974
									</li>
									<li>
										<b>کد پستی:</b>5138675977
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
							شعبه کاشان
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای میلاد قپانی پور
									</li>
									<li>
										<b>نشانی:</b>خیابان میرعماد ، جنب بانک سرمایه ، ساختمان بانک
										سرمایه ، طبقه اول ، واحد 4
									</li>
									<li>
										<b>تلفن:</b>4-55471730-031
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
							شعبه نوشهر
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای علیرضا اکبری
									</li>
									<li>
										<b>نشانی:</b>میدان همافران، ابتدای خیابان 15 خرداد، ساختمان
										ایلیا استیل، طبقه دوم، واحد سمت راست
									</li>
									<li>
										<b>تلفن:</b>70-52358469-011
									</li>
									<li>
										<b>فکس:</b>52358726-011
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
							شعبه نیشابور
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>خانم رویا اکبری
									</li>
									<li>
										<b>نشانی:</b>خیابان 15 خرداد، بالاتر از 15 خرداد 7، ساختمان
										پاسارگاد، طبقه سوم، واحد 12
									</li>
									<li>
										<b>تلفن:</b>42241091-051
									</li>
									<li>
										<b>فکس:</b>42241091-051
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
							شعبه ساری 1<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای حسین رجب زاده
									</li>
									<li>
										<b>نشانی:</b>ساری ، بلوار امیر مازندرانی ، جنب بانک کشاورزی
										، ساختمان پزشکی پارسا ، طبقه چهارم
									</li>
									<li>
										<b>تلفن:</b>٠١١٤٤٤٣١٧٥٠ و ٠١١٤٤٤٣١٧٦٠
									</li>
									<li>
										<b>فکس:</b>4816716937
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
							شعبه ساری 2<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای محمدرضا عبداله پور
									</li>
									<li>
										<b>نشانی:</b>خیابان امیر مازندرانی، خیابان دولت، ساختمان
										آرتین، طبقه پنجم، واحد17
									</li>
									<li>
										<b>تلفن:</b>3-33363201-011
									</li>
									<li>
										<b>فکس:</b>33372554-011
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
							شعبه شیراز
							<div className="customBorder"></div>
						</div>
					</AccordionSummary>
					<AccordionDetails>
						<Typography>
							<div className="customAnswer">
								<ul>
									<li>
										<b>نام مدیر:</b>آقای هادی صحت پور
									</li>
									<li>
										<b>نشانی:</b>شیراز، بلوار پاسداران(زرهی)، حدفاصل پل چوگان و
										درمانگاه حضرت محمد رسول الله(ص)، نرسیده به خیابان مبعث،
										ساختمان فرزاد، طبقه 3، واحد 8
									</li>
									<li>
										<b>تلفن:</b>07138422018
									</li>
									<li>
										<b>کد پستی:</b>7185898891
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

export default Branch;
