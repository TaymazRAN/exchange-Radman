import { useSelector, useDispatch } from "react-redux";
import { selectAllPosts, deletePost } from "./accessSlice";
import { DataGrid, GridAddIcon } from "@mui/x-data-grid";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import react from "react";
import { fetchAccess } from "./accessSlice";
import {
	selectAllPosts as selectAllManagers,
	fetchManager,
} from "../manager/managerSlice";
import LoadingData from "../../../component/loadingData/LoadingData";
import AlertDelete from "../../../component/alertDelete/AlertDelete";

const AccessTable = () => {
	const data = useSelector((state) => selectAllPosts(state));
	const dataManager = useSelector((state) => selectAllManagers(state));
	const dataDepartment = useSelector((state) => state.department.data);
	const dispatch = useDispatch();
	const navigate = useNavigate();

	react.useEffect(() => {
		dispatch(fetchAccess());
		dispatch(fetchManager());
	}, []);
	// }, []);

	const typeDelete = (id) => {
		try {
			dispatch(deletePost({ id: id })).unwrap();
		} catch (err) {
			console.error("Failed to delete the post: ", err);
		}
	};

	const columns = [
		{
			field: "managerUsername",
			headerName: "نام کاربری مدیر",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataManager.find(
								(item) => item.username === parameters.row.managerUsername
							)?.username
						}
					</div>
				);
			},
		},
		{
			field: "managerAccess",
			headerName: "سطح دسترسی",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{parameters.row.managerAccess === "Read" && "خواندن"}
						{parameters.row.managerAccess === "Manage" && "مدیریت"}
					</div>
				);
			},
		},
		{
			field: "managerUsername",
			headerName: "دپارتمان",
			flex: 1,
			renderCell: (parameters) => {
				return (
					<div className="dataGridCell">
						{
							dataDepartment.find(
								(item) => item.id === parameters.row.departemantId
							)?.name
						}
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
							onClick={(event) => navigate(`/admin/typeEdit/${parameters.id}`)}
						>
							<EditOutlinedIcon className="gridIcon" />
							ویرایش
						</Button>
						<AlertDelete
							title="دسترسی"
							clickFunction={(event) => typeDelete(parameters.id)}
						/>
					</div>
				);
			},
		},
	];
	return (
		<div dir="tl" className="dataGrid">
			<div className="topButtonContainer">
				<Button
					className="topButton"
					variant="outlined"
					color="success"
					sx={{ padding: "14px 15px" }}
					onClick={(event) => navigate(`/organization/accessAdd`)}
				>
					اضافه کردن <GridAddIcon className="topButtonIcon" />
				</Button>
			</div>

			<div style={{ height: 500, width: "100%" }}>
				<>
					{data.length > 0 ? (
						<DataGrid
							rows={data}
							columns={columns}
							pageSize={7}
							rowsPerPageOptions={[7]}
							checkboxSelection
							disableSelectionOnClick
							sx={{ color: "#2C3333", fontSize: "13px" }}
						/>
					) : (
						<LoadingData />
					)}
				</>
			</div>
		</div>
	);
};

export default AccessTable;
