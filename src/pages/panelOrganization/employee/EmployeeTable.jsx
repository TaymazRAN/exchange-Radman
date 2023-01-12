import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState, useEffect } from "react";
import { fetchDepartments } from "../../../features/department/departmentSlice";
import AlertDeleteRedux from "../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import {
	deleteEmployee,
	employeeActions,
	fetchEmployees,
} from "../../../features/employee/employeeSlice";

const EmployeeTable = () => {
	const organid = JSON.parse(localStorage.getItem("organid"));

	const data = useSelector((state) => state.employee.data);
	const dataDepartment = useSelector((state) => state.department.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.employee.handleLoading);
	const error = useSelector((state) => state.employee.error);
	const handleError = useSelector((state) => state.employee.handleError);
	const ready = useSelector((state) => state.employee.ready);

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
		dispatch(fetchDepartments(organid));
		dispatch(fetchEmployees(organid));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/department`);
				dispatch(employeeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(employeeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "username",
			headerName: "نام کاربری",
			flex: 1,
		},
		{
			field: "personelCode",
			headerName: "کد پرسنلی",
			flex: 1,
		},
		{
			field: "colorCode",
			headerName: "کد رنگی",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						<div
							style={{
								width: "100%",
								height: "30px",
								borderRadius: "10px",
								backgroundColor: parameters.row.colorCode,
								boxShadow: "0 2px 5px #dddddd",
							}}
						></div>
					</div>
				);
			},
		},
		{
			field: "departmentId",
			headerName: "نام دپارتمان",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataDepartment.find(
								(item) => item.id === parameters.row.departmentId
							)?.name
						}
					</div>
				);
			},
		},
		{
			field: "employmentStatus",
			headerName: "وضعیت استخدام",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.employmentStatus === "Current" && "استخدام شده"}
						{parameters.row.employmentStatus === "Pottential" && "قابل استخدام"}
					</div>
				);
			},
		},
		{
			field: "position",
			headerName: "موقعیت",
			flex: 1,
		},
		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 330,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						<Button
							className="gridButton"
							color="info"
							onClick={(event) =>
								navigate(`/organization/employeeEdit/${parameters.id}`)
							}
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDeleteRedux
							title="کارمند"
							clickFunction={(event) => {
								dispatch(deleteEmployee(parameters.id));
							}}
							loading={handleLoading}
						/>
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
					onClick={(event) => navigate(`/organization/employeeAdd`)}
				>
					اضافه کردن <AddIcon className="topButtonIcon" />
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

export default EmployeeTable;
