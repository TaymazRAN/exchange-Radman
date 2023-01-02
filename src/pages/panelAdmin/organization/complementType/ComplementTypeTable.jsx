import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import React, { useState, useEffect } from "react";
import AlertDeleteRedux from "../../../../component/alertDelete/AlertDeleteRedux";
import SnackAlert from "../../../../component/snackAlert/SnackAlert";
import LoadingRedux from "../../../../component/loadingRedux/LoadingRedux";
import {
	complementTypeActions,
	deleteComplementType,
} from "../../../../features/organization/complementTypeSlice";

const ComplementTypeTable = () => {
	const data = useSelector((state) => state.complementType.data);
	const dataType = useSelector((state) => state.type.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector(
		(state) => state.complementType.handleLoading
	);
	const error = useSelector((state) => state.complementType.error);
	const handleError = useSelector((state) => state.complementType.handleError);
	const ready = useSelector((state) => state.complementType.ready);

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
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/baseOrganization`);
				dispatch(complementTypeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(complementTypeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "name",
			headerName: "نام فیلد تکمیلی",
			flex: 1,
		},
		{
			field: "organizationTypeId",
			headerName: "نوع سازمان",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataType.find(
								(item) => item.id === parameters.row.organizationCategoryId
							)?.title
						}
					</div>
				);
			},
		},
		{
			field: "isRequired",
			headerName: "فیلد اجباری",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.isRequired && "بله"}
						{!parameters.row.isRequired && "خیر"}
					</div>
				);
			},
		},
		{
			field: "type",
			headerName: "نوع فیلد",
			flex: 1,
		},
		{
			field: "action",
			headerName: "امکانات",
			flex: 1,
			minWidth: 200,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						<Button
							className="gridButton"
							onClick={(event) =>
								navigate(`/admin/complementTypeEdit/${parameters.id}`)
							}
							color="info"
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDeleteRedux
							title="فیلد تکمیلی"
							clickFunction={(event) => {
								dispatch(deleteComplementType(parameters.id));
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
					onClick={(event) => navigate(`/admin/complementTypeAdd`)}
				>
					فیلد تکمیلی <AddIcon className="topButtonIcon" />
				</Button>
			</div>

			<div style={{ height: 320, width: "100%" }}>
				<>
					{error !== "" || !ready ? (
						<LoadingRedux error={error} />
					) : (
						<DataGrid
							rows={data}
							columns={columns}
							pageSize={4}
							rowsPerPageOptions={[4]}
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

export default ComplementTypeTable;
