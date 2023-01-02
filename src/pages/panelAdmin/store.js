import { configureStore } from "@reduxjs/toolkit";
import structureSlice from "../../features/structure/structureSlice";
import reportSlice from "../../features/report/reportSlice";
import loginSlice from "../../features/account/loginSlice";
import runExamSlice from "../../features/runExam/runExamSlice";
import referenceCodeSlice from "../../features/referenceCode/referenceCodeSlice";
import organizationSlice from "../../features/organization/organizationSlice";
import departmentSlice from "../../features/department/departmentSlice";
import typeSlice from "../../features/organization/typeSlice";
import employeeSlice from "../../features/employee/employeeSlice";
import complementTypeSlice from "../../features/organization/complementTypeSlice";
import complementValueSlice from "../../features/organization/complementValueSlice";
import storePackageSlice from "../../features/package/storePackageSlice";
import packageSlice from "../../features/package/packageSlice";
import categorySlice from "../../features/package/categorySlice";
import functionSlice from "../../features/package/functionSlice";
import discountCodeSlice from "../../features/shop/discountCodeSlice";
import userSlice from "../../features/account/userSlice";
import registerSlice from "../../features/account/registerSlice";
const store = configureStore({
	reducer: {
		structure: structureSlice,
		report: reportSlice,
		login: loginSlice,
		register: registerSlice,
		runExam: runExamSlice,
		referenceCode: referenceCodeSlice,
		organization: organizationSlice,
		department: departmentSlice,
		type: typeSlice,
		employee: employeeSlice,
		complementType: complementTypeSlice,
		complementValue: complementValueSlice,
		function: functionSlice,
		category: categorySlice,
		package: packageSlice,
		storePackage: storePackageSlice,
		discountCode: discountCodeSlice,
		user: userSlice,
	},
});

export default store;
