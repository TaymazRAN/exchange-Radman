import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import {
	addRequest,
	fetchRequestData,
	requestActions,
} from "../../../features/request/requestSlice";
import LoadingSmall from "../../../component/loadingSmall/LoadingSmall";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
import SnackAlert from "../../../component/snackAlert/SnackAlert";

const initialValues = {
	targetId: "",
	targetType: "Department",
	storePackageId: "",
};

const validationSchema = yup.object().shape({
	targetId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام دپارتمان را انتخاب کنید"),
	storePackageId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("بسته را انتخاب کنید"),
});

export default function RequestAddDepartment(props) {
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const organid = JSON.parse(localStorage.getItem("organid"));
	const departmentid = JSON.parse(localStorage.getItem("departmentid"));

	const dataDepartment = useSelector((state) => state.request.departments);
	// const dataEmployee = useSelector((state) => state.request.employees);
	const dataStorePackage = useSelector((state) => state.request.storePackages);
	// const loading = useSelector((state) => state.request.loading);
	const handleLoading = useSelector((state) => state.request.handleLoading);
	const error = useSelector((state) => state.request.error);
	const handleError = useSelector((state) => state.request.handleError);
	const ready = useSelector((state) => state.request.ready);

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
		dispatch(fetchRequestData({ organid, departmentid }));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	// }, []);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(addRequest(values)).unwrap();
	};

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/request`);
				dispatch(requestActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(requestActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

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
							<div className="mainPanelTitle bold">
								اضافه کردن درخواست برای دپارتمان
							</div>
							<div className="profileInputContainer">
								<Autocomplete
									fullWidth
									id="targetId"
									name="targetId"
									margin="dense"
									className="profileInput"
									options={dataDepartment.map((item) => {
										return { ...item, label: item.name };
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"targetId",
											value !== null ? value.id : initialValues.targetId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="نام دپارتمان"
											fullWidth
											name="targetId"
											value={values.targetId}
											error={touched.targetId && Boolean(errors.targetId)}
											helperText={touched.targetId && errors.targetId}
											{...params}
										/>
									)}
								/>
								<Autocomplete
									fullWidth
									id="storePackageId"
									name="storePackageId"
									margin="dense"
									className="profileInput"
									options={dataStorePackage.map((item) => {
										return { ...item, label: item.name };
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"storePackageId",
											value !== null ? value.id : initialValues.storePackageId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="بسته"
											fullWidth
											name="storePackageId"
											value={values.storePackageId}
											error={
												touched.storePackageId && Boolean(errors.storePackageId)
											}
											helperText={
												touched.storePackageId && errors.storePackageId
											}
											{...params}
										/>
									)}
								/>
							</div>
							<div className="profileInputContainer">
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									color="error"
									onClick={(event) => navigate("/organization/request")}
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
