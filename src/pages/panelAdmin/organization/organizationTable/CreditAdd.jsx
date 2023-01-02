import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import LoadingSmall from "../../../../component/loadingSmall/LoadingSmall";
import SnackAlert from "../../../../component/snackAlert/SnackAlert";
import {
	addCredit,
	organizationActions,
} from "../../../../features/organization/organizationSlice";

const validationSchema = yup.object().shape({
	amount: yup
		.number()
		.typeError("مقدار اعتبار باید عدد باشد")
		.required("مقدار اعتبار را وارد کنید"),
	description: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
});

export default function CreditAdd(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const initialValues = {
		organizationId: id,
		amount: 0,
		description: "",
	};

	const handleLoading = useSelector(
		(state) => state.organization.handleLoading
	);
	const handleError = useSelector((state) => state.organization.handleError);

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

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(addCredit(values)).unwrap();
		// navigate(`/organization/request`);
	};

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/organization`);
				dispatch(organizationActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(organizationActions.clearHandleError());
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
			<Formik
				{...props}
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submit}
				innerRef={formRef}
			>
				{({ handleChange, values, setFieldValue, errors, touched }) => (
					<Form>
						<div className="mainPanelTitle bold">اضافه کردن اعتبار</div>
						<div className="profileInputContainer">
							<TextField
								className="profileInput"
								variant="outlined"
								type="number"
								label="مقدار اعتبار"
								id="amount"
								fullWidth
								value={values.amount}
								onChange={handleChange}
								error={touched.amount && Boolean(errors.amount)}
								helperText={touched.amount && errors.amount}
							/>
						</div>
						<div className="profileInputContainer">
							<TextField
								autoFocus
								dir="rtl"
								margin="dense"
								id="description"
								label="توضیحات"
								multiline
								maxRows={4}
								minRows={2}
								type="text"
								fullWidth
								variant="outlined"
								className="profileInput"
								value={values.description}
								onChange={handleChange}
								error={touched.description && Boolean(errors.description)}
								helperText={touched.description && errors.description}
							/>
						</div>
						<div className="profileInputContainer">
							<Button
								variant="outlined"
								className="profileInput"
								component="label"
								margin="dense"
								color="error"
								onClick={(event) => navigate("/admin/organization")}
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
		</>
	);
}
