import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";

const url = `${configData.AddressApi}/Member`;

export const fetchManagerByID = createAsyncThunk(
  "manager/fetchManagerByID",
  async (id) => {
    return axios.get(`${url}?id=${id}`).then((response) => response.data);
  }
);

export const fetchAllMember = createAsyncThunk(
  "manager/fetchAllMember",
  async () => {
    return axios.get(`${url}/GetAllMember`).then((response) => response.data);
  }
);

export const fetchOrganizationManagers = createAsyncThunk(
  "user/fetchOrganizationManagers",
  async (organid) => {
    return await axios
      .get(`${url}/organization/${organid}`)
      .then((response) => response.data);
  }
);

export const updateManager = createAsyncThunk(
  "manager/updateManager",
  async (user, data) => {
    console.log("user--", user.user);
    console.log("data--", user.data);
    return await axios
      .post(`${url}/${"UpdateMember?id="}${user.user}`, user.data)
      .then((response) => response.data);
  }
);

export const addManager = createAsyncThunk(
  "manager/addManager",
  async (data) => {
    const register = await axios
      .post(`${url}/InsertMember`, data)
      .then((response) => response.data);

    return { register, data };
  }
);

export const suspendManager = createAsyncThunk(
  "manager/suspendManager",
  async (id) => {
    return await axios
      .post(`${url}/${"DeleteMember?id="}${id}`)
      .then((response) => response.data);
  }
);

export const uploadManagerImage = createAsyncThunk(
  "manager/uploadManagerImage",
  async ({ user, data }) => {
    return await axios
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
    // fetchManagerByID----------------------------------------------
    builder.addCase(fetchManagerByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchManagerByID.fulfilled, (state, action) => {
      state.loading = false;
      state.manager = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchManagerByID.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // fetchAllMember------------------------------------------------
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

    // updateManager ------------------------------------------------
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

    // deleteManager --------------------------------------------
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
    //addManager ---------------------------------------------------
    builder.addCase(addManager.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(addManager.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(addManager.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
    // uploadManagerImage ------------------------------------------
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
