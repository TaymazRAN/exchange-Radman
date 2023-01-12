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
	fetchOrganizations,
	organizationActions,
	updateOrganization,
	uploadOrganizationImage,
} from "../../../../features/organization/organizationSlice";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام سازمان را وارد کنید"),
	address: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("آدرس را وارد کنید"),
	postCode: yup
		.number()
		.typeError("کد پستی باید عدد باشد")
		.required("کد پستی را وارد کنید"),
	contactNumber: yup
		.number()
		.typeError("شماره تماس باید عدد باشد")
		.required("شماره تماس را وارد کنید"),
	emailAddress: yup
		.string("ایمیل را وارد کنید")
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
			"ایمیل را با ساختار صحیح وارد کنید"
		)
		.required("ایمیل را وارد کنید"),
	description: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
	refCode: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("کد ارجاع را وارد کنید"),
	// plan: yup
	// 	.string()
	// 	.required("طرح را انتخاب کنید"),
	// planExpDate: yup
	// 	.string()
	// 	.required("تاریخ انقضا طرح را وارد کنید"),
	credit: yup
		.number()
		.typeError("اعتبار باید عدد باشد")
		.required("اعتبار را وارد کنید"),
});

export default function OrganizationEdit(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.organization.data);
	const [post, setPost] = useState(undefined);
	const handleLoading = useSelector(
		(state) => state.organization.handleLoading
	);
	const error = useSelector((state) => state.organization.error);
	const handleError = useSelector((state) => state.organization.handleError);
	const ready = useSelector((state) => state.organization.ready);

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
				navigate(`/organization/manager`);
				dispatch(organizationActions.clearHandleError());
			}, 1500);
		} else if (handleError === "uploaded") {
			handleOpenSuccess("تصویر با موفقیت آپلود شد");
			dispatch(organizationActions.clearHandleError());
		} else if (
			handleError !== "success" &&
			handleError !== "" &&
			handleError !== "uploaded"
		) {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(organizationActions.clearHandleError());
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
		address: fixNull(post?.address),
		postCode: fixNull(post?.postCode),
		plan: fixNull(post?.plan),
		planExpDate: fixNull(post?.planExpDate),
		contactNumber: fixNull(post?.contactNumber),
		emailAddress: fixNull(post?.emailAddress),
		description: fixNull(post?.description),
		logoFileName: fixNull(post?.logoFileName),
		refCode: fixNull(post?.refrenceCode),
		credit: fixNull(post?.credit, 0),
	};

	const submit = (data) => {
		dispatch(updateOrganization({ id, data })).unwrap();
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
			dispatch(uploadOrganizationImage({ id, data }));
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
								ویرایش سازمان
								<Button
									variant="outlined"
									component="label"
									margin="dense"
									color="info"
									id="logoFileName"
									sx={{ marginLeft: "15px" }}
									onChange={handleImageUpload}
								>
									آپلود لوگو
									{handleLoading ? <LoadingSmall /> : null}
									<input type="file" hidden />
								</Button>
							</div>
							<div className="profileInputContainer">
								<TextField
									dir="rtl"
									margin="dense"
									id="name"
									label="نام سازمان"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.name}
									onChange={handleChange}
									error={touched.name && Boolean(errors.name)}
									helperText={touched.name && errors.name}
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="address"
									label="آدرس"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.address}
									onChange={handleChange}
									error={touched.address && Boolean(errors.address)}
									helperText={touched.address && errors.address}
								/>
							</div>
							<div className="profileInputContainer">
								<TextField
									dir="rtl"
									margin="dense"
									id="postCode"
									label="کد پستی"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.postCode}
									onChange={handleChange}
									error={touched.postCode && Boolean(errors.postCode)}
									helperText={touched.postCode && errors.postCode}
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="contactNumber"
									label="شماره تماس"
									type="tel"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.contactNumber}
									onChange={handleChange}
									error={touched.contactNumber && Boolean(errors.contactNumber)}
									helperText={touched.contactNumber && errors.contactNumber}
								/>
							</div>
							<div className="profileInputContainer">
								<TextField
									dir="rtl"
									margin="dense"
									id="emailAddress"
									label="ایمیل"
									type="email"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.emailAddress}
									onChange={handleChange}
									error={touched.emailAddress && Boolean(errors.emailAddress)}
									helperText={touched.emailAddress && errors.emailAddress}
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="description"
									label="توضیحات"
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
								<TextField
									dir="rtl"
									margin="dense"
									id="credit"
									label="اعتبار"
									type="number"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.credit}
									onChange={handleChange}
									error={touched.credit && Boolean(errors.credit)}
									helperText={touched.credit && errors.credit}
									disabled
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="refCode"
									label="کد ارجاع"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.refCode}
									onChange={handleChange}
									error={touched.refCode && Boolean(errors.refCode)}
									helperText={touched.refCode && errors.refCode}
								/>
							</div>
							{/* <div className="profileInputContainer">
								<Autocomplete
									fullWidth
									id="plan"
									name="plan"
									sx={{ marginTop: "0" }}
									className="profileInput"
									options={planRowsAutoComplete}
									// defaultValue={
									// 	packageRowsAutoComplete.find(
									// 		(item) => item.name === post?.plan
									// 	)
									// }
									defaultValue={planRowsAutoComplete.find(
										(item) => item === post?.plan
									)}
									// getOptionLabel={(option) => option.name}
									onChange={(e, value) => {
										setFieldValue("plan", value !== null ? value : post.plan);
									}}
									renderInput={(params) => (
										<TextField
											margin="normal"
											label="طرح"
											fullWidth
											name="plan"
											value={values.plan}
											error={touched.plan && Boolean(errors.plan)}
											helperText={touched.plan && errors.plan}
											{...params}
										/>
									)}
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="planExpDate"
									label="تاریخ انقضا طرح"
									type="date"
									fullWidth
									variant="outlined"
									className="profileInput"
									InputLabelProps={{ shrink: true }}
									value={values.planExpDate.substr(0, 10)}
									onChange={handleChange}
									error={touched.planExpDate && Boolean(errors.planExpDate)}
									helperText={touched.planExpDate && errors.planExpDate}
								/>
							</div> */}
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
