import { configureStore } from "@reduxjs/toolkit";
import structureSlice from "../../features/structure/structureSlice";
import reportSlice from "../../features/report/reportSlice";
import loginSlice from "../../features/account/loginSlice";
import userSlice from "../../features/account/userSlice";
import registerSlice from "../../features/account/registerSlice";
const store = configureStore({
  reducer: {
    structure: structureSlice,
    report: reportSlice,
    login: loginSlice,
    register: registerSlice,

    user: userSlice,
  },
});

export default store;
