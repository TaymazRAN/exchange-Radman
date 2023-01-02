import "../panelAdmin/panel.css";
import "../panelAdmin/table.css";
import { Routes, Route } from "react-router-dom";
import MenuTopOrganization from "../../component/menuTopOrganization/MenuTopOrganization";
import SideBarOrganaization from "../../component/sideBarOrganaization/SideBarOrganaization";
import DepartmentTable from "./department/DepartmentTable";
import EmployeeTable from "./employee/EmployeeTable";
import RequestTable from "./request/RequestTable";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPanel from "../error/NotFoundPanel";
import ManagerTable from "./manager/ManagerTable";
import ManagerAdd from "./manager/ManagerAdd";
import DepartmentAdd from "./department/DepartmentAdd";
import EmployeeAdd from "./employee/EmployeeAdd";
import AccessDeny from "../../component/accessDeny/AccessDeny";
import ManagerEdit from "./manager/ManagerEdit";
import EmployeeEdit from "./employee/EmployeeEdit";
import OrganizationEdit from "./organizationEdit/OrganizationEdit";
import RequestAddEmployee from "./request/RequestAddEmployee";
import RequestAddDepartment from "./request/RequestAddDepartment";
import ReportShow from "./report/ReportShow";
import ReportTable from "./report/ReportTable";
import DepartmentEdit from "./department/DepartmentEdit";
import ApplicantTable from "./employee/ApplicantTable";
import ApplicantAdd from "./employee/ApplicantAdd";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchDepartments } from "../../features/department/departmentSlice";
import { fetchEmployees } from "../../features/employee/employeeSlice";
import { fetchOrganizationManagers } from "../../features/account/managerSlice";
import { fetchOrganizationByID } from "../../features/organization/organizationSlice";
import { fetchManagerReports } from "../../features/report/reportSlice";
import {
	fetchCredit,
	fetchRequestData,
	fetchRequests,
} from "../../features/request/requestSlice";
import { fetchStructureData } from "../../features/structure/structureSlice";
// import axios from "axios";

export default function PanelOrganization() {
	const token = JSON.parse(localStorage.getItem("token"));
	const organid = JSON.parse(localStorage.getItem("organid"));
	const departmentid = JSON.parse(localStorage.getItem("departmentid"));
	const user = JSON.parse(localStorage.getItem("managername"));
	const userAdmin = JSON.parse(localStorage.getItem("adminname"));

	if (token) {
		axios.interceptors.request.use(function (config) {
			config.headers.Authorization = `Bearer ${token.token}`;

			return config;
		});
	}

	const dispatch = useDispatch();
	const ready = useSelector((state) => state.structure.ready);

	if (!ready) {
		dispatch(fetchDepartments(organid));
		dispatch(fetchEmployees(organid));
		dispatch(fetchOrganizationManagers(organid));
		dispatch(fetchOrganizationByID(organid));
		dispatch(fetchManagerReports(organid));
		dispatch(fetchCredit(organid));
		dispatch(fetchRequests(organid));
		dispatch(fetchRequestData({ organid, departmentid }));
		dispatch(fetchStructureData(organid));
	}

	return (
		<>
			{token && (user || userAdmin) ? (
				<>
					<MenuTopOrganization />
					<div className="panel">
						<div className="sidebar panelBox">
							<SideBarOrganaization />
						</div>
						<div className="page panelBox">
							<Routes>
								<Route path="/" element={<Dashboard />} />
								<Route path="/manager" element={<ManagerTable />} />
								<Route path="/managerAdd" element={<ManagerAdd />} />
								<Route
									path="/managerEdit/:username"
									element={<ManagerEdit />}
								/>
								<Route path="/department" element={<DepartmentTable />} />
								<Route path="/departmentAdd" element={<DepartmentAdd />} />
								<Route
									path="/departmentEdit/:id"
									element={<DepartmentEdit />}
								/>
								<Route path="/employee" element={<EmployeeTable />} />
								<Route path="/employeeAdd" element={<EmployeeAdd />} />
								<Route path="/employeeEdit/:id" element={<EmployeeEdit />} />
								<Route path="/applicant" element={<ApplicantTable />} />
								<Route
									path="/applicantAdd/:username"
									element={<ApplicantAdd />}
								/>
								<Route path="/report" element={<ReportTable />} />
								<Route path="/reportShow/:id" element={<ReportShow />} />
								<Route path="/request" element={<RequestTable />} />
								<Route
									path="/requestAddEmployee"
									element={<RequestAddEmployee />}
								/>
								<Route
									path="/requestAddDepartment"
									element={<RequestAddDepartment />}
								/>
								<Route
									path="/organizationEdit"
									element={<OrganizationEdit />}
								/>
								<Route path="*" element={<NotFoundPanel />} />
								{/* <Route path="*" element={<NotFoundPanel />} /> */}
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
