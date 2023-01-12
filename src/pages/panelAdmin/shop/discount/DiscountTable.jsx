import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import purifyPrice from "../../../../services/purifyPrice";
import {
	fetchDiscountCodes,
	deleteDiscountCode,
	discountCodeActions,
} from "../../../../features/shop/discountCodeSlice";
import purifyDate from "../../../../services/purifyDate";

const DiscountTable = () => {
	const data = useSelector((state) => state.discountCode.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector(
		(state) => state.discountCode.handleLoading
	);
	const error = useSelector((state) => state.discountCode.error);
	const handleError = useSelector((state) => state.discountCode.handleError);
	const ready = useSelector((state) => state.discountCode.ready);

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
		dispatch(fetchDiscountCodes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/discount`);
				dispatch(discountCodeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(discountCodeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "code",
			headerName: "کد تخفیف",
			flex: 1,
		},
		{
			field: "value",
			headerName: "مقدار",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isPercentage ? (
							<>
								<div className="percentageContainer">
									<div
										style={{ width: parameters.row.value + "%" }}
										className="percentageProgress"
									></div>
									<div className="percentageText">
										{parameters.row.value + " %"}
									</div>
								</div>
							</>
						) : (
							purifyPrice(parameters.row.value) + " تومان "
						)}
					</div>
				);
			},
		},
		{
			field: "isActive",
			headerName: "فعال",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isActive ? "بله" : "خیر"}
					</div>
				);
			},
		},
		{
			field: "startDate",
			headerName: "تاریخ شروع",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{purifyDate(parameters.row.startDate)}
					</div>
				);
			},
		},
		{
			field: "dueDate",
			headerName: "تاریخ انقضا",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{purifyDate(parameters.row.dueDate)}
					</div>
				);
			},
		},
		{
			field: "isReusable",
			headerName: "نوع استفاده",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isReusable ? "کلی" : "شخصی"}
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
						<AlertDeleteRedux
							title="کد تخفیف"
							clickFunction={(event) => {
								dispatch(deleteDiscountCode(parameters.id));
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
					onClick={(event) => navigate("/admin/discountAdd")}
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

export default DiscountTable;
