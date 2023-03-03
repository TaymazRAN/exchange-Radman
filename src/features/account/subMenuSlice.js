import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";

const url = `${configData.AddressApi}/SubMenu`;

export const fetchsubMenuByID = createAsyncThunk(
  "subMenu/fetchsubMenuByID",
  async (id) => {
    return axios.get(`${url}?id=${id}`).then((response) => response.data);
  }
);

export const fetchsubMenuByGroupType = createAsyncThunk(
  "subMenu/fetchsubMenuByGroupType",
  async (groupType) => {
    console.log("groupType", groupType);
    return await axios
      .get(`${url}/GetAllGropName?groupType=${groupType}`)
      .then((response) => response.data);
  }
);

export const fetchAllSubMenu = createAsyncThunk(
  "subMenu/fetchAllSubMenu",
  async () => {
    return axios.get(`${url}/GetAllSubMenu`).then((response) => response.data);
  }
);

export const fetchOrganizationsubMenus = createAsyncThunk(
  "user/fetchOrganizationsubMenus",
  async (organid) => {
    return await axios
      .get(`${url}/organization/${organid}`)
      .then((response) => response.data);
  }
);

export const updatesubMenu = createAsyncThunk(
  "subMenu/updatesubMenu",
  async (user, data) => {
    console.log("user--", user.user);
    console.log("data--", user.data);
    return await axios
      .post(`${url}/${"UpdateSubMenu?id="}${user.user}`, user.data)
      .then((response) => response.data);
  }
);

export const addsubMenu = createAsyncThunk(
  "subMenu/addsubMenu",
  async (data) => {
    const register = await axios
      .post(`${url}/InsertSubMenu`, data)
      .then((response) => response.data);

    return { register, data };
  }
);

export const suspendsubMenu = createAsyncThunk(
  "subMenu/suspendsubMenu",
  async (id) => {
    return await axios
      .post(`${url}/${"DeleteSubMenu?id="}${id}`)
      .then((response) => response.data);
  }
);

export const uploadsubMenuImage = createAsyncThunk(
  "subMenu/uploadsubMenuImage",
  async ({ user, data }) => {
    return await axios
      .put(`${url}/${user}/image`, data)
      .then((response) => response.data);
  }
);

export const slice = createSlice({
  name: "subMenu",
  initialState: {
    loading: false,
    handleLoading: false,
    data: [],
    subMenu: {},
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
    // fetchsubMenuByID----------------------------------------------
    builder.addCase(fetchsubMenuByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchsubMenuByID.fulfilled, (state, action) => {
      state.loading = false;
      state.subMenu = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchsubMenuByID.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // fetchsubMenuByGroupType----------------------------------------------
    builder.addCase(fetchsubMenuByGroupType.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchsubMenuByGroupType.fulfilled, (state, action) => {
      state.loading = false;
      state.subMenu = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchsubMenuByGroupType.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // fetchAllSubMenu------------------------------------------------
    builder.addCase(fetchAllSubMenu.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllSubMenu.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchAllSubMenu.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // updatesubMenu ------------------------------------------------
    builder.addCase(updatesubMenu.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(updatesubMenu.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(updatesubMenu.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });

    // deletesubMenu --------------------------------------------
    builder.addCase(suspendsubMenu.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(suspendsubMenu.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(suspendsubMenu.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
    //addsubMenu ---------------------------------------------------
    builder.addCase(addsubMenu.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(addsubMenu.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(addsubMenu.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
    // uploadsubMenuImage ------------------------------------------
    builder.addCase(uploadsubMenuImage.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(uploadsubMenuImage.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "uploaded";
    });
    builder.addCase(uploadsubMenuImage.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
  },
});

export default slice.reducer;
export const subMenuActions = slice.actions;
