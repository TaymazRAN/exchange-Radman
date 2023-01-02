import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";
const url = `${configData.AddressApi}`;

export const fetchExamData = createAsyncThunk(
	"runExam/fetchExamData",
	async (username) => {
		const packages = await axios
			.get(`${url}/Package?OwnerUsername=${username}&IsLaunched=false`)
			.then((response) => response.data);
		const storePackages = await axios
			.get(`${url}/StorePackage`)
			.then((response) => response.data);
		return { packages, storePackages };
	}
);

export const generateLink = createAsyncThunk(
	"runExam/generateLink",
	async (packageId) => {
		const packageUrl = await axios
			.get(`${url}/Package/start/${packageId}`)
			.then((response) => response.data);
		return { packageId, packageUrl };
	}
);

export const slice = createSlice({
	name: "runExam",
	initialState: {
		loading: false,
		handleLoading: false,
		url: "",
		selectedPackage: "",
		packages: [],
		storePackages: [],
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
		// fetchExamData
		builder.addCase(fetchExamData.pending, (state, action) => {
			state.loading = true;
		});
		builder.addCase(fetchExamData.fulfilled, (state, action) => {
			state.loading = false;
			state.packages = action.payload.packages;
			state.storePackages = action.payload.storePackages;
			state.ready = true;
			state.error = "";
		});
		builder.addCase(fetchExamData.rejected, (state, action) => {
			state.loading = false;
			state.ready = false;
			state.error = action.error.message;
		});

		// generateLink
		builder.addCase(generateLink.pending, (state, action) => {
			state.handleLoading = true;
		});
		builder.addCase(generateLink.fulfilled, (state, action) => {
			state.handleLoading = false;
			state.url = action.payload.packageUrl;
			state.selectedPackage = action.payload.packageId;
			state.handleError = "success";
		});
		builder.addCase(generateLink.rejected, (state, action) => {
			state.handleLoading = false;
			state.handleError = action.error.message;
		});
	},
});

export default slice.reducer;
export const runExamActions = slice.actions;
