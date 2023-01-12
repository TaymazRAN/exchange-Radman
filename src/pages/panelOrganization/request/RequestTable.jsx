import { useSelector, useDispatch } from "react-redux";
import { DataGrid, GridAddIcon } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import purifyPrice from "../../../services/purifyPrice";
import AlertConfirm from "../../../components/alertConfirm/AlertConfirm";
import AlertDeny from "../../../components/alertDeny/AlertDeny";
import {
	acceptRequest,
	denyRequest,
	fetchCredit,
	fetchRequestData,
	fetchRequests,
	requestActions,
} from "../../../features/request/requestSlice";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import React, { useState, useEffect } from "react";
import SnackAlert from "../../../components/snackAlert/SnackAlert";

const RequestTable = () => {
	const organid = JSON.parse(localStorage.getItem("organid"));
	const departmentid = JSON.parse(localStorage.getItem("departmentid"));

	const credit = useSelector((state) => state.request.credit);
	const data = useSelector((state) => state.request.requests);
	const dataDepartment = useSelector((state) => state.request.departments);
	const dataEmployee = useSelector((state) => state.request.employees);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.request.handleLoading);
	const error = useSelector((state) => state.request.error);
	const handleError = useSelector((state) => state.request.handleError);
	const ready = useSelector((state) => state.request.ready);
	const dispatch = useDispatch();
	const navigate = useNavigate();

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
		dispatch(fetchCredit(organid));
		dispatch(fetchRequests(organid));
		dispatch(fetchRequestData({ organid, departmentid }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// }, []);

	const accept = (id) => {
		try {
			dispatch(acceptRequest(id)).unwrap();
		} catch (err) {
			console.error("Failed to delete the post: ", err);
		}
	};

	const deny = (id) => {
		try {
			dispatch(denyRequest(id)).unwrap();
		} catch (err) {
			console.error("Failed to delete the post: ", err);
		}
	};

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/request`);
				dispatch(requestActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(requestActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "issuerUsername",
			headerName: "نام کاربری",
			flex: 1,
		},
		{
			field: "departmentId",
			headerName: "برای",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.departmentId !==
						"00000000-0000-0000-0000-000000000000"
							? dataDepartment.find(
									(item) => item.id === parameters.row.departmentId
							  )?.name
							: dataEmployee.find(
									(item) => item.id === parameters.row.employementProfileId
							  )?.username}
					</div>
				);
			},
		},
		{
			field: "price",
			headerName: "مقدار",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{purifyPrice(parameters.row.price) + " تومان"}
					</div>
				);
			},
		},
		{
			field: "status",
			headerName: "وضعیت",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isActive
							? "در حال بررسی"
							: parameters.row.isAccepted
							? "تایید شده"
							: "رد شده"}
					</div>
				);
			},
		},
		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 330,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isActive ? (
							<>
								<AlertConfirm
									clickFunction={(event) => accept(parameters.id)}
									loading={handleLoading}
								/>

								<AlertDeny
									clickFunction={(event) => deny(parameters.id)}
									loading={handleLoading}
								/>
							</>
						) : (
							<Button
								variant="outlined"
								className="gridButton"
								color="info"
								disabled
							>
								غیر فعال
							</Button>
						)}
					</div>
				);
			},
		},
	];

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
			<div className="topButtonContainer">
				<Button
					className="topButton"
					variant="outlined"
					color="success"
					sx={{ padding: "14px 15px", marginRight: "15px" }}
					onClick={(event) => navigate(`/organization/requestAddEmployee`)}
				>
					اضافه کردن برای کارمند <GridAddIcon className="topButtonIcon" />
				</Button>
				<Button
					className="topButton"
					variant="outlined"
					color="success"
					sx={{ padding: "14px 15px" }}
					onClick={(event) => navigate(`/organization/requestAddDepartment`)}
				>
					اضافه کردن برای دپارتمان <GridAddIcon className="topButtonIcon" />
				</Button>
				<Button
					className="topButton credit"
					variant="outlined"
					disabled
					sx={{ padding: "14px 15px" }}
				>
					اعتبار باقی مانده: {purifyPrice(credit)} تومان
				</Button>
			</div>

			<div style={{ height: 500, width: "100%" }}>
				<>
					{error !== "" || !ready ? (
						<LoadingRedux error={error} />
					) : (
						<DataGrid
							rows={data}
							columns={columns}
							pageSize={7}
							rowsPerPageOptions={[7]}
							checkboxSelection
							disableSelectionOnClick
							sx={{ color: "#2C3333", fontSize: "13px" }}
						/>
					)}
				</>
			</div>
		</div>
	);
};

export default RequestTable;
