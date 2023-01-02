import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}`;

export const fetchCredit = createAsyncThunk(
	"request/fetchCredit",
	async (organid) => {
		return axios
			.get(`${url}/Organization/${organid}`)
			.then((response) => response.data);
	}
);

export const fetchRequests = createAsyncThunk(
	"request/fetchRequests",
	async (organid) => {
		return axios
			.get(`${url}/Request?OrganizationId=${organid}`)
			.then((response) => response.data);
	}
);

export const fetchRequestData = createAsyncThunk(
	"request/fetchRequestData",
	async ({ organid, departmentid }) => {
		const storePackages = await axios
			.get(`${url}/StorePackage`)
			.then((response) => response.data);
		const employees = await axios
			.get(`${url}/Employee?OrganizationId=${organid}`)
			.then((response) => response.data);
		const department = await axios
			.get(`${url}/Departments/${departmentid}`)
			.then((response) => response.data);
		const departments = await axios
			.get(`${url}/Departments/children/${departmentid}?all=true`)
			.then((response) => response.data);
		// const employees = [`${organization.rootDepartmentId}`];
		return { storePackages, employees, department, departments };
	}
);

export const addRequest = createAsyncThunk(
	"request/addRequest",
	async (data) => {
		return axios.post(`${url}/Request`, data).then((response) => response.data);
	}
);

export const acceptRequest = createAsyncThunk(
	"request/acceptRequest",
	async (id) => {
		return axios
			.post(`${url}/Request/accept/${id}`)
			.then((response) => response.data);
	}
);

export const denyRequest = createAsyncThunk(
	"request/denyRequest",
	async (id) => {
		return axios
			.post(`${url}/Request/deny/${id}`)
			.then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "request",
	initialState: {
		loading: false,
		handleLoading: false,
		credit: 0,
		requests: [],
		storePackages: [],
		employees: [],
		departments: [],
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
		// fetchRequestData
		builder.addCase(fetchRequestData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchRequestData.fulfilled, (state, action) => {
			state.loading = false;
			state.storePackages = action.payload.storePackages;
			state.employees = action.payload.employees;
			state.departments = action.payload.departments;
			state.departments.push(action.payload.department);
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchRequestData.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// fetchRequests
		builder.addCase(fetchRequests.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchRequests.fulfilled, (state, action) => {
			state.loading = false;
			state.requests = action.payload;
			state.error = "";
		});
		builder.addCase(fetchRequests.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		// fetchCredit
		builder.addCase(fetchCredit.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchCredit.fulfilled, (state, action) => {
			state.loading = false;
			state.credit = action.payload.credit;
			state.error = "";
		});
		builder.addCase(fetchCredit.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		// addRequest
		builder.addCase(addRequest.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addRequest.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addRequest.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// acceptRequest
		builder.addCase(acceptRequest.pending, (state, action) => {
			state.handleLoading = true;
			state.handleError = "";
		});
		builder.addCase(acceptRequest.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(acceptRequest.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// denyRequest
		builder.addCase(denyRequest.pending, (state, action) => {
			state.handleLoading = true;
			state.handleError = "";
		});
		builder.addCase(denyRequest.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(denyRequest.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const requestActions = slice.actions;
