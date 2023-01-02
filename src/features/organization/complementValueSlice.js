import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Organization/complement-value`;

export const fetchComplementValues = createAsyncThunk(
	"complementValue/fetchComplementValues",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const addComplementValue = createAsyncThunk(
	"complementValue/addComplementValue",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateComplementValue = createAsyncThunk(
	"complementValue/updateComplementValue",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteComplementValue = createAsyncThunk(
	"complementValue/deleteComplementValue",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "complementValue",
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
		// fetchComplementValues
		builder.addCase(fetchComplementValues.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchComplementValues.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchComplementValues.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addComplementValue
		builder.addCase(addComplementValue.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addComplementValue.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addComplementValue.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateComplementValue
		builder.addCase(updateComplementValue.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateComplementValue.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateComplementValue.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteComplementValue
		builder.addCase(deleteComplementValue.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteComplementValue.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteComplementValue.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const complementValueActions = slice.actions;
