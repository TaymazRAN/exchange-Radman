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
										چه کسی اصل سرمایه (آورده اولیه) سرمایه‌گذاران صندوق تضمین
										صبا جهاد را تضمین می‌کند؟
										<div className="customBorder"></div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="customAnswer">
											<ul>
												<li>
													<b>تکست:</b>تکست
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
										آیا سود سرمایه‌گذاری در صندوق تضمین صبا جهاد، تضمین می‌شود؟
										<div className="customBorder"></div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="customAnswer">
											<ul>
												<li>
													<b>تکست:</b>تکست
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
										پذیره‌نویسی صندوق تضمین صبا جهاد چگونه انجام می‌شود؟
										<div className="customBorder"></div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="customAnswer">
											<ul>
												<li>
													<b>تکست:</b>تکست
												</li>
											</ul>
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
										آیا امکان ابطال واحدهای صندوق تضمین صبا جهاد قبل از ۶ ماه
										وجود دارد؟
										<div className="customBorder"></div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="customAnswer">
											<ul>
												<li>
													<b>تکست:</b>تکست
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
										ترکیب دارایی صندوق تضمین صبا جهاد چگونه است؟
										<div className="customBorder"></div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="customAnswer">
											<ul>
												<li>
													<b>تکست:</b>تکست
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
										آیا محدودیتی در میزان (درصد) سود سرمایه‌گذاران صندوق تضمین
										وجود دارد؟
										<div className="customBorder"></div>
									</div>
								</AccordionSummary>
								<AccordionDetails>
									<Typography>
										<div className="customAnswer">
											<ul>
												<li>
													<b>تکست:</b>تکست
												</li>
											</ul>
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
							<div className="text">۰۲۱ - ۶۳۴۸۶۰۰۰</div>
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
