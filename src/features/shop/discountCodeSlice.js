import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/DiscountCodes`;

export const fetchDiscountCodes = createAsyncThunk(
	"discountCode/fetchDiscountCodes",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const addDiscountCode = createAsyncThunk(
	"discountCode/addDiscountCode",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const deleteDiscountCode = createAsyncThunk(
	"discountCode/deleteDiscountCode",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "discountCode",
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
		// fetchDiscountCodes
		builder.addCase(fetchDiscountCodes.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchDiscountCodes.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchDiscountCodes.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addDiscountCode
		builder.addCase(addDiscountCode.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addDiscountCode.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addDiscountCode.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteDiscountCodeDiscountCode
		builder.addCase(deleteDiscountCode.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteDiscountCode.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteDiscountCode.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const discountCodeActions = slice.actions;
