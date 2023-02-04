import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import configData from "../../services/config.json";

const url = `${configData.AddressApi}/Question`;

export const fetchquestionByID = createAsyncThunk(
  "question/fetchquestionByID",
  async (id) => {
    return axios.get(`${url}?id=${id}`).then((response) => response.data);
  }
);

export const fetchAllQuestion = createAsyncThunk(
  "question/fetchAllQuestion",
  async () => {
    return axios.get(`${url}/GetAllQuestion`).then((response) => response.data);
  }
);

export const fetchOrganizationquestions = createAsyncThunk(
  "user/fetchOrganizationquestions",
  async (organid) => {
    return await axios
      .get(`${url}/organization/${organid}`)
      .then((response) => response.data);
  }
);

export const updatequestion = createAsyncThunk(
  "question/updatequestion",
  async (user, data) => {
    console.log("user--", user.user);
    console.log("data--", user.data);
    return await axios
      .post(`${url}/${"UpdateQuestion?id="}${user.user}`, user.data)
      .then((response) => response.data);
  }
);

export const addquestion = createAsyncThunk(
  "question/addquestion",
  async (data) => {
    const register = await axios
      .post(`${url}/InsertQuestion`, data)
      .then((response) => response.data);

    return { register, data };
  }
);

export const suspendquestion = createAsyncThunk(
  "question/suspendquestion",
  async (id) => {
    return await axios
      .post(`${url}/${"DeleteQuestion?id="}${id}`)
      .then((response) => response.data);
  }
);

export const uploadquestionImage = createAsyncThunk(
  "question/uploadquestionImage",
  async ({ user, data }) => {
    return await axios
      .put(`${url}/${user}/image`, data)
      .then((response) => response.data);
  }
);

export const slice = createSlice({
  name: "question",
  initialState: {
    loading: false,
    handleLoading: false,
    data: [],
    question: {},
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
    // fetchquestionByID----------------------------------------------
    builder.addCase(fetchquestionByID.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchquestionByID.fulfilled, (state, action) => {
      state.loading = false;
      state.question = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchquestionByID.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // fetchAllQuestion------------------------------------------------
    builder.addCase(fetchAllQuestion.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchAllQuestion.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.ready = true;
      state.error = "";
    });
    builder.addCase(fetchAllQuestion.rejected, (state, action) => {
      state.loading = false;
      state.ready = false;
      state.error = action.error.message;
    });

    // updatequestion ------------------------------------------------
    builder.addCase(updatequestion.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(updatequestion.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(updatequestion.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });

    // deletequestion --------------------------------------------
    builder.addCase(suspendquestion.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(suspendquestion.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(suspendquestion.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
    //addquestion ---------------------------------------------------
    builder.addCase(addquestion.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(addquestion.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "success";
    });
    builder.addCase(addquestion.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
    // uploadquestionImage ------------------------------------------
    builder.addCase(uploadquestionImage.pending, (state, action) => {
      state.handleLoading = true;
    });
    builder.addCase(uploadquestionImage.fulfilled, (state, action) => {
      state.handleLoading = false;
      state.handleError = "uploaded";
    });
    builder.addCase(uploadquestionImage.rejected, (state, action) => {
      state.handleLoading = false;
      state.handleError = action.error.message;
    });
  },
});

export default slice.reducer;
export const questionActions = slice.actions;
