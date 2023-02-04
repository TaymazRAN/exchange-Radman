import "./panel.css";
import "./table.css";
import { Routes, Route } from "react-router-dom";
import UserTable from "./user/UserTable";
import MenuTopAdmin from "../../components/menuTopAdmin/MenuTopAdmin";
import SideBarAdmin from "../../components/sideBarAdmin/SideBarAdmin";
import Dashboard from "./dashboard/Dashboard";
import MenuTable from "./menu/menuTable/MenuTable";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../features/account/userSlice";
import MemberList from "./manager/MemberList";
import ManagerAdd from "./manager/ManagerAdd";
import ManagerEdit from "./manager/ManagerEdit";
import QuestionAdd from "./question/QuestionAdd";
import QuestionEdit from "./question/QuestionEdit";
import QuestionList from "./question/QuestionList";
import SubMenuList from "./subMenu/SubMenuList";
import SubMenuAdd from "./subMenu/SubMenuAdd";
import SubMenuEdit from "./subMenu/SubMenuEdit";

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
              <Route path="/manager" element={<MemberList />} />
              <Route path="/managerAdd" element={<ManagerAdd />} />
              <Route path="/managerEdit/:id" element={<ManagerEdit />} />
              <Route path="/question" element={<QuestionList />} />
              <Route path="/questionAdd" element={<QuestionAdd />} />
              <Route path="/questionEdit/:id" element={<QuestionEdit />} />
              <Route path="/subMenu" element={<SubMenuList />} />
              <Route path="/subMenuAdd" element={<SubMenuAdd />} />
              <Route path="/subMenuEdit/:id" element={<SubMenuEdit />} />
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
