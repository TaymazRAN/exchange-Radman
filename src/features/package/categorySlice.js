import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/StorePackage/category`;

export const fetchCategorys = createAsyncThunk(
	"category/fetchCategorys",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const addCategory = createAsyncThunk(
	"category/addCategory",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateCategory = createAsyncThunk(
	"category/updateCategory",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteCategory = createAsyncThunk(
	"category/deleteCategory",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const uploadIconCategory = createAsyncThunk(
	"category/uploadIconCategory",
	async ({ id, data }) => {
		return axios
			.put(`${url}/${id}/icon`, data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => response.data);
	}
);

export const uploadBackgroundCategory = createAsyncThunk(
	"category/uploadBackgroundCategory",
	async ({ id, data }) => {
		return axios
			.put(`${url}/${id}/background`, data, {
				headers: {
					"Content-Type": "multipart/form-data",
				},
			})
			.then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "category",
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
		// fetchCategorys
		builder.addCase(fetchCategorys.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchCategorys.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchCategorys.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addCategory
		builder.addCase(addCategory.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addCategory.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addCategory.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateCategory
		builder.addCase(updateCategory.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateCategory.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateCategory.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteCategory
		builder.addCase(deleteCategory.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteCategory.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteCategory.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// uploadIconCategory
		builder.addCase(uploadIconCategory.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(uploadIconCategory.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "uploaded";
		});
		builder.addCase(uploadIconCategory.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// uploadBackgroundCategory
		builder.addCase(uploadBackgroundCategory.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(uploadBackgroundCategory.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "uploaded";
		});
		builder.addCase(uploadBackgroundCategory.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const categoryActions = slice.actions;
