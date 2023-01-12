import * as React from "react";
import { useSelector, useDispatch } from "react-redux";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import CheckCircleOutlineRoundedIcon from "@mui/icons-material/CheckCircleOutlineRounded";
import ErrorOutlineRoundedIcon from "@mui/icons-material/ErrorOutlineRounded";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	// PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
	CartesianGrid,
	LineChart,
	Line,
} from "recharts";
import LoadingData from "../../../components/loadingData/LoadingData";
import { returnPointInPercent } from "../../../services/calculatePoint";
import { fetchAllReports } from "../../../features/report/reportSlice";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import { useParams, useNavigate } from "react-router-dom";

export default function ReportShow() {
	const { id } = useParams();

	const data = useSelector((state) => state.report.reports);
	const dataFunctions = useSelector((state) => state.report.functions);
	const dataPackages = useSelector((state) => state.report.packages);
	const dataStorePackages = useSelector((state) => state.report.storePackages);
	// const loading = useSelector((state) => state.report.loading);
	const error = useSelector((state) => state.report.error);
	const ready = useSelector((state) => state.report.ready);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	React.useEffect(() => {
		dispatch(fetchAllReports());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const areaData = [
		{
			name: "نمره کل",
			point: 9,
		},
		{
			name: "نمره کل",
			point: 4,
		},
		{
			name: "نمره کل",
			point: 10,
		},
		{
			name: "نمره کل",
			point: 6,
		},
		{
			name: "نمره کل",
			point: 9,
		},
		{
			name: "نمره کل",
			point: 5,
		},
	];

	const accordionStyle = {
		boxShadow: "0 2px 5px #dddddd",
		"&.MuiAccordion-root:before": {
			backgroundColor: "transparent",
		},
	};

	const summaryStyle = {
		flexDirection: "row",
	};

	const typographyStyle = {
		textAlign: "left",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "100%",
	};

	const buttonStyle = {
		fontSize: "15px",
		backgroundColor: "#ffffff",
		color: "#222222",
		borderRadius: "20px",
		height: "40px",
		paddingLeft: "15px",
		paddingRight: "15px",
		boxShadow: "0 2px 5px #dddddd",
	};

	const dataColor = [
		"#777777",
		"#84bb7b",
		"#63b682",
		"#a4c073",
		"#c4c56d",
		"#e2c965",
		"#f3c563",
		"#e6ad61",
		"#e9a268",
		"#e5926b",
		"#e0816d",
	];

	return (
		<>
			<div className="topButtonContainer">
				<Button
					className="topButton"
					variant="outlined"
					color="error"
					onClick={(event) => navigate(`/admin/report`)}
				>
					بازگشت به پنل
				</Button>
			</div>
			{error !== "" || !ready ? (
				<LoadingRedux error={error} />
			) : (
				<div className="report">
					{data.length === 0 ? (
						<LoadingData />
					) : (
						<>
							{data
								.filter((item) => item.packageId === id)
								.map((itemData, i) => {
									let packageData = dataPackages.find(
										(item) => item.id === itemData.packageId
									);
									let storePackageData = dataStorePackages.find(
										(item) => item.id === packageData.storePackageId
									);
									let reportData = [];
									itemData.reportValues.map((reportItem, i) => {
										reportData.push({
											subject: dataFunctions.find(
												(item) => item.id === reportItem.functionId
											).name,
											point: reportItem.value,
											// point: Math.floor(Math.random() * 10),
											pointGood: reportItem.value / 2,
											pointNormal: reportItem.value / 4,
											pointBad: reportItem.value / 8,
											fullMark: 10,
										});
										return reportData;
									});
									return (
										<>
											<Accordion
												className="accordionReport"
												sx={accordionStyle}
												expanded={true}
											>
												<AccordionSummary
													sx={summaryStyle}
													expandIcon={<ExpandMoreIcon />}
													aria-controls="panel1bh-content"
													id="panel1bh-header"
												>
													<Typography sx={typographyStyle}>
														<span className="reportName">
															کارنامه {storePackageData.name} (
															{packageData.username}){/* کارنامه آزمون عمومی */}
														</span>

														<span className="reportExtra">
															<div className="reportPercent">
																{returnPointInPercent(reportData)} %
															</div>
															<Button sx={buttonStyle}>کپی لینک</Button>
															<span className="reportPicture"></span>
														</span>
													</Typography>
												</AccordionSummary>
												<AccordionDetails>
													<div className="reportRow">
														<div className="spiderChartContainer">
															{storePackageData.type === "Disorder" ? (
																<div className="disorderBox">
																	{reportData.map((disorderItem, index) => {
																		return (
																			<div
																				className="disorderBarBox"
																				key={index}
																			>
																				<div className="disorderPoint">
																					{disorderItem.point}
																				</div>
																				<div className="disorderBar">
																					<div
																						className="disorderBarPercent"
																						style={{
																							height: `${Math.round(
																								disorderItem.point * 10
																							)}%`,
																							backgroundColor:
																								dataColor[
																									Math.round(disorderItem.point)
																								],
																						}}
																					></div>
																				</div>
																				<div className="disorderName">
																					{disorderItem.subject}
																				</div>
																			</div>
																		);
																	})}
																</div>
															) : (
																<ResponsiveContainer width="100%" height="100%">
																	<RadarChart
																		cx="50%"
																		cy="50%"
																		outerRadius="80%"
																		data={reportData}
																	>
																		<PolarGrid />
																		<PolarAngleAxis dataKey="subject" />
																		{/* <PolarRadiusAxis angle={30} domain={[1, 10]} tickCount={4} /> */}
																		<Radar
																			name="نمره"
																			dataKey="point"
																			stroke="#49DEE9"
																			fill="#49DEE9"
																			fillOpacity={0.6}
																			dot={true}
																		/>
																		<Radar
																			name="نمره خوب"
																			dataKey="pointGood"
																			stroke="#51ed03"
																			fill="#51ed03"
																			fillOpacity={0.2}
																		/>
																		<Radar
																			name="نمره میانگین"
																			dataKey="pointNormal"
																			stroke="#ede103"
																			fill="#ede103"
																			fillOpacity={0.2}
																		/>
																		<Radar
																			name="نمره پایین"
																			dataKey="pointBad"
																			stroke="#ed0303"
																			fill="#ed0303"
																			fillOpacity={0.2}
																		/>
																		<Tooltip />
																	</RadarChart>
																</ResponsiveContainer>
															)}
														</div>
														<div className="reportContainer">
															<div className="reportStatusContainer">
																<div className="reportStatus good">
																	<CheckCircleOutlineRoundedIcon className="reportStatusIcon" />
																	نمره خوب
																</div>
																<div className="reportStatus normal">
																	<ErrorOutlineRoundedIcon className="reportStatusIcon" />
																	نمره میانگین
																</div>
																<div className="reportStatus bad">
																	<HighlightOffRoundedIcon className="reportStatusIcon" />
																	نمره پایین
																</div>
															</div>
															<div className="manuscript">
																{itemData.manuscript}
															</div>
															<div className="areaChartContainer">
																<ResponsiveContainer width="100%" height="100%">
																	<LineChart
																		width={600}
																		height={300}
																		data={areaData}
																		// margin={{
																		// 	top: 5,
																		// 	right: 30,
																		// 	left: 20,
																		// 	bottom: 5,
																		// }}
																	>
																		<CartesianGrid strokeDasharray="3 3" />
																		<XAxis hide dataKey="name" />
																		<YAxis hide />
																		<Tooltip />
																		<Line
																			isAnimationActive={false}
																			type="linear"
																			dataKey="point"
																			stroke="#49DEE9"
																		/>
																	</LineChart>
																</ResponsiveContainer>
															</div>
														</div>
													</div>
												</AccordionDetails>
											</Accordion>
										</>
									);
								})}
						</>
					)}
				</div>
			)}
		</>
	);
}
