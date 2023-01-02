import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/StorePackage`;

export const fetchStorePackages = createAsyncThunk(
	"storePackage/fetchStorePackages",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const addStorePackage = createAsyncThunk(
	"storePackage/addStorePackage",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateStorePackage = createAsyncThunk(
	"storePackage/updateStorePackage",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteStorePackage = createAsyncThunk(
	"storePackage/deleteStorePackage",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const uploadIconStorePackage = createAsyncThunk(
	"storePackage/uploadIconStorePackage",
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

export const uploadBackgroundStorePackage = createAsyncThunk(
	"storePackage/uploadBackgroundStorePackage",
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
	name: "storePackage",
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
		// fetchStorePackages
		builder.addCase(fetchStorePackages.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchStorePackages.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchStorePackages.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addStorePackage
		builder.addCase(addStorePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addStorePackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addStorePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateStorePackage
		builder.addCase(updateStorePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateStorePackage.fulfilled, (state, action) => {
			state.handleLoading = false;

			state.handleError = "success";
		});
		builder.addCase(updateStorePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteStorePackage
		builder.addCase(deleteStorePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteStorePackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteStorePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// uploadIconStorePackage
		builder.addCase(uploadIconStorePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(uploadIconStorePackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "uploaded";
		});
		builder.addCase(uploadIconStorePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// uploadBackgroundStorePackage
		builder.addCase(uploadBackgroundStorePackage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(uploadBackgroundStorePackage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "uploaded";
		});
		builder.addCase(uploadBackgroundStorePackage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const storePackageActions = slice.actions;
