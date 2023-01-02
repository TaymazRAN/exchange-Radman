import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Organization/types`;

export const fetchTypes = createAsyncThunk("type/fetchTypes", async () => {
	return axios.get(`${url}`).then((response) => response.data);
});

export const addType = createAsyncThunk("type/addType", async (data) => {
	return axios.post(`${url}`, data).then((response) => response.data);
});

export const updateType = createAsyncThunk(
	"type/updateType",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteType = createAsyncThunk("type/deleteType", async (id) => {
	return axios.delete(`${url}/${id}`).then((response) => response.data);
});

export const slice = createSlice({
	name: "type",
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
		// fetchTypes
		builder.addCase(fetchTypes.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchTypes.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchTypes.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addType
		builder.addCase(addType.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addType.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addType.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateType
		builder.addCase(updateType.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateType.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateType.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteType
		builder.addCase(deleteType.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteType.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteType.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const typeActions = slice.actions;
