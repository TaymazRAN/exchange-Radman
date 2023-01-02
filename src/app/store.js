import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "../features/account/loginSlice";
import managerSlice from "../features/account/managerSlice";
import registerSlice from "../features/account/registerSlice";
import userSlice from "../features/account/userSlice";
import departmentSlice from "../features/department/departmentSlice";
import employeeSlice from "../features/employee/employeeSlice";
import complementTypeSlice from "../features/organization/complementTypeSlice";
import complementValueSlice from "../features/organization/complementValueSlice";
import organizationSlice from "../features/organization/organizationSlice";
import typeSlice from "../features/organization/typeSlice";
import categorySlice from "../features/package/categorySlice";
import functionSlice from "../features/package/functionSlice";
import packageSlice from "../features/package/packageSlice";
import storePackageSlice from "../features/package/storePackageSlice";
import referenceCodeSlice from "../features/referenceCode/referenceCodeSlice";
import reportSlice from "../features/report/reportSlice";
import requestSlice from "../features/request/requestSlice";
import runExamSlice from "../features/runExam/runExamSlice";
import discountCodeSlice from "../features/shop/discountCodeSlice";
import structureSlice from "../features/structure/structureSlice";

const store = configureStore({
	reducer: {
		login: loginSlice,
		register: registerSlice,
		user: userSlice,
		manager: managerSlice,
		department: departmentSlice,
		employee: employeeSlice,
		organization: organizationSlice,
		type: typeSlice,
		complementType: complementTypeSlice,
		complementValue: complementValueSlice,
		category: categorySlice,
		function: functionSlice,
		storePackage: storePackageSlice,
		package: packageSlice,
		referenceCode: referenceCodeSlice,
		report: reportSlice,
		request: requestSlice,
		runExam: runExamSlice,
		discountCode: discountCodeSlice,
		structure: structureSlice,
	},
});

export default store;
