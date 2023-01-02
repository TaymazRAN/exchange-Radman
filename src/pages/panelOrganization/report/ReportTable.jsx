import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
import React, { useEffect } from "react";
import { fetchManagerReports } from "../../../features/report/reportSlice";
import { returnPointInPercentTable } from "../../../services/calculatePoint";

const ReportTable = () => {
	const organid = JSON.parse(localStorage.getItem("organid"));

	const data = useSelector((state) => state.report.reports);
	const dataPackages = useSelector((state) => state.report.packages);
	const dataStorePackages = useSelector((state) => state.report.storePackages);
	// const loading = useSelector((state) => state.report.handleLoading);
	const error = useSelector((state) => state.report.error);
	const ready = useSelector((state) => state.report.ready);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(fetchManagerReports(organid));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// }, []);

	const columns = [
		{
			field: "username",
			headerName: "نام کاربری",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataPackages.find((item) => item.id === parameters.row.packageId)
								?.username
						}
					</div>
				);
			},
		},
		{
			field: "storePackage",
			headerName: "نام بسته",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataStorePackages?.find(
								(item) =>
									item.id ===
									dataPackages?.find(
										(itemPackage) => itemPackage.id === parameters.row.packageId
									)?.storePackageId
							)?.name
						}
					</div>
				);
			},
		},
		{
			field: "point",
			headerName: "نمره کل",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{returnPointInPercentTable(parameters.row.reportValues)}
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
							onClick={(event) =>
								navigate(`/organization/reportShow/${parameters.row.packageId}`)
							}
							color="success"
						>
							<VisibilityOutlinedIcon className="gridIcon" />
							نمایش
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

export default ReportTable;
