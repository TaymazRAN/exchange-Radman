import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}/User`;

export const fetchUserByUsername = createAsyncThunk(
	"user/fetchUserByUsername",
	async (user) => {
		return axios.get(`${url}/${user}`).then((response) => response.data);
	}
);

export const fetchUsers = createAsyncThunk("user/fetchUsers", async () => {
	return axios.get(`${url}`).then((response) => response.data);
});

export const updateUser = createAsyncThunk(
	"user/updateUser",
	async ({ user, data }) => {
		return axios.put(`${url}/${user}`, data).then((response) => response.data);
	}
);

export const suspendUser = createAsyncThunk("user/deleteUser", async (user) => {
	return axios.delete(`${url}/${user}`).then((response) => response.data);
});

export const uploadUserImage = createAsyncThunk(
	"user/uploadUserImage",
	async ({ user, data }) => {
		return axios
			.put(`${url}/${user}/image`, data)
			.then((response) => response.data);
	}
);

export const slice = createSlice({
	name: "user",
	initialState: {
		loading: false,
		handleLoading: false,
		data: [],
		user: {},
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
		// fetchUserByUsername
		builder.addCase(fetchUserByUsername.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchUserByUsername.fulfilled, (state, action) => {
			state.loading = false;
			state.user = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchUserByUsername.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// fetchUsers
		builder.addCase(fetchUsers.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.loading = false;
			state.data = action.payload;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchUsers.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// updateUser
		builder.addCase(updateUser.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(updateUser.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(updateUser.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// deleteUser
		builder.addCase(suspendUser.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(suspendUser.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "success";
		});
		builder.addCase(suspendUser.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});

		// uploadUserImage
		builder.addCase(uploadUserImage.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(uploadUserImage.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.handleError = "uploaded";
		});
		builder.addCase(uploadUserImage.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const userActions = slice.actions;
