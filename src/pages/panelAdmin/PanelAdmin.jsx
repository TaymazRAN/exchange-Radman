import "./panel.css";
import "./table.css";
import { Routes, Route } from "react-router-dom";
import UserTable from "./user/UserTable";

import MenuTopAdmin from "../../components/menuTopAdmin/MenuTopAdmin";
import SideBarAdmin from "../../components/sideBarAdmin/SideBarAdmin";
import Dashboard from "./dashboard/Dashboard";

import MenuTable from "./menu/menuTable/MenuTable";

// import AccessDeny from "../../components/accessDeny/AccessDeny";

import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

import { fetchUsers } from "../../features/account/userSlice";

export default function PanelAdmin() {
  const token = JSON.parse(localStorage.getItem("token"));
  // const user = JSON.parse(localStorage.getItem("adminname"));

  if (token) {
    axios.interceptors.request.use(function (config) {
      config.headers.Authorization = `Bearer ${token.token}`;

      return config;
    });
  }

  const dispatch = useDispatch();
  const ready = useSelector((state) => state.user.ready);

  if (!ready) {
    dispatch(fetchUsers());
  }

  return (
    <>
      {/* {token && user ? ( */}
      <div className="admin">
        <MenuTopAdmin />
        <div className="panel">
          <div className="sidebar panelBox">
            <SideBarAdmin />
          </div>
          <div className="page panelBox">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/user" element={<UserTable />} />
              <Route path="/menu" element={<MenuTable />} />
            </Routes>
          </div>
        </div>
      </div>
      {/* ) : (
				<AccessDeny />
			)} */}
    </>
  );
}
