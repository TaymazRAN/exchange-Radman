import "./employeeAccounts.css";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";
import {
	referenceCodeActions,
	fetchEmployeeAccounts,
	sendReferRequest,
} from "../../../features/referenceCode/referenceCodeSlice";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
import React, { useState, useEffect } from "react";
import SnackAlert from "../../../component/snackAlert/SnackAlert";
import AlertConfirmCustom from "../../../component/alertConfirm/AlertConfirmCustom";
import EngineeringIcon from "@mui/icons-material/Engineering";
import TextField from "@mui/material/TextField";

const EmployeeAccounts = () => {
	const username = JSON.parse(localStorage.getItem("username"));
	const [code, setCode] = useState("");

	const accounts = useSelector((state) => state.referenceCode.accounts);
	// const loading = useSelector((state) => state.referenceCode.loading);
	const handleLoading = useSelector(
		(state) => state.referenceCode.handleLoading
	);
	const error = useSelector((state) => state.referenceCode.error);
	const handleError = useSelector((state) => state.referenceCode.handleError);
	const ready = useSelector((state) => state.referenceCode.ready);
	const dispatch = useDispatch();
	// const navigate = useNavigate();

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
		dispatch(fetchEmployeeAccounts(username));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				dispatch(referenceCodeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			if (handleError === "Request failed with status code 409")
				handleOpenError("درخواست شما به این سازمان قبلا فرستاده شده است");
			else
				handleOpenError("کد ارجاع اشتباه وارد شده است");
			dispatch(referenceCodeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	return (
		<div dir="tl" className="dataGrid">
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
			<div className="secondaryPanelTitle">
				ارسال درخواست کارمندی برای سازمان ها
			</div>
			<div className="topButtonContainer">
				<TextField
					className="profileInput"
					autoFocus
					label="کد ارجاع"
					type="text"
					id="referenceCode"
					name="referenceCode"
					value={code}
					onChange={(e) => setCode(e.target.value)}
					fullWidth
					variant="outlined"
				/>
				<AlertConfirmCustom
					clickFunction={(event) =>
						dispatch(sendReferRequest({ username, code }))
					}
					loading={handleLoading}
					color="success"
					text="ارسال درخواست"
					customClass="profileInput button"
				/>
			</div>

			<div className="secondaryPanelTitle">حساب های کارمندی من</div>
			<div className="employeeAccounts">
				<>
					{error !== "" || !ready ? (
						<LoadingRedux error={error} />
					) : (
						<>
							{accounts.map((item, i) => {
								return (
									<div className="account" key={i}>
										<div className="part iconContainer">
											<EngineeringIcon className="icon" />
											نام سازمان: {item.organizationName}
										</div>
										<div className="part">موقعیت: {item.position}</div>
										<div className="part">
											وضعیت:
											{item.employmentStatus === "Current" && "استخدام شده"}
											{item.employmentStatus === "Pottential" && "متقاضی"}
										</div>
									</div>
								);
							})}
						</>
					)}
				</>
			</div>
		</div>
	);
};

export default EmployeeAccounts;
