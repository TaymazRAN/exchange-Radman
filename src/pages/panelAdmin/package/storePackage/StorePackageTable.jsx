import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import AddIcon from "@mui/icons-material/Add";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import {
	deleteStorePackage,
	fetchStorePackages,
	storePackageActions,
} from "../../../../features/package/storePackageSlice";
import purifyDate from "../../../../services/purifyDate";
import purifyPrice from "../../../../services/purifyPrice";
import { fetchCategorys } from "../../../../features/package/categorySlice";

const StorePackageTable = () => {
	const data = useSelector((state) => state.storePackage.data);
	const dataCategory = useSelector((state) => state.category.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector(
		(state) => state.storePackage.handleLoading
	);
	const error = useSelector((state) => state.storePackage.error);
	const handleError = useSelector((state) => state.storePackage.handleError);
	const ready = useSelector((state) => state.storePackage.ready);

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
		dispatch(fetchCategorys());
		dispatch(fetchStorePackages());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/storePackage`);
				dispatch(storePackageActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(storePackageActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "name",
			headerName: "نام بسته",
			flex: 1,
		},
		{
			field: "categoryId",
			headerName: "دسته بندی",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataCategory.find((item) => item.id === parameters.row.categoryId)
								?.name
						}
					</div>
				);
			},
		},
		{
			field: "price",
			headerName: "قیمت",
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
			field: "packageDiscountValue",
			headerName: "تخفیف",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{purifyPrice(parameters.row.packageDiscountValue) + " تومان"}
					</div>
				);
			},
		},
		{
			field: "type",
			headerName: "نوع بسته",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.type === "Measurment" && "ارزیابی"}
						{parameters.row.type === "Disorder" && "ناهنجاری"}
					</div>
				);
			},
		},
		{
			field: "dateCreated",
			headerName: "تاریخ ساخت",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{purifyDate(parameters.row.dateCreated)}
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
						<Button
							className="gridButton"
							color="info"
							onClick={(event) =>
								navigate(`/admin/storePackageEdit/${parameters.id}`)
							}
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDeleteRedux
							title="اجرا"
							clickFunction={(event) => {
								dispatch(deleteStorePackage(parameters.id));
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
					onClick={(event) => navigate(`/admin/storePackageAdd`)}
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

export default StorePackageTable;
