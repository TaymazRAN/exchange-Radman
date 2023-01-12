import React, { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Autocomplete from "@mui/material/Autocomplete";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import { fixNull } from "../../../../services/fixNull";
import LoadingRedux from "../../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../../components/loadingSmall/LoadingSmall";
import SnackAlert from "../../../../components/snackAlert/SnackAlert";
import { fetchTypes } from "../../../../features/organization/typeSlice";
import {
	complementTypeActions,
	fetchComplementTypes,
	updateComplementType,
} from "../../../../features/organization/complementTypeSlice";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام فیلد تکمیلی را وارد کنید"),
	organizationTypeId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع سازمان را انتخاب کنید"),
	type: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع فیلد را انتخاب کنید"),
	isRequired: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("اجباری بودن فیلد را انتخاب کنید"),
});

export default function ComplementTypeEdit(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.complementType.data);
	const dataType = useSelector((state) => state.type.data);
	const [post, setPost] = useState(undefined);
	const handleLoading = useSelector(
		(state) => state.complementType.handleLoading
	);
	const ready = useSelector((state) => state.type.ready);
	const ready2 = useSelector((state) => state.complementType.ready);
	const error = useSelector((state) => state.type.error);
	const handleError = useSelector((state) => state.complementType.handleError);

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
		dispatch(fetchTypes());
		dispatch(fetchComplementTypes());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (data.find((item) => item.id === id)) {
			setPost(data.find((item) => item.id === id));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [ready2]);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/baseOrganization`);
				dispatch(complementTypeActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(complementTypeActions.clearHandleError());
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
		organizationTypeId: fixNull(post?.organizationCategoryId),
		// type: fixNull(post?.type),
		type: 1,
		isRequired: fixNull(post?.isRequired),
	};

	const submit = (data) => {
		dispatch(updateComplementType({ id, data })).unwrap();
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
							<div className="mainPanelTitle bold">ویرایش فیلد تکمیلی</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="name"
									label="نام فیلد تکمیلی"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.name}
									onChange={handleChange}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
								/>
								<FormControl fullWidth className="profileInput">
									<InputLabel error={touched.type && Boolean(errors.type)}>
										نوع فیلد
									</InputLabel>
									<Select
										labelId="type"
										id="type"
										variant="outlined"
										value={values.type}
										onChange={(e) => {
											setFieldValue("type", e.target.value);
										}}
										error={touched.type && Boolean(errors.type)}
										fullWidth
										label="نوع فیلد"
										disabled
									>
										<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
											<em>انتخاب کنید</em>
										</MenuItem>
										<MenuItem value={1} sx={{ justifyContent: "flex-end" }}>
											نوع 1
										</MenuItem>
										<MenuItem value={2} sx={{ justifyContent: "flex-end" }}>
											نوع 2
										</MenuItem>
										<MenuItem value={3} sx={{ justifyContent: "flex-end" }}>
											نوع 3
										</MenuItem>
									</Select>
									<FormHelperText error={touched.type && Boolean(errors.type)}>
										{touched.type && errors.type}
									</FormHelperText>
								</FormControl>
							</div>
							<div className="profileInputContainer">
								<FormControl margin="dense" fullWidth className="profileInput">
									<InputLabel
										error={touched.isRequired && Boolean(errors.isRequired)}
									>
										فیلد اجباری
									</InputLabel>
									<Select
										labelId="isRequired"
										id="isRequired"
										variant="outlined"
										value={values.isRequired}
										onChange={(e) => {
											setFieldValue("isRequired", e.target.value);
										}}
										error={touched.isRequired && Boolean(errors.isRequired)}
										fullWidth
										label="فیلد اجباری"
									>
										<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
											<em>انتخاب کنید</em>
										</MenuItem>
										<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
											بله
										</MenuItem>
										<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
											خیر
										</MenuItem>
									</Select>
									<FormHelperText
										error={touched.isRequired && Boolean(errors.isRequired)}
									>
										{touched.isRequired && errors.isRequired}
									</FormHelperText>
								</FormControl>
								<Autocomplete
									fullWidth
									id="organizationTypeId"
									name="organizationTypeId"
									className="profileInput"
									options={dataType.map((item) => {
										return { ...item, label: item.title };
									})}
									defaultValue={
										dataType.find(
											(item) => item.id === post?.organizationCategoryId
										)?.title
									}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue(
											"organizationTypeId",
											value !== null
												? value.id
												: initialValues.organizationTypeId
										);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="نوع سازمان"
											fullWidth
											name="organizationTypeId"
											value={values.organizationTypeId}
											error={
												touched.organizationTypeId &&
												Boolean(errors.organizationTypeId)
											}
											helperText={
												touched.organizationTypeId && errors.organizationTypeId
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
