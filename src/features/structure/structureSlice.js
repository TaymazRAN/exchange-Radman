import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}`;

export const fetchStructureData = createAsyncThunk(
	"structure/fetchStructureData",
	async (organid) => {
		const organization = await axios
			.get(`${url}/Organization/${organid}`)
			.then((response) => response.data);
		const rootDepartment = await axios
			.get(`${url}/Departments/${organization.rootDepartmentId}`)
			.then((response) => response.data);
		const departments = await axios
			.get(
				`${url}/Departments/children/${organization.rootDepartmentId}?all=true`
			)
			.then((response) => response.data);
		const employees = await axios
			.get(`${url}/Employee?OrganizationId=${organid}`)
			.then((response) => response.data);
		// const employees = [`${organization.rootDepartmentId}`];
		return { organization, rootDepartment, departments, employees };
	}
);

export const fetchFilteredEmployee = createAsyncThunk(
	"structure/fetchFilteredEmployee",
	async ({ organid, departmentid, query }) => {
		console.log(
			`${url}/OrganizationPackage/report?OrganizationId=${organid}&DepartmentId=${departmentid}${query}`
		);
		return axios
			.get(
				`${url}/OrganizationPackage/report?OrganizationId=${organid}&DepartmentId=${departmentid}${query}`
			)
			.then((response) => response.data);;
	}
);

export const slice = createSlice({
	name: "structure",
	initialState: {
		loading: false,
		organization: {},
		rootDepartment: {},
		departments: [],
		employees: [],
		ready: false,
		error: "",
	},
	extraReducers: (builder) => {
		builder.addCase(fetchStructureData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchStructureData.fulfilled, (state, action) => {
			state.loading = false;
			// console.log(action.payload.departments);
			state.organization = action.payload.organization;
			state.rootDepartment = action.payload.rootDepartment;
			state.departments = action.payload.departments;
			state.employees = action.payload.employees;
			console.log(action.payload.employees);
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchStructureData.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});
		builder.addCase(fetchFilteredEmployee.pending, (state, action) => {
			state.loading = true;
			state.ready = false;
		});
		builder.addCase(fetchFilteredEmployee.fulfilled, (state, action) => {
			state.loading = false;
			state.employees = action.payload;
			state.ready = true;
			console.log(action.payload);
			state.error = "";
		});
		builder.addCase(fetchFilteredEmployee.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});
	},
});

export default slice.reducer;
export const structureActions = slice.actions;
