import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import { fetchDepartments } from "../../../features/department/departmentSlice";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import {
	addEmployee,
	employeeActions,
} from "../../../features/employee/employeeSlice";

const validationSchema = yup.object().shape({
	username: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام کاربری را وارد کنید"),
	depId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دپارتمان را انتخاب کنید"),
	position: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("موقعیت را وارد کنید"),
	employementStatus: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("وضعیت استخدام را انتخاب کنید"),
	personelCode: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("کد پرسنلی را وارد کنید"),
	colorCode: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("کد رنگی را وارد کنید"),
});

export default function DepartmentAdd(props) {
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const organid = JSON.parse(localStorage.getItem("organid"));

	const dataDepartment = useSelector((state) => state.department.data);
	const handleLoading = useSelector((state) => state.employee.handleLoading);
	const error = useSelector((state) => state.department.error);
	const handleError = useSelector((state) => state.employee.handleError);
	const ready = useSelector((state) => state.department.ready);

	const [successAlert, setSuccessAlert] = useState(false);
	const [successText, setSuccessText] = useState("");
	const handleOpenSuccess = (text) => {
		setSuccessText(text);
		setSuccessAlert(true);
	};

	const handleCloseSuccess = () => {
		setSuccessAlert(false);
	};

	const [errorAlert, setErrorAlert] = useState(false);
	const [errorText, setErrorText] = useState("");

	const handleOpenError = (text) => {
		setErrorText(text);
		setErrorAlert(true);
	};

	const handleCloseError = () => {
		setErrorAlert(false);
	};

	useEffect(() => {
		dispatch(fetchDepartments(organid));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/employee`);
				dispatch(employeeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(employeeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		username: "",
		orgId: organid,
		depId: "",
		position: "",
		employementStatus: "",
		personelCode: "",
		colorCode: "",
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(addEmployee(values)).unwrap();
	};

	return (
		<>
			<SnackAlert
				props={{
					successAlert,
					handleCloseSuccess,
					successText,
					errorAlert,
					handleCloseError,
					errorText,
				}}
			/>

			{error !== "" || !ready ? (
				<LoadingRedux error={error} />
			) : (
				<Formik
					{...props}
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={submit}
					innerRef={formRef}
				>
					{({ handleChange, values, setFieldValue, errors, touched }) => (
						<Form>
							<div className="mainPanelTitle bold">اضافه کردن کارمند</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="username"
									label="نام کاربری"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.username}
									onChange={handleChange}
									error={touched.username && Boolean(errors.username)}
									helperText={touched.username && errors.username}
								/>
								<Autocomplete
									fullWidth
									id="depId"
									name="depId"
									margin="dense"
									className="profileInput"
									options={dataDepartment.map((item) => {
										return { ...item, label: item.name };
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"depId",
											value !== null ? value.id : initialValues.depId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="دپارتمان"
											fullWidth
											name="depId"
											value={values.depId}
											error={touched.depId && Boolean(errors.depId)}
											helperText={touched.depId && errors.depId}
											{...params}
										/>
									)}
								/>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="position"
									label="موقعیت شغلی"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.position}
									onChange={handleChange}
									error={touched.position && Boolean(errors.position)}
									helperText={touched.position && errors.position}
								/>
								<FormControl fullWidth className="selectContainer profileInput">
									<InputLabel
										error={
											touched.employementStatus &&
											Boolean(errors.employementStatus)
										}
										id="employementStatusLabel"
									>
										وضعیت استخدام
									</InputLabel>
									<Select
										labelId="employementStatusLabel"
										id="employementStatus"
										variant="outlined"
										fullWidth
										label="وضعیت استخدام"
										value={values.employementStatus}
										onChange={(e) => {
											setFieldValue("employementStatus", e.target.value);
										}}
										error={
											touched.employementStatus &&
											Boolean(errors.employementStatus)
										}
									>
										<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
											<em>انتخاب کنید</em>
										</MenuItem>
										<MenuItem
											value={"Current"}
											sx={{ justifyContent: "flex-end" }}
										>
											استخدام شده
										</MenuItem>
										<MenuItem
											value={"Pottential"}
											sx={{ justifyContent: "flex-end" }}
										>
											قابل استخدام
										</MenuItem>
									</Select>
									<FormHelperText
										error={
											touched.employementStatus &&
											Boolean(errors.employementStatus)
										}
									>
										{touched.employementStatus && errors.employementStatus}
									</FormHelperText>
								</FormControl>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="personelCode"
									label="کد پرسنلی"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.personelCode}
									onChange={handleChange}
									error={touched.personelCode && Boolean(errors.personelCode)}
									helperText={touched.personelCode && errors.personelCode}
								/>
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="colorCode"
									label="کد رنگی"
									type="color"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.colorCode}
									onChange={handleChange}
									error={touched.colorCode && Boolean(errors.colorCode)}
									helperText={touched.colorCode && errors.colorCode}
								/>
							</div>
							<div className="profileInputContainer">
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									color="error"
									onClick={(event) => navigate("/organization/employee")}
									id="logoFileName"
									sx={{ padding: "15px 0", marginTop: "4px" }}
									fullWidth
								>
									انصراف
								</Button>
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									id="logoFileName"
									color="primary"
									sx={{ padding: "15px 0", marginTop: "4px" }}
									onClick={(event) => handleSubmit()}
									fullWidth
								>
									اضافه کردن
									{handleLoading ? <LoadingSmall /> : null}
								</Button>
							</div>
						</Form>
					)}
				</Formik>
			)}
		</>
	);
}
