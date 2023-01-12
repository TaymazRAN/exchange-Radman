import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState, useEffect } from "react";
import {
	deleteDepartment,
	departmentActions,
	fetchDepartments,
} from "../../../features/department/departmentSlice";
import AlertDeleteRedux from "../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";

const DepartmentTable = () => {
	const organid = JSON.parse(localStorage.getItem("organid"));

	const data = useSelector((state) => state.department.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.department.handleLoading);
	const error = useSelector((state) => state.department.error);
	const handleError = useSelector((state) => state.department.handleError);
	const ready = useSelector((state) => state.department.ready);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/department`);
				dispatch(departmentActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(departmentActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "name",
			headerName: "نام دپارتمان",
			flex: 1,
		},
		{
			field: "parentId",
			headerName: "نام دپارتمان پدر",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{data.find((item) => item.id === parameters.row.parentId)
							? data.find((item) => item.id === parameters.row.parentId)?.name
							: "دپارتمان اصلی"}
					</div>
				);
			},
		},

		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 280,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{data.find((item) => item.id === parameters.row.parentId) ? (
							<>
								<Button
									className="gridButton"
									color="info"
									onClick={(event) =>
										navigate(`/organization/departmentEdit/${parameters.id}`)
									}
								>
									<EditOutlinedIcon className="gridIcon" />
									ویرایش
								</Button>
								<AlertDeleteRedux
									title="دپارتمان"
									clickFunction={(event) => {
										dispatch(deleteDepartment(parameters.id));
									}}
									loading={handleLoading}
								/>
							</>
						) : (
							<>
								<Button
									className="gridButton"
									color="info"
									variant="outlined"
									disabled
								>
									غیر قابل تغییر
								</Button>
							</>
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
					onClick={(event) => navigate(`/organization/departmentAdd`)}
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

export default DepartmentTable;
