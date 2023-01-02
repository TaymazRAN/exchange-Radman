import "./quiz.css";
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import PlayArrowTwoToneIcon from "@mui/icons-material/PlayArrowTwoTone";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import LinearProgress, {
	linearProgressClasses,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import LoadingData from "../../../component/loadingData/LoadingData";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
// import { useNavigate } from "react-router-dom";
import {
	fetchExamData,
	runExamActions,
	generateLink,
} from "../../../features/runExam/runExamSlice";
import { Button } from "@mui/material";
import SnackAlert from "../../../component/snackAlert/SnackAlert";
import LoadingSmall from "../../../component/loadingSmall/LoadingSmall";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
	height: 10,
	borderRadius: 5,
	[`&.${linearProgressClasses.colorPrimary}`]: {
		backgroundColor:
			theme.palette.grey[theme.palette.mode === "light" ? "#ffffff" : 800],
	},
	[`& .${linearProgressClasses.bar}`]: {
		borderRadius: 5,
		backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
	},
}));

function LinearProgressWithLabel(props) {
	return (
		<Box sx={{ display: "flex", alignItems: "center" }}>
			<Box sx={{ minWidth: 35 }}>
				<Typography variant="body2" color="text.secondary">{`${Math.round(
					props.value
				)}%`}</Typography>
			</Box>
			<Box sx={{ width: "100%", ml: 1 }}>
				<BorderLinearProgress variant="determinate" {...props} />
			</Box>
		</Box>
	);
}

LinearProgressWithLabel.propTypes = {
	/**
	 * The value of the progress indicator for the determinate and buffer variants.
	 * Value between 0 and 100.
	 */
	value: PropTypes.number.isRequired,
};

export default function Quiz() {
	// const navigate = useNavigate();
	const username = JSON.parse(localStorage.getItem("username"));

	const url = useSelector((state) => state.runExam.url);
	const selectedPackage = useSelector((state) => state.runExam.selectedPackage);
	const dataPackages = useSelector((state) => state.runExam.packages);
	const dataStorePackages = useSelector((state) => state.runExam.storePackages);
	// const loading = useSelector((state) => state.runExam.loading);
	const handleLoading = useSelector((state) => state.runExam.handleLoading);
	const error = useSelector((state) => state.runExam.error);
	const handleError = useSelector((state) => state.runExam.handleError);
	const ready = useSelector((state) => state.runExam.ready);
	const dispatch = useDispatch();

	const [successAlert, setSuccessAlert] = useState(false);
	const [successText, setSuccessText] = useState("");
	const handleOpenSuccess = (text) => {
		setSuccessText(text);
		setSuccessAlert(true);
	};

	const handleCloseSuccess = () => {
		setSuccessAlert(false);
	};

	const [errorAlert, setErrorAlert] = useState(false);
	const [errorText, setErrorText] = useState("");

	const handleOpenError = (text) => {
		setErrorText(text);
		setErrorAlert(true);
	};

	const handleCloseError = () => {
		setErrorAlert(false);
	};

	useEffect(() => {
		dispatch(fetchExamData(username));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				dispatch(runExamActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(runExamActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	return (
		<div className="downloadQuiz">
			<SnackAlert
				props={{
					successAlert,
					handleCloseSuccess,
					successText,
					errorAlert,
					handleCloseError,
					errorText,
				}}
			/>
			{error !== "" || !ready ? (
				<LoadingRedux error={error} />
			) : (
				<div className="report">
					<div className="warningBox">
						<div className="warningText">
							<span className="red">توجه:</span> برای اجرای آزمون ها باید حتما
							نرم افزار آزمون خوان سایپورت را بر روی سیستم خود نصب داشته باشید.
						</div>
						<div className="warningButton">
							<Button
								variant="outlined"
								className="topButton"
								color="info"
								onClick={(e) => {
									window.open(
										"http://store.agahpadidar.com/ckfinder/userfiles/PsyportSetup/Setup.exe"
									);
								}}
							>
								دانلود آزمون خوان
							</Button>
						</div>
					</div>
					{dataPackages.length === 0 ? (
						<LoadingData />
					) : (
						<>
							{dataPackages.map((itemData, i) => {
								let storePackageData = dataStorePackages.find(
									(item) => item.id === itemData.storePackageId
								);

								return (
									<div className="downloadConatiner">
										<div className="downloadName">{storePackageData.name}</div>
										<div className="downloadProgress">
											<LinearProgressWithLabel
												value={
													selectedPackage === itemData.id &&
													url !== "Package has been started once before"
														? 100
														: 0
												}
											/>
										</div>
										<Button
											className="topButton"
											color="info"
											sx={{ padding: "14px 15px" }}
											onClick={(event) => dispatch(generateLink(itemData.id))}
											disabled={selectedPackage === itemData.id}
										>
											{selectedPackage === itemData.id &&
											url === "Package has been started once before"
												? "آزمون منقضی شده است"
												: "ساخت لینک"}
											{handleLoading ? <LoadingSmall /> : null}
										</Button>
										<IconButton
											variant="contained"
											color="success"
											size="medium"
											sx={{ backgroundColor: "#ffffff" }}
											disabled={
												selectedPackage !== itemData.id ||
												url === "Package has been started once before"
											}
											onClick={(e) => {
												window.open(url);
											}}
										>
											<PlayArrowTwoToneIcon fontSize="Inherit" />
										</IconButton>
									</div>
								);
							})}
						</>
					)}
				</div>
			)}
		</div>
	);
}
