import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Organization/complement-type`;

export const fetchComplementTypes = createAsyncThunk(
	"complementType/fetchComplementTypes",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const addComplementType = createAsyncThunk(
	"complementType/addComplementType",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateComplementType = createAsyncThunk(
	"complementType/updateComplementType",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteComplementType = createAsyncThunk(
	"complementType/deleteComplementType",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "complementType",
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
		// fetchComplementTypes
		builder.addCase(fetchComplementTypes.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchComplementTypes.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchComplementTypes.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addComplementType
		builder.addCase(addComplementType.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addComplementType.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addComplementType.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateComplementType
		builder.addCase(updateComplementType.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateComplementType.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateComplementType.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteComplementType
		builder.addCase(deleteComplementType.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteComplementType.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteComplementType.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const complementTypeActions = slice.actions;
