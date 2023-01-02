import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Departments`;

export const fetchDepartments = createAsyncThunk(
	"department/fetchDepartments",
	async (organid) => {
		return axios
			.get(`${url}?OrganizationDepartmentId=${organid}`)
			.then((response) => response.data);
	}
);

export const addDepartment = createAsyncThunk(
	"department/addDepartment",
	async (data) => {
		return axios
			.post(`${url}`, data)
			.then((response) => response.data);
	}
);

export const updateDepartment = createAsyncThunk(
	"department/updateDepartment",
	async ({ id, data }) => {
		return axios
			.put(`${url}/${id}`, data)
			.then((response) => response.data);
	}
);

export const deleteDepartment = createAsyncThunk(
	"department/deleteDepartment",
	async (id) => {
		return axios
			.delete(`${url}/${id}`)
			.then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "department",
	initialState: {
		loading: false,
		handleLoading: false,
		data: [],
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
		// fetchDepartments
		builder.addCase(fetchDepartments.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchDepartments.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchDepartments.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addDepartment
		builder.addCase(addDepartment.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addDepartment.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addDepartment.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateDepartment
		builder.addCase(updateDepartment.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateDepartment.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateDepartment.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteDepartment
		builder.addCase(deleteDepartment.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteDepartment.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteDepartment.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const departmentActions = slice.actions;
