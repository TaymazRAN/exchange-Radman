import React, { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { fixNull } from "../../../../services/fixNull";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../../components/loadingSmall/LoadingSmall";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import {
	categoryActions,
	fetchCategorys,
	updateCategory,
	uploadBackgroundCategory,
	uploadIconCategory,
} from "../../../../features/package/categorySlice";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام دسته بندی را وارد کنید"),
	description: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
});

export default function CategoryEdit(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.category.data);
	const [post, setPost] = useState(undefined);
	const handleLoading = useSelector((state) => state.category.handleLoading);
	const ready = useSelector((state) => state.category.ready);
	const error = useSelector((state) => state.category.error);
	const handleError = useSelector((state) => state.category.handleError);

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
		dispatch(fetchCategorys());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (data.find((item) => item.id === id)) {
			setPost(data.find((item) => item.id === id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready]);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/category`);
				dispatch(categoryActions.clearHandleError());
			}, 1500);
		} else if (handleError === "uploaded") {
			handleOpenSuccess("تصویر با موفقیت آپلود شد");
			dispatch(categoryActions.clearHandleError());
		} else if (
			handleError !== "success" &&
			handleError !== "" &&
			handleError !== "uploaded"
		) {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(categoryActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		name: fixNull(post?.name),
		description: fixNull(post?.description),
	};

	const submit = (data) => {
		dispatch(updateCategory({ id, data })).unwrap();
	};

	const handleIconUpload = async (event) => {
		var data = new FormData();
		var file = event.target.files[0];
		if (
			file.type === "image/jpeg" ||
			file.type === "image/jpg" ||
			file.type === "image/png"
		) {
			data.append("formFile", file);
			dispatch(uploadIconCategory({ id, data }));
		} else {
			handleOpenError("فرمت تصویر باید jpg, jpeg یا png باشد");
		}
	};

	const handleBackgroundUpload = async (event) => {
		var data = new FormData();
		var file = event.target.files[0];
		if (
			file.type === "image/jpeg" ||
			file.type === "image/jpg" ||
			file.type === "image/png"
		) {
			data.append("formFile", file);
			dispatch(uploadBackgroundCategory({ id, data }));
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
								ویرایش دسته بندی
								<Button
									variant="outlined"
									component="label"
									margin="dense"
									color="info"
									id="logoFileName"
									sx={{ marginLeft: "15px" }}
									onChange={handleIconUpload}
								>
									آپلود تصویر
									{handleLoading ? <LoadingSmall /> : null}
									<input type="file" hidden />
								</Button>
								<Button
									variant="outlined"
									component="label"
									margin="dense"
									color="info"
									id="logoFileName"
									sx={{ marginLeft: "15px" }}
									onChange={handleBackgroundUpload}
								>
									آپلود تصویر زمینه
									{handleLoading ? <LoadingSmall /> : null}
									<input type="file" hidden />
								</Button>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="name"
									label="نام دسته بندی"
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
									onClick={(event) => navigate("/admin/category")}
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
