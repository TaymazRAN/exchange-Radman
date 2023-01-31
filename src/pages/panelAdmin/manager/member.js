import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../../services/config.json";
const url = `${configData.AddressApi}/Member`;

export const fetchManagerByUsername = createAsyncThunk(
  "user/fetchManagerByUsername",
  async (user) => {
    return axios
      .get(`${url}/username?username=${user}`)
      .then((response) => response.data);
  }
);

export const fetchAllMember = createAsyncThunk(
  "manager/fetchAllMember",
  async () => {
    return await axios
      .get(`${url}/GetAllMember`)
      .then((response) => response.data);
  }
);

export const fetchOrganizationManagers = createAsyncThunk(
  "user/fetchOrganizationManagers",
  async (organid) => {
    return axios
      .get(`${url}/organization/${organid}`)
      .then((response) => response.data);
  }
);

export const updateManager = createAsyncThunk(
  "manager/updateManager",
  async ({ user, data }) => {
    return axios.put(`${url}/${user}`, data).then((response) => response.data);
  }
);

export const suspendManager = createAsyncThunk(
  "manager/deleteManager",
  async (user) => {
    return axios.delete(`${url}/${user}`).then((response) => response.data);
  }
);

export const uploadManagerImage = createAsyncThunk(
  "manager/uploadManagerImage",
  async ({ user, data }) => {
    return axios
      .put(`${url}/${user}/image`, data)
      .then((response) => response.data);
  }
);

export const slice = createSlice({
  name: "manager",
  initialState: {
    loading: false,
    handleLoading: false,
    data: [],
    manager: {},
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
    // fetchManagerByUsername
    builder.addCase(fetchManagerByUsername.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchManagerByUsername.fulfilled, (state, action) => {
      state.loading = false;
      state.manager = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchManagerByUsername.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });
    // fetchManagerByUsername
    builder.addCase(fetchManagerByUsername.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchManagerByUsername.fulfilled, (state, action) => {
      state.loading = false;
      state.manager = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchManagerByUsername.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // fetchAllMember
    builder.addCase(fetchAllMember.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllMember.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchAllMember.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // updateManager
    builder.addCase(updateManager.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(updateManager.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(updateManager.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });

    // deleteManager
    builder.addCase(suspendManager.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(suspendManager.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(suspendManager.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });

    // uploadManagerImage
    builder.addCase(uploadManagerImage.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(uploadManagerImage.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "uploaded";
    });
    builder.addCase(uploadManagerImage.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
  },
});

export default slice.reducer;
export const managerActions = slice.actions;
