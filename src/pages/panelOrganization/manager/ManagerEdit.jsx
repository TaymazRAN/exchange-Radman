import React, { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { fixNull } from "../../../services/fixNull";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import {
	fetchManagerByUsername,
	managerActions,
	updateManager,
	uploadManagerImage,
} from "../../../features/account/managerSlice";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام مدیر را وارد کنید"),
	phoneNum: yup
		.number()
		.typeError("شماره تماس باید عدد باشد")
		.required("شماره تماس را وارد کنید"),
	email: yup
		.string()
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
			"ایمیل را با ساختار صحیح وارد کنید"
		)
		.required("ایمیل را وارد کنید"),
});

export default function DepartmentEdit(props) {
	const { username } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.manager.manager);
	const [post, setPost] = useState(undefined);
	const handleLoading = useSelector((state) => state.manager.handleLoading);
	const ready = useSelector((state) => state.manager.ready);
	const error = useSelector((state) => state.manager.error);
	const handleError = useSelector((state) => state.manager.handleError);

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
		dispatch(fetchManagerByUsername(username));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (Object.keys(data).length !== 0) {
			setPost(data);
			console.log(data);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/manager`);
				dispatch(managerActions.clearHandleError());
			}, 1500);
		} else if (handleError === "uploaded") {
			handleOpenSuccess("تصویر با موفقیت آپلود شد");
			dispatch(managerActions.clearHandleError());
		} else if (
			handleError !== "success" &&
			handleError !== "" &&
			handleError !== "uploaded"
		) {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(managerActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		phoneNum: fixNull(post?.phoneNum),
		email: fixNull(post?.emailAddress),
		name: fixNull(post?.name),
	};

	const submit = (data) => {
		dispatch(updateManager({ user: post.username, data })).unwrap();
	};

	const handleImageUpload = async (event) => {
		var data = new FormData();
		var file = event.target.files[0];
		if (
			file.type === "image/jpeg" ||
			file.type === "image/jpg" ||
			file.type === "image/png"
		) {
			data.append("formFile", file);
			dispatch(uploadManagerImage({ user: post.username, data }));
		} else {
			handleOpenError("فرمت تصویر باید jpg, jpeg یا png باشد");
		}
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

			{error !== "" || Object.keys(post ? post : {}).length === 0 || !ready ? (
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
								ویرایش مدیر
								<Button
									variant="outlined"
									component="label"
									margin="dense"
									color="info"
									id="logoFileName"
									sx={{ marginLeft: "15px" }}
									onChange={handleImageUpload}
								>
									آپلود تصویر
									{handleLoading ? <LoadingSmall /> : null}
									<input type="file" hidden />
								</Button>
							</div>
							<div className="profileInputContainer">
								<TextField
									dir="rtl"
									margin="dense"
									id="name"
									label="نام"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.name}
									onChange={handleChange}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
								/>
							</div>
							<div className="profileInputContainer">
								<TextField
									dir="rtl"
									margin="dense"
									id="phoneNum"
									label="شماره تماس"
									type="tel"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.phoneNum}
									onChange={handleChange}
									error={touched.phoneNum && Boolean(errors.phoneNum)}
									helperText={touched.phoneNum && errors.phoneNum}
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="email"
									label="ایمیل"
									type="email"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.email}
									onChange={handleChange}
									error={touched.email && Boolean(errors.email)}
									helperText={touched.email && errors.email}
								/>
							</div>
							<div className="profileInputContainer">
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									color="error"
									onClick={(event) => navigate("/organization/manager")}
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
									ویرایش
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
