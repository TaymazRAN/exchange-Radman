import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import {
	acceptReferRequest,
	fetchLastNodeDepartments,
	referenceCodeActions,
} from "../../../features/referenceCode/referenceCodeSlice";

const validationSchema = yup.object().shape({
	username: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام کاربری را وارد کنید"),
	departmentId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دپارتمان را انتخاب کنید"),
});

export default function ApplicantAdd(props) {
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const organid = JSON.parse(localStorage.getItem("organid"));
	const { username } = useParams();

	const initialValues = {
		username: username,
		departmentId: "",
	};

	const departments = useSelector((state) => state.referenceCode.departments);
	const loading = useSelector((state) => state.referenceCode.loading);
	const handleLoading = useSelector(
		(state) => state.referenceCode.handleLoading
	);
	const error = useSelector((state) => state.referenceCode.error);
	const handleError = useSelector((state) => state.referenceCode.handleError);
	const ready = useSelector((state) => state.referenceCode.ready);

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
		dispatch(fetchLastNodeDepartments({ organid }));
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
		dispatch(
			acceptReferRequest({
				organid,
				username: values.username,
				departmentId: values.departmentId,
			})
		).unwrap();
		// navigate(`/organization/request`);
	};

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/applicant`);
				dispatch(referenceCodeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(referenceCodeActions.clearHandleError());
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
			{loading || error !== "" || !ready ? (
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
								اضافه کردن درخواست برای کارمند
							</div>
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
									error={touched.username && Boolean(errors.username)}
									helperText={touched.username && errors.username}
									disabled
								/>
								<Autocomplete
									fullWidth
									id="departmentId"
									name="departmentId"
									margin="dense"
									className="profileInput"
									options={departments.map((item) => {
										return { ...item, label: item.name };
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"departmentId",
											value !== null ? value.id : initialValues.departmentId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="دپارتمان"
											fullWidth
											name="departmentId"
											value={values.departmentId}
											error={
												touched.departmentId && Boolean(errors.departmentId)
											}
											helperText={touched.departmentId && errors.departmentId}
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
									onClick={(event) => navigate("/organization/applicant")}
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
