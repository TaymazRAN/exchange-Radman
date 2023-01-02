import "./structureOrganization.css";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Structure } from "./Structure";
import LoadingRedux from "../../component/loadingRedux/LoadingRedux";
import {
	fetchFilteredEmployee,
	fetchStructureData,
} from "../../features/structure/structureSlice";
import { Button, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import LoadingSmall from "../../component/loadingSmall/LoadingSmall";
import TextField from "@mui/material/TextField";
import axios from "axios";
// import FormHelperText from "@mui/material/FormHelperText";
// import LoadingButton from "@mui/lab/LoadingButton";

export default function StructureOrganization() {
	const token = JSON.parse(localStorage.getItem("token"));

	if (token) {
		axios.interceptors.request.use(function (config) {
			config.headers.Authorization = `Bearer ${token.token}`;

			return config;
		});
	}

	const dispatch = useDispatch();
	const [data, setData] = useState(null);
	const [filters, setFilters] = useState({
		Gender: "",
		MinGrade: "",
		MaxGrade: "",
	});
	// eslint-disable-next-line no-unused-vars
	let addNodeChildFunc = null;

	const organization = useSelector((state) => state.structure.organization);
	const rootDepartment = useSelector((state) => state.structure.rootDepartment);
	const departments = useSelector((state) => state.structure.departments);
	const employees = useSelector((state) => state.structure.employees);
	const loading = useSelector((state) => state.structure.loading);
	const error = useSelector((state) => state.structure.error);
	const ready = useSelector((state) => state.structure.ready);

	const addData = (
		data,
		id,
		parentid = "",
		name,
		role,
		color,
		employeeCount = 0,
		isEmployee = false
	) => {
		data.push({
			name: name,
			imageUrl: "",
			area: role,
			colorCode: color,
			profileUrl: "",
			office: name,
			positionName: role,
			id: id,
			parentId: parentid,
			employeeCount,
			isEmployee,
		});
		return data;
	};

	const setStructureData = async () => {
		let dataTemp = [];
		const dataColor = [
			"#777777",
			"#e0816d",
			"#e5926b",
			"#e9a268",
			"#e6ad61",
			"#f3c563",
			"#e2c965",
			"#c4c56d",
			"#a4c073",
			"#84bb7b",
			"#63b682",
		];

		// set organization
		dataTemp = addData(
			dataTemp,
			organization?.rootDepartmentId,
			"",
			organization?.name,
			"Organization",
			"#555555",
			rootDepartment?.membersNumber
		);

		departments.map((item, i) => {
			dataTemp = addData(
				dataTemp,
				item?.id,
				item?.parentId,
				item?.name,
				"Department",
				"#3AB6E3",
				item?.membersNumber
			);

			let employeeTemp = employees?.filter(
				(itemEmp) => itemEmp.departmentId === item?.id
			);

			employeeTemp.map((itemEmployee, i) => {
				let colorTemp = dataColor[0];
				if (itemEmployee.grade) {
					colorTemp = dataColor[Math.round(itemEmployee.grade)];
				} 
					dataTemp = addData(
						dataTemp,
						itemEmployee?.id,
						item?.id,
						itemEmployee?.name,
						"Employee",
						colorTemp,
						0,
						true
					);
				return dataTemp;
			});

			return dataTemp;
		});

		setData(dataTemp);
	};

	const organid = JSON.parse(localStorage.getItem("organid"));
	const departmentid = JSON.parse(localStorage.getItem("departmentid"));

	useEffect(() => {
		dispatch(fetchStructureData(organid));

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (ready) setStructureData();

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready]);

	const handleFilters = () => {
		let query = "&";
		for (var key of Object.keys(filters)) {
			if (filters[key] !== "") query += key + "=" + filters[key] + "&";
		}
		query = query.slice(0, -1);
		dispatch(fetchFilteredEmployee({ organid, departmentid, query }));
	};

	return (
		<div className="orgChart">
			{loading || error !== "" || !ready ? (
				<LoadingRedux error={error} />
			) : (
				<>
					<div className="structureChart">
						<Structure
							setClick={(click) => (addNodeChildFunc = click)}
							data={data}
						/>
						<div className="zoomBox">
							<IconButton
								className="zoomButton"
								size="medium"
								color="success"
								disabled
							>
								<AddIcon />
							</IconButton>
							<IconButton
								className="zoomButton"
								size="medium"
								color="error"
								disabled
							>
								<RemoveIcon />
							</IconButton>
						</div>
					</div>
				</>
			)}
			<div className="filterBox">
				<div className="filterTitle">
					<span>فیلتر ها</span>
					<Button variant="outlined" color="success" onClick={handleFilters}>
						اعمال فیلتر ها
						{loading ? <LoadingSmall /> : null}
					</Button>
					{/* <LoadingButton
						size="small"
						endIcon={<SendIcon />}
						loading={true}
						loadingPosition="end"
						variant="contained"
					>
						Send
					</LoadingButton> */}
				</div>
				<div className="filterContainer">
					<FormControl margin="dense" fullWidth className="profileInput">
						<InputLabel>جنسیت</InputLabel>
						<Select
							labelId="Gender"
							id="Gender"
							variant="outlined"
							fullWidth
							label="جنسیت"
							value={filters.Gender}
							onChange={(e) =>
								setFilters({ ...filters, Gender: e.target.value })
							}
						>
							<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
								<em>انتخاب کنید</em>
							</MenuItem>
							<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
								مرد
							</MenuItem>
							<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
								زن
							</MenuItem>
						</Select>
					</FormControl>
				</div>
				<div className="filterContainer">
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="name"
						label="حداقل نمره"
						type="number"
						fullWidth
						variant="outlined"
						className="profileInput"
						value={filters.MinGrade}
						onChange={(e) =>
							setFilters({ ...filters, MinGrade: e.target.value })
						}
					/>
					<TextField
						autoFocus
						dir="rtl"
						margin="dense"
						id="name"
						label="حداکثر نمره"
						type="number"
						fullWidth
						variant="outlined"
						className="profileInput"
						value={filters.MaxGrade}
						onChange={(e) =>
							setFilters({ ...filters, MaxGrade: e.target.value })
						}
					/>
				</div>
				<div className="filterContainer"></div>
				<div className="filterContainer"></div>
			</div>
		</div>
	);
}
