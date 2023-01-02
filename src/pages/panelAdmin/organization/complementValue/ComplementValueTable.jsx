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
	complementValueActions,
	deleteComplementValue,
} from "../../../../features/organization/complementValueSlice";

const ComplementValueTable = () => {
	const data = useSelector((state) => state.complementValue.data);
	const dataComplementType = useSelector((state) => state.complementType.data);
	const dataOrganization = useSelector((state) => state.organization.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector(
		(state) => state.complementValue.handleLoading
	);
	const error = useSelector((state) => state.complementValue.error);
	const handleError = useSelector((state) => state.complementValue.handleError);
	const ready = useSelector((state) => state.complementValue.ready);

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
				dispatch(complementValueActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(complementValueActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		// {
		//   field: "organizationId",
		//   headerName: "نام سازمان",
		//   flex: 1,
		// },

		{
			field: "organizationId",
			headerName: "نام سازمان",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataOrganization.find(
								(item) => item.id === parameters.row.organizationId
							).name
						}
					</div>
				);
			},
		},
		{
			field: "organizationComplementryInfoFieldId",
			headerName: "نام فیلد تکمیلی",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataComplementType.find(
								(item) =>
									item.id === parameters.row.organizationComplementryInfoFieldId
							).name
						}
					</div>
				);
			},
		},
		{
			field: "content",
			headerName: "ورودی تکمیلی",
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
								navigate(`/admin/complementValueEdit/${parameters.id}`)
							}
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDeleteRedux
							title="ورودی تکمیلی"
							clickFunction={(event) => {
								dispatch(deleteComplementValue(parameters.id));
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
					onClick={(event) => navigate(`/admin/complementValueAdd`)}
				>
					ورودی تکمیلی <AddIcon className="topButtonIcon" />
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

export default ComplementValueTable;
