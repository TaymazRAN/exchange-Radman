import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Functions`;

export const fetchFunctions = createAsyncThunk(
	"function/fetchFunctions",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const addFunction = createAsyncThunk(
	"function/addFunction",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateFunction = createAsyncThunk(
	"function/updateFunction",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteFunction = createAsyncThunk(
	"function/deleteFunction",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "function",
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
		// fetchFunctions
		builder.addCase(fetchFunctions.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchFunctions.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchFunctions.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addFunction
		builder.addCase(addFunction.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addFunction.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addFunction.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateFunction
		builder.addCase(updateFunction.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateFunction.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateFunction.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteFunction
		builder.addCase(deleteFunction.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteFunction.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteFunction.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const functionActions = slice.actions;
