import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/Organization`;

export const addCredit = createAsyncThunk(
	"organization/addCredit",
	async (data) => {
		return axios.post(`${url}/credit`, data).then((response) => response.data);
	}
);

export const fetchOrganizations = createAsyncThunk(
	"organization/fetchOrganizations",
	async () => {
		return axios.get(`${url}`).then((response) => response.data);
	}
);

export const fetchOrganizationByID = createAsyncThunk(
	"organization/fetchOrganizationByID",
	async (organid) => {
		return axios.get(`${url}/${organid}`).then((response) => response.data);
	}
);

export const addOrganization = createAsyncThunk(
	"organization/addOrganization",
	async (data) => {
		return axios.post(`${url}`, data).then((response) => response.data);
	}
);

export const updateOrganization = createAsyncThunk(
	"organization/updateOrganization",
	async ({ id, data }) => {
		return axios.put(`${url}/${id}`, data).then((response) => response.data);
	}
);

export const deleteOrganization = createAsyncThunk(
	"organization/deleteOrganization",
	async (id) => {
		return axios.delete(`${url}/${id}`).then((response) => response.data);
	}
);

export const uploadOrganizationImage = createAsyncThunk(
	"manager/uploadOrganizationImage",
	async ({ id, data }) => {
		return axios
			.put(`${url}/${id}/image`, data)
			.then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "organization",
	initialState: {
		loading: false,
		handleLoading: false,
		data: [],
		organization: {},
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
		// fetchOrganizations
		builder.addCase(fetchOrganizations.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchOrganizations.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchOrganizations.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// fetchOrganizationByID
		builder.addCase(fetchOrganizationByID.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchOrganizationByID.fulfilled, (state, action) => {
			state.loading = false;
			state.organization = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchOrganizationByID.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// addCredit
		builder.addCase(addCredit.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addCredit.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addCredit.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// addOrganization
		builder.addCase(addOrganization.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(addOrganization.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(addOrganization.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// updateOrganization
		builder.addCase(updateOrganization.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateOrganization.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateOrganization.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteOrganization
		builder.addCase(deleteOrganization.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(deleteOrganization.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(deleteOrganization.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// uploadOrganizationImage
		builder.addCase(uploadOrganizationImage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(uploadOrganizationImage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "uploaded";
		});
		builder.addCase(uploadOrganizationImage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const organizationActions = slice.actions;
