import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
// import AlertDeny from "../../../component/alertDeny/AlertDeny";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
import React, { useEffect } from "react";
import { fetchReferedList } from "../../../features/referenceCode/referenceCodeSlice";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const ApplicantTable = () => {
	const code = JSON.parse(localStorage.getItem("code"));

	const data = useSelector((state) => state.referenceCode.refered);
	// const loading = useSelector((state) => state.referenceCode.loading);
	const error = useSelector((state) => state.referenceCode.error);
	const ready = useSelector((state) => state.referenceCode.ready);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchReferedList(code));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// }, []);

	const columns = [
		{
			field: "username",
			headerName: "نام کاربری",
			flex: 1,
		},
		{
			field: "name",
			headerName: "نام",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.firstName + " " + parameters.row.lastName}
					</div>
				);
			},
		},
		{
			field: "email",
			headerName: "ایمیل",
			flex: 1,
		},
		{
			field: "contactNum",
			headerName: "شماره تماس",
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
							color="success"
							onClick={(event) =>
								navigate(
									`/organization/applicantAdd/${parameters.row.username}`
								)
							}
						>
							<AddIcon className="gridIcon" />
							اضافه کردن به کارمندان
						</Button>
					</div>
				);
			},
		},
	];

	return (
		<div dir="tl" className="dataGrid">
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

export default ApplicantTable;
