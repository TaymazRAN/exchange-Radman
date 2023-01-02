import "./panel.css";
import "./table.css";
import { Routes, Route } from "react-router-dom";
import UserTable from "./user/UserTable";
import CategoryTable from "./package/category/CategoryTable";
import PackageTable from "./package/package/PackageTable";
import DiscountTable from "./shop/discount/DiscountTable";
import MenuTopAdmin from "../../component/menuTopAdmin/MenuTopAdmin";
import SideBarAdmin from "../../component/sideBarAdmin/SideBarAdmin";
import OrganizationTable from "./organization/organizationTable/OrganizationTable";
import Dashboard from "./dashboard/Dashboard";
import NotFoundPanel from "../error/NotFoundPanel";
import ContactTable from "./contact/ContactTable";
import MenuTable from "./menu/menuTable/MenuTable";
import TypeAdd from "./organization/type/TypeAdd";
import TypeEdit from "./organization/type/TypeEdit";
import OrganizationAdd from "./organization/organizationTable/OrganizationAdd";
import OrganizationEdit from "./organization/organizationTable/OrganizationEdit";
import ComplementTypeAdd from "./organization/complementType/ComplementTypeAdd";
import ComplementTypeEdit from "./organization/complementType/ComplementTypeEdit";
import ComplementValueAdd from "./organization/complementValue/ComplementValueAdd";
import ComplementValueEdit from "./organization/complementValue/ComplementValueEdit";
import ContactShow from "./contact/ContactShow";
import DiscountAdd from "./shop/discount/DiscountAdd";
import CategoryAdd from "./package/category/CategoryAdd";
import CategoryEdit from "./package/category/CategoryEdit";
import OrganizationShow from "./organization/organizationTable/OrganizationShow";
import FunctionTable from "./package/functions/FunctionTable";
import FunctionAdd from "./package/functions/FunctionAdd";
import FunctionEdit from "./package/functions/FunctionEdit";
import StorePackageTable from "./package/storePackage/StorePackageTable";
import StorePackageAdd from "./package/storePackage/StorePackageAdd";
import StorePackageEdit from "./package/storePackage/StorePackageEdit";
import PackageReportTable from "./packageReport/PackgeReportTable";
import AccessDeny from "../../component/accessDeny/AccessDeny";
import OrganizationInfo from "./organization/organizationInfo/OrganizationInfo";
import PackageReportAdd from "./packageReport/PackageReportAdd";
import CreditAdd from "./organization/organizationTable/CreditAdd";
import ReportShow from "./packageReport/ReportShow";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { fetchTypes } from "../../features/organization/typeSlice";
import { fetchComplementTypes } from "../../features/organization/complementTypeSlice";
import { fetchComplementValues } from "../../features/organization/complementValueSlice";
import { fetchOrganizations } from "../../features/organization/organizationSlice";
import { fetchCategorys } from "../../features/package/categorySlice";
import { fetchFunctions } from "../../features/package/functionSlice";
import { fetchStorePackages } from "../../features/package/storePackageSlice";
import { fetchPackages } from "../../features/package/packageSlice";
import { fetchAllReports } from "../../features/report/reportSlice";
import { fetchDiscountCodes } from "../../features/shop/discountCodeSlice";
import { fetchUsers } from "../../features/account/userSlice";

export default function PanelAdmin() {
	const token = JSON.parse(localStorage.getItem("token"));
	const user = JSON.parse(localStorage.getItem("adminname"));

	if (token) {
		axios.interceptors.request.use(function (config) {
			config.headers.Authorization = `Bearer ${token.token}`;

			return config;
		});
	}

	const dispatch = useDispatch();
	const ready = useSelector((state) => state.user.ready);

	if (!ready) {
		dispatch(fetchTypes());
		dispatch(fetchComplementTypes());
		dispatch(fetchComplementValues());
		dispatch(fetchOrganizations());
		dispatch(fetchCategorys());
		dispatch(fetchFunctions());
		dispatch(fetchStorePackages());
		dispatch(fetchPackages());
		dispatch(fetchAllReports());
		dispatch(fetchDiscountCodes());
		dispatch(fetchUsers());
	}
	
	return (
		<>
			{token && user ? (
				<>
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
								<Route path="/discount" element={<DiscountTable />} />
								<Route path="/discountAdd" element={<DiscountAdd />} />
								<Route path="/function" element={<FunctionTable />} />
								<Route path="/functionAdd" element={<FunctionAdd />} />
								<Route path="/functionEdit/:id" element={<FunctionEdit />} />
								<Route path="/category" element={<CategoryTable />} />
								<Route path="/categoryAdd" element={<CategoryAdd />} />
								<Route path="/categoryEdit/:id" element={<CategoryEdit />} />
								<Route path="/storePackage" element={<StorePackageTable />} />
								<Route path="/storePackageAdd" element={<StorePackageAdd />} />
								<Route
									path="/storePackageEdit/:id"
									element={<StorePackageEdit />}
								/>
								<Route
									path="/organizationInfo"
									element={<OrganizationInfo />}
								/>
								<Route path="/storePackageAdd" element={<StorePackageAdd />} />
								<Route
									path="/storePackageEdit/:id"
									element={<StorePackageEdit />}
								/>
								<Route path="/task" element={<PackageTable />} />
								<Route path="/report" element={<PackageReportTable />} />
								<Route path="/reportAdd" element={<PackageReportAdd />} />
								<Route path="/reportAdd/:id" element={<PackageReportAdd />} />
								<Route path="/reportShow/:id" element={<ReportShow />} />
								<Route
									path="/complementTypeAdd"
									element={<ComplementTypeAdd />}
								/>
								<Route
									path="/complementTypeEdit/:id"
									element={<ComplementTypeEdit />}
								/>
								<Route path="/organization" element={<OrganizationTable />} />
								<Route path="/organizationAdd" element={<OrganizationAdd />} />
								<Route
									path="/organizationEdit/:id"
									element={<OrganizationEdit />}
								/>
								<Route
									path="/organizationShow/:id"
									element={<OrganizationShow />}
								/>
								<Route path="/creditAdd/:id" element={<CreditAdd />} />
								<Route
									path="/complementValueAdd"
									element={<ComplementValueAdd />}
								/>
								<Route
									path="/complementValueEdit/:id"
									element={<ComplementValueEdit />}
								/>
								<Route path="/contact" element={<ContactTable />} />
								<Route path="/contactShow" element={<ContactShow />} />
								<Route path="*" element={<NotFoundPanel />} />
								<Route path="/typeAdd" element={<TypeAdd />} />
								<Route path="/typeEdit/:id" element={<TypeEdit />} />
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
