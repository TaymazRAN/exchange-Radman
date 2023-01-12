import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../../components/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import {
	categoryActions,
	deleteCategory,
	fetchCategorys,
} from "../../../../features/package/categorySlice";

const CategoryTable = () => {
	const data = useSelector((state) => state.category.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.category.handleLoading);
	const error = useSelector((state) => state.category.error);
	const handleError = useSelector((state) => state.category.handleError);
	const ready = useSelector((state) => state.category.ready);

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
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/category`);
				dispatch(categoryActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(categoryActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "name",
			headerName: "نام دسته بندی",
			flex: 1,
		},
		{
			field: "description",
			headerName: "توضیحات",
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
							onClick={(event) =>
								navigate(`/admin/categoryEdit/${parameters.id}`)
							}
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDeleteRedux
							title="دسته بندی"
							clickFunction={(event) => {
								dispatch(deleteCategory(parameters.id));
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
					onClick={(event) => navigate("/admin/categoryAdd")}
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

export default CategoryTable;
