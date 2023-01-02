import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import SnackAlert from "../../../../component/snackAlert/SnackAlert";
import LoadingRedux from "../../../../component/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../../component/loadingSmall/LoadingSmall";
import { fetchComplementTypes } from "../../../../features/organization/complementTypeSlice";
import { fetchOrganizations } from "../../../../features/organization/organizationSlice";
import {
	addComplementValue,
	complementValueActions,
} from "../../../../features/organization/complementValueSlice";

const validationSchema = yup.object().shape({
	organizationId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("سازمان را انتخاب کنید"),
	organizationComplementryFieldId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("فیلد تکمیلی را انتخاب کنید"),
	content: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("اطلاعات را وارد کنید"),
});

export default function ComplementValueAdd(props) {
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const dataComplementType = useSelector((state) => state.complementType.data);
	const dataOrganization = useSelector((state) => state.organization.data);
	const handleLoading = useSelector(
		(state) => state.complementValue.handleLoading
	);
	const error = useSelector((state) => state.type.error);
	const handleError = useSelector((state) => state.complementValue.handleError);
	const ready = useSelector((state) => state.type.ready);

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
		dispatch(fetchOrganizations());
		dispatch(fetchComplementTypes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/baseOrganization`);
				dispatch(complementValueActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(complementValueActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		organizationId: "",
		organizationComplementryFieldId: "",
		content: "",
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(addComplementValue(values)).unwrap();
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
							<div className="mainPanelTitle bold">اضافه کردن ورودی تکمیلی</div>
							<div className="profileInputContainer">
								<Autocomplete
									fullWidth
									id="organizationId"
									name="organizationId"
									className="profileInput"
									options={dataOrganization.map((item) => {
										return { ...item, label: item.name };
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"organizationId",
											value !== null ? value.id : initialValues.organizationId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="سازمان"
											fullWidth
											name="organizationId"
											value={values.organizationId}
											error={
												touched.organizationId && Boolean(errors.organizationId)
											}
											helperText={
												touched.organizationId && errors.organizationId
											}
											{...params}
										/>
									)}
								/>
								<Autocomplete
									fullWidth
									id="organizationComplementryFieldId"
									name="organizationComplementryFieldId"
									className="profileInput"
									options={dataComplementType.map((item) => {
										return { ...item, label: item.name };
									})}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"organizationComplementryFieldId",
											value !== null
												? value.id
												: initialValues.organizationComplementryFieldId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="فیلد تکمیلی"
											fullWidth
											name="organizationComplementryFieldId"
											value={values.organizationComplementryFieldId}
											error={
												touched.organizationComplementryFieldId &&
												Boolean(errors.organizationComplementryFieldId)
											}
											helperText={
												touched.organizationComplementryFieldId &&
												errors.organizationComplementryFieldId
											}
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
									id="content"
									label="ورودی تکمیلی"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									name="content"
									value={values.content}
									onChange={handleChange}
									error={touched.content && Boolean(errors.content)}
									helperText={touched.content && errors.content}
								/>
							</div>
							<div className="profileInputContainer">
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									color="error"
									onClick={(event) => navigate("/admin/baseOrganization")}
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
