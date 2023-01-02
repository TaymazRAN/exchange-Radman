import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}`;

export const fetchReferedList = createAsyncThunk(
	"referenceCode/fetchReferedList",
	async (code) => {
		return axios
			.get(`${url}/User/refrence/${code}`)
			.then((response) => response.data);
	}
);

export const fetchLastNodeDepartments = createAsyncThunk(
	"referenceCode/fetchLastNodeDepartments",
	async ({ organid }) => {
		return axios
			.get(`${url}/Departments?OrganizationDepartmentId=${organid}`)
			.then((response) => response.data);
	}
);

export const fetchEmployeeAccounts = createAsyncThunk(
	"referenceCode/fetchEmployeeAccounts",
	async (username) => {
		return axios
			.get(`${url}/Employee?Username=${username}`)
			.then((response) => response.data);
	}
);

export const sendReferRequest = createAsyncThunk(
	"referenceCode/sendReferRequest",
	async ({ username, code }) => {
		console.log(`${url}/User/refrence/request/${username},${code}`);
		return axios
			.post(`${url}/User/refrence/request/${username},${code}`)
			.then((response) => response.data);
	}
);

export const acceptReferRequest = createAsyncThunk(
	"referenceCode/acceptReferRequest",
	async ({ organid, username, departmentId }) => {
		return axios
			.post(`${url}/User/refrence/accept/${organid}`, [
				{ username, departmentId },
			])
			.then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "referenceCode",
	initialState: {
		loading: false,
		handleLoading: false,
		credit: 0,
		refered: [],
		employees: [],
		accounts: [],
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
		// fetchReferedList
		builder.addCase(fetchReferedList.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchReferedList.fulfilled, (state, action) => {
			state.loading = false;
			state.refered = action.payload.map((item, i) => {
				return { ...item, id: i };
			});
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchReferedList.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		// fetchLastNodeDepartments
		builder.addCase(fetchLastNodeDepartments.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchLastNodeDepartments.fulfilled, (state, action) => {
			state.loading = false;
			state.departments = action.payload.filter((item) => item.isLastNode);
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchLastNodeDepartments.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		// fetchEmployeeAccounts
		builder.addCase(fetchEmployeeAccounts.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchEmployeeAccounts.fulfilled, (state, action) => {
			state.loading = false;
			state.accounts = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchEmployeeAccounts.rejected, (state, action) => {
			state.loading = false;
			state.error = action.error.message;
		});

		// sendReferRequest
		builder.addCase(sendReferRequest.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(sendReferRequest.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(sendReferRequest.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// acceptReferRequest
		builder.addCase(acceptReferRequest.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(acceptReferRequest.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(acceptReferRequest.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const referenceCodeActions = slice.actions;
