import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Package`;

export const fetchPackages = createAsyncThunk("package/fetchPackages", async () => {
	return axios.get(`${url}`).then((response) => response.data);
});

export const addPackage = createAsyncThunk("package/addPackage", async (data) => {
	return axios.post(`${url}`, data).then((response) => response.data);
});

export const updatePackage = createAsyncThunk(
	"package/updatePackage",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deletePackage = createAsyncThunk("package/deletePackage", async (id) => {
	return axios.delete(`${url}/${id}`).then((response) => response.data);
});

export const slice = createSlice({
	name: "package",
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
		// fetchPackages
		builder.addCase(fetchPackages.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchPackages.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchPackages.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addPackage
		builder.addCase(addPackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addPackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addPackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updatePackage
		builder.addCase(updatePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updatePackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updatePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deletePackage
		builder.addCase(deletePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deletePackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deletePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const packageActions = slice.actions;
