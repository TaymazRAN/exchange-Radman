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
import { deleteType, typeActions } from "../../../../features/organization/typeSlice";

const TypeTable = () => {
	const data = useSelector((state) => state.type.data);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.type.handleLoading);
	const error = useSelector((state) => state.type.error);
	const handleError = useSelector((state) => state.type.handleError);
	const ready = useSelector((state) => state.type.ready);

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
				navigate(`/admin/type`);
				dispatch(typeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(typeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const columns = [
		{
			field: "title",
			headerName: "نام  ",
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
							onClick={(event) => navigate(`/admin/typeEdit/${parameters.id}`)}
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDeleteRedux
							title="نوع سازمان"
							clickFunction={(event) => {
								dispatch(deleteType(parameters.id));
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
					onClick={(event) => navigate(`/admin/typeAdd`)}
				>
					نوع سازمان <AddIcon className="topButtonIcon" />
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

export default TypeTable;
