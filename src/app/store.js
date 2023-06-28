import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/account/loginSlice";
import managerSlice from "../features/account/managerSlice";
import registerSlice from "../features/account/registerSlice";
import subMenuSlice from "../features/account/subMenuSlice";
import userSlice from "../features/account/userSlice";

import reportSlice from "../features/report/reportSlice";
import requestSlice from "../features/request/requestSlice";
import structureSlice from "../features/structure/structureSlice";

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    user: userSlice,
    manager: managerSlice,
    subMenu: subMenuSlice,

    report: reportSlice,
    request: requestSlice,

    structure: structureSlice,
  },
});

export default store;
