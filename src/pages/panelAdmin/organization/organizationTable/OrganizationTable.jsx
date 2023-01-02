import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../../component/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../../component/snackAlert/SnackAlert";
import LoadingRedux from "../../../../component/loadingRedux/LoadingRedux";
import purifyPrice from "../../../../services/purifyPrice";
import {
	deleteOrganization,
	fetchOrganizations,
	organizationActions,
} from "../../../../features/organization/organizationSlice";

const OrganizationTable = () => {
	const data = useSelector((state) => state.organization.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector(
		(state) => state.organization.handleLoading
	);
	const error = useSelector((state) => state.organization.error);
	const handleError = useSelector((state) => state.organization.handleError);
	const ready = useSelector((state) => state.organization.ready);

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
		dispatch(fetchOrganizations());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/organization`);
				dispatch(organizationActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(organizationActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleOrganizationPanelOpen = (values) => {
		localStorage.setItem("organid", JSON.stringify(values.id));
		localStorage.setItem(
			"departmentid",
			JSON.stringify(values.rootDepartmentId)
		);
		localStorage.setItem("code", JSON.stringify(values.refrenceCode));
		localStorage.setItem("organname", JSON.stringify(values.name));
		navigate(`/organization`);
	};

	const columns = [
		{
			field: "name",
			headerName: "نام سازمان",
			flex: 1,
		},
		{
			field: "emailAddress",
			headerName: "ایمیل",
			flex: 1,
		},
		{
			field: "refrenceCode",
			headerName: "کد ارجاع",
			flex: 1,
		},
		{
			field: "credit",
			headerName: "اعتبار",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{purifyPrice(parameters.row.credit) + " تومان"}
					</div>
				);
			},
		},
		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 540,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						<Button
							className="gridButton"
							onClick={(event) => navigate(`/admin/creditAdd/${parameters.id}`)}
							color="warning"
						>
							<AddIcon className="gridIcon" />
							افزایش اعتبار
						</Button>
						<Button
							className="gridButton"
							onClick={(event) =>
								navigate(`/admin/organizationEdit/${parameters.id}`)
							}
							color="info"
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<Button
							className="gridButton"
							onClick={(event) =>
								navigate(`/admin/organizationShow/${parameters.id}`)
							}
							color="success"
						>
							<VisibilityOutlinedIcon className="gridIcon" />
							جزئیات
						</Button>
						<AlertDeleteRedux
							title="سازمان"
							clickFunction={(event) => {
								dispatch(deleteOrganization(parameters.id));
							}}
							loading={handleLoading}
						/>
						<Button
							className="gridButton"
							onClick={(event) => handleOrganizationPanelOpen(parameters.row)}
							color="secondary"
						>
							<CorporateFareIcon className="gridIcon" />
							پنل سازمان
						</Button>
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
					onClick={(event) => navigate("/admin/organizationAdd")}
				>
					تعریف سازمان جدید <AddIcon className="topButtonIcon" />
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

export default OrganizationTable;
