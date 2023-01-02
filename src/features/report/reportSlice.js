import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}`;

export const fetchUserReport = createAsyncThunk(
	"report/fetchUserReport",
	async (username) => {
		const packages = await axios
			.get(`${url}/Package?OwnerUsername=${username}`)
			.then((response) => response.data);
		const reports = await axios
			.get(`${url}/PackageReport?Username=${username}`)
			.then((response) => response.data);
		const storePackages = await axios
			.get(`${url}/StorePackage`)
			.then((response) => response.data);
		const functions = await axios
			.get(`${url}/Functions`)
			.then((response) => response.data);
		// const employees = [`${organization.rootDepartmentId}`];
		return { packages, reports, storePackages, functions };
	}
);

export const fetchManagerReports = createAsyncThunk(
	"report/fetchManagerReports",
	async (organid) => {
		const packages = await axios
			.get(`${url}/Package?OrganizationId=${organid}`)
			.then((response) => response.data);
		const reports = await axios
			.get(`${url}/PackageReport?OrganizationId=${organid}`)
			.then((response) => response.data);
		const storePackages = await axios
			.get(`${url}/StorePackage`)
			.then((response) => response.data);
		const functions = await axios
			.get(`${url}/Functions`)
			.then((response) => response.data);
		// const employees = [`${organization.rootDepartmentId}`];
		return { packages, reports, storePackages, functions };
	}
);

export const fetchAllReports = createAsyncThunk(
	"report/fetchAllReports",
	async () => {
		const packages = await axios
			.get(`${url}/Package`)
			.then((response) => response.data);
		const reports = await axios
			.get(`${url}/PackageReport`)
			.then((response) => response.data);
		const storePackages = await axios
			.get(`${url}/StorePackage`)
			.then((response) => response.data);
		const functions = await axios
			.get(`${url}/Functions`)
			.then((response) => response.data);
		// const employees = [`${organization.rootDepartmentId}`];
		return { packages, reports, storePackages, functions };
	}
);

export const addReport = createAsyncThunk("report/addReport", async (data) => {
	return axios
		.post(`${url}/PackageReport`, data)
		.then((response) => response.data);
});

export const slice = createSlice({
	name: "report",
	initialState: {
		loading: false,
		handleLoading: false,
		packages: [],
		reports: [],
		storePackages: [],
		functions: [],
		ready: false,
		error: "",
		handleError: "",
	},
	reducers: {
		clearHandleError: (state, action) => {
			state.handleError = "";
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchUserReport.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchUserReport.fulfilled, (state, action) => {
			state.loading = false;
			// console.log(action.payload.departments);
			state.packages = action.payload.packages;
			state.reports = action.payload.reports;
			state.storePackages = action.payload.storePackages;
			state.functions = action.payload.functions;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchUserReport.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		builder.addCase(fetchManagerReports.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchManagerReports.fulfilled, (state, action) => {
			state.loading = false;
			// console.log(action.payload.packages);
			state.packages = action.payload.packages;
			state.reports = action.payload.reports;
			state.storePackages = action.payload.storePackages;
			state.functions = action.payload.functions;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchManagerReports.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		builder.addCase(fetchAllReports.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchAllReports.fulfilled, (state, action) => {
			state.loading = false;
			// console.log(action.payload.packages);
			state.packages = action.payload.packages;
			state.reports = action.payload.reports;
			state.storePackages = action.payload.storePackages;
			state.functions = action.payload.functions;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchAllReports.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addReport
		builder.addCase(addReport.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addReport.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addReport.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const reportActions = slice.actions;
