import "../panelAdmin/panel.css";
import "../panelAdmin/table.css";
import { Routes, Route } from "react-router-dom";
import MenuTopPersonal from "../../components/menuTopPersonal/MenuTopPersonal";
import SideBarPersonal from "../../components/sideBarPersonal/SideBarPersonal";
import Profile from "./profile/Profile";
import Report from "./report/Report";
import Message from "./message/Message";
import Quiz from "./quiz/Quiz";
import Exercise from "./exercise/Exercise";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPanel from "../error/NotFoundPanel";
import AccessDeny from "../../components/accessDeny/AccessDeny";
import EmployeeAccounts from "./employee/EmployeeAccounts";
import ReportShow from "./report/ReportShow";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchEmployeeAccounts } from "../../features/referenceCode/referenceCodeSlice";
import { fetchUserByUsername } from "../../features/account/userSlice";
import { fetchExamData } from "../../features/runExam/runExamSlice";
import { fetchUserReport } from "../../features/report/reportSlice";
// import axios from "axios";

export default function PanelPersonal() {
	const token = JSON.parse(localStorage.getItem("token"));
	const user = JSON.parse(localStorage.getItem("username"));

	if (token) {
		axios.interceptors.request.use(function (config) {
			config.headers.Authorization = `Bearer ${token.token}`;

			return config;
		});
	}

	const dispatch = useDispatch();
	const ready = useSelector((state) => state.report.ready);

	if (!ready) {
		dispatch(fetchEmployeeAccounts(user));
		dispatch(fetchUserByUsername(user));
		dispatch(fetchExamData(user));
		dispatch(fetchUserReport(user));
	}

	// axios.interceptors.request.use(function (config) {
	// 	config.headers.Authorization = `Bearer ${token.token}`;

	// 	return config;
	// });
	return (
		<>
			{token && user ? (
				<>
					{" "}
					<MenuTopPersonal />
					<div className="panel">
						<div className="sidebar panelBox">
							<SideBarPersonal />
						</div>
						<div className="page panelBox">
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/profile" element={<Profile />} />
								<Route path="/report" element={<Report />} />
								<Route path="/report/:id" element={<ReportShow />} />
								<Route path="/message" element={<Message />} />
								<Route path="/quiz" element={<Quiz />} />
								<Route path="/exercise" element={<Exercise />} />
								<Route path="/employee" element={<EmployeeAccounts />} />
								<Route path="*" element={<NotFoundPanel />} />
							</Routes>
						</div>
					</div>
				</>
			) : (
				<AccessDeny />
			)}
		</>
	);
}
