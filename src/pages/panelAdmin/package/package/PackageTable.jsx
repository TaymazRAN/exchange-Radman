import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import {
	deletePackage,
	fetchPackages,
	packageActions,
} from "../../../../features/package/packageSlice";
import { fetchStorePackages } from "../../../../features/package/storePackageSlice";

const PackageTable = () => {
	const data = useSelector((state) => state.package.data);
	const dataStorePackage = useSelector((state) => state.storePackage.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.package.handleLoading);
	const error = useSelector((state) => state.package.error);
	const handleError = useSelector((state) => state.package.handleError);
	const ready = useSelector((state) => state.package.ready);

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
		dispatch(fetchPackages());
		dispatch(fetchStorePackages());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/package`);
				dispatch(packageActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(packageActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "storePackageId",
			headerName: "بسته",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataStorePackage.find(
								(item) => item.id === parameters.row.storePackageId
							)?.name
						}
					</div>
				);
			},
		},
		{
			field: "organizationPackageId",
			headerName: "نوع خرید",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.organizationPackageId ===
						"00000000-0000-0000-0000-000000000000"
							? "خرید شخصی"
							: "خرید سازمانی"}
					</div>
				);
			},
		},
		{
			field: "isLaunched",
			headerName: "وضعیت",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isLaunched
							? "در انتظار اجرا/ساخت کارنامه"
							: "اجرا شده"}
					</div>
				);
			},
		},
		{
			field: "username",
			headerName: "کاربر",
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
							onClick={(event) => navigate(`/admin/reportAdd/${parameters.id}`)}
							disabled={!parameters.row.isLaunched}
						>
							<EditOutlinedIcon className="gridIcon" />
							ساخت کارنامه
						</Button>
						<AlertDeleteRedux
							title="اجرا"
							clickFunction={(event) => {
								dispatch(deletePackage(parameters.id));
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

export default PackageTable;
