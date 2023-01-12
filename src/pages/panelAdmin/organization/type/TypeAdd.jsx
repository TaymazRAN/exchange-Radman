import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../../components/loadingSmall/LoadingSmall";
import {
	addType,
	typeActions,
} from "../../../../features/organization/typeSlice";

const validationSchema = yup.object().shape({
	title: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع سازمان را وارد کنید"),
});

export default function DepartmentAdd(props) {
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const handleLoading = useSelector((state) => state.type.handleLoading);
	const error = useSelector((state) => state.type.error);
	const handleError = useSelector((state) => state.type.handleError);
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
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/baseOrganization`);
				dispatch(typeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(typeActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		title: "",
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(addType(values)).unwrap();
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
							<div className="mainPanelTitle bold">اضافه کردن نوع سازمان</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="title"
									label="نوع سازمان"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.title}
									onChange={handleChange}
									error={touched.title && Boolean(errors.title)}
									helperText={touched.title && errors.title}
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
