import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Employee`;

export const fetchEmployees = createAsyncThunk(
	"employee/fetchEmployees",
	async (organid) => {
		return axios
			.get(`${url}?OrganizationId=${organid}`)
			.then((response) => response.data);
	}
);

export const addEmployee = createAsyncThunk(
	"employee/addEmployee",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateEmployee = createAsyncThunk(
	"employee/updateEmployee",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteEmployee = createAsyncThunk(
	"employee/deleteEmployee",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "employee",
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
		// fetchEmployees
		builder.addCase(fetchEmployees.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchEmployees.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchEmployees.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addEmployee
		builder.addCase(addEmployee.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addEmployee.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addEmployee.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateEmployee
		builder.addCase(updateEmployee.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateEmployee.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateEmployee.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteEmployee
		builder.addCase(deleteEmployee.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteEmployee.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteEmployee.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const employeeActions = slice.actions;
