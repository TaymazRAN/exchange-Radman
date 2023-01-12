import React, { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { fixNull } from "../../../services/fixNull";
import {
	departmentActions,
	fetchDepartments,
	updateDepartment,
} from "../../../features/department/departmentSlice";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import SnackAlert from "../../../components/snackAlert/SnackAlert";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام دپارتمان را وارد کنید"),
	parentId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("شناسه دپارتمان پدر را انتخاب کنید"),
});

export default function DepartmentEdit(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const organid = JSON.parse(localStorage.getItem("organid"));

	const data = useSelector((state) => state.department.data);
	const [post, setPost] = useState(undefined);
	const handleLoading = useSelector((state) => state.department.handleLoading);
	const ready = useSelector((state) => state.department.ready);
	const error = useSelector((state) => state.department.error);
	const handleError = useSelector((state) => state.department.handleError);

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
		if (data.find((item) => item.id === id)) {
			setPost(data.find((item) => item.id === id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready]);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/organization/department`);
				dispatch(departmentActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(departmentActions.clearHandleError());
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
		parentId: fixNull(post?.parentId),
	};

	const submit = (data) => {
		dispatch(updateDepartment({ id, data })).unwrap();
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
							<div className="mainPanelTitle bold">ویرایش دپارتمان</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="name"
									label="نام دپارتمان"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.name}
									onChange={handleChange}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
								/>
								<Autocomplete
									fullWidth
									disabled
									id="parentId"
									name="parentId"
									margin="dense"
									className="profileInput"
									options={data.map((item) => {
										return { ...item, label: item.name };
									})}
									defaultValue={
										data.find((item) => item.id === post.parentId)?.name
									}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"parentId",
											value !== null ? value.id : initialValues.parentId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="دپارتمان پدر"
											fullWidth
											name="parentId"
											value={values.parentId}
											error={touched.parentId && Boolean(errors.parentId)}
											helperText={touched.parentId && errors.parentId}
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
									onClick={(event) => navigate("/organization/department")}
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
