import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { styled } from "@mui/material/styles";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { FormControl } from "@mui/material";
import FormHelperText from "@mui/material/FormHelperText";
import { Formik, Form } from "formik";
import * as yup from "yup";
import SnackAlert from "../../../component/snackAlert/SnackAlert";
import LoadingRedux from "../../../component/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../component/loadingSmall/LoadingSmall";
import { fixNull } from "../../../services/fixNull";
import { fetchUserByUsername, updateUser, uploadUserImage, userActions } from "../../../features/account/userSlice";

const validationSchema = yup.object().shape({
	firstName: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام را وارد کنید"),
	address: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("آدرس را وارد کنید"),
	lastName: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام خانوادگی را وارد کنید"),
	nationalId: yup
		.number()
		.typeError("کد ملی باید عدد باشد")
		.required("کد ملی را وارد کنید"),
	contactNum: yup
		.number()
		.typeError("شماره موبایل باید عدد باشد")
		.required("شماره موبایل را وارد کنید"),
	email: yup
		.string()
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
			"ایمیل را با ساختار صحیح وارد کنید"
		)
		.required("ایمیل را وارد کنید"),
	gender: yup
		.boolean()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("جنسیت را انتخاب کنید"),
	education: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("آخرین مدرک تحصیلی را وارد کنید"),
	educationPlace: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("آخرین محل تحصیل را وارد کنید"),
	postCode: yup
		.number()
		.typeError("کد پستی باید عدد باشد")
		.required("کد پستی را وارد کنید"),
	lastOccupation: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("سمت شغلی قبلی را وارد کنید"),
	lastPlaceOfOccupation: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("محل کار قبلی را وارد کنید"),
	currentOccupation: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("سمت شغلی فعلی را وارد کنید"),
	manuscript: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("توضیحات را وارد کنید"),
});

const Input = styled("input")({
	display: "none",
});

export default function Profile(props) {
	const user = JSON.parse(localStorage.getItem("username"));

	const formRef = useRef();
	const dispatch = useDispatch();

	const data = useSelector((state) => state.user.user);
	const handleLoading = useSelector((state) => state.user.handleLoading);
	const ready = useSelector((state) => state.user.ready);
	const error = useSelector((state) => state.user.error);
	const handleError = useSelector((state) => state.user.handleError);

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
		dispatch(fetchUserByUsername(user));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "uploaded" || handleError === "success") {
			handleOpenSuccess("تصویر با موفقیت آپلود شد");
			dispatch(userActions.clearHandleError());
		} else if (
			handleError !== "success" &&
			handleError !== "" &&
			handleError !== "uploaded"
		) {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(userActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		firstName: fixNull(data?.firstName),
		address: fixNull(data?.address),
		lastName: fixNull(data?.lastName),
		nationalId: fixNull(data?.nationalId),
		contactNum: fixNull(data?.contactNum),
		email: fixNull(data?.email),
		gender: fixNull(data?.gender),
		education: fixNull(data?.education),
		educationPlace: fixNull(data?.educationPlace),
		postCode: fixNull(data?.postCode),
		lastOccupation: fixNull(data?.lastOccupation),
		lastPlaceOfOccupation: fixNull(data?.lastPlaceOfOccupation),
		currentOccupation: fixNull(data?.currentOccupation),
		manuscript: fixNull(data?.manuscript),
	};

	const submit = (data) => {
		dispatch(updateUser({ user, data })).unwrap();
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
			dispatch(uploadUserImage({ user, data }));
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

			{error !== "" || Object.keys(data ? data : {}).length === 0 || !ready ? (
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
							<div className="profile">
								<div className="mainPanelTitle bold">پروفایل من</div>
								<div className="secondaryPanelTitle">اطلاعات فردی</div>
								<div className="profileFieldContainer">
									<div
										className="profilePicture"
										style={
											data?.imageId !== ""
												? {
														backgroundImage: `url("http://beta843.psyport.agahpadidar.com/image/${data?.imageId}")`,
												  }
												: {}
										}
									>
										<label htmlFor="icon-button-file">
											<Input
												accept="image/*"
												id="icon-button-file"
												type="file"
												onChange={handleImageUpload}
											/>
											<IconButton
												aria-label="upload picture"
												component="span"
												color="success"
												size="large"
												sx={{ backgroundColor: "#ffffff" }}
											>
												{handleLoading ? (
													<LoadingSmall noMargin={true} />
												) : (
													<PhotoCamera />
												)}
											</IconButton>
										</label>
									</div>
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="نام"
											type="text"
											fullWidth
											variant="outlined"
											name="firstName"
											value={values.firstName}
											onChange={handleChange}
											error={touched.firstName && Boolean(errors.firstName)}
											helperText={touched.firstName && errors.firstName}
										/>
										<TextField
											className="profileInput"
											margin="dense"
											label="نام خانوادگی"
											type="text"
											fullWidth
											variant="outlined"
											name="lastName"
											value={values.lastName}
											onChange={handleChange}
											error={touched.lastName && Boolean(errors.lastName)}
											helperText={touched.lastName && errors.lastName}
										/>
									</div>
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="کد ملی"
											type="text"
											fullWidth
											variant="outlined"
											name="nationalId"
											value={values.nationalId}
											onChange={handleChange}
											error={touched.nationalId && Boolean(errors.nationalId)}
											helperText={touched.nationalId && errors.nationalId}
										/>
										<FormControl
											margin="dense"
											fullWidth
											className="profileInput"
										>
											<InputLabel
												error={touched.gender && Boolean(errors.gender)}
											>
												جنسیت
											</InputLabel>
											<Select
												labelId="gender"
												id="gender"
												variant="outlined"
												value={values.gender}
												onChange={(e) => {
													setFieldValue("gender", e.target.value);
												}}
												error={touched.gender && Boolean(errors.gender)}
												fullWidth
												label="جنسیت"
											>
												<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
													<em>انتخاب کنید</em>
												</MenuItem>
												<MenuItem
													value={true}
													sx={{ justifyContent: "flex-end" }}
												>
													مرد
												</MenuItem>
												<MenuItem
													value={false}
													sx={{ justifyContent: "flex-end" }}
												>
													زن
												</MenuItem>
											</Select>
											<FormHelperText
												error={touched.gender && Boolean(errors.gender)}
											>
												{touched.gender && errors.gender}
											</FormHelperText>
										</FormControl>
									</div>
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="شماره موبایل"
											type="tel"
											fullWidth
											variant="outlined"
											name="contactNum"
											value={values.contactNum}
											onChange={handleChange}
											error={touched.contactNum && Boolean(errors.contactNum)}
											helperText={touched.contactNum && errors.contactNum}
										/>
										<TextField
											className="profileInput"
											margin="dense"
											label="ایمیل"
											type="email"
											fullWidth
											variant="outlined"
											name="email"
											value={values.email}
											onChange={handleChange}
											error={touched.email && Boolean(errors.email)}
											helperText={touched.email && errors.email}
										/>
									</div>
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="آدرس"
											type="text"
											fullWidth
											variant="outlined"
											name="address"
											value={values.address}
											onChange={handleChange}
											error={touched.address && Boolean(errors.address)}
											helperText={touched.address && errors.address}
										/>
										<TextField
											className="profileInput"
											margin="dense"
											label="کد پستی"
											type="text"
											fullWidth
											variant="outlined"
											name="postCode"
											value={values.postCode}
											onChange={handleChange}
											error={touched.postCode && Boolean(errors.postCode)}
											helperText={touched.postCode && errors.postCode}
										/>
									</div>
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="توضیحات"
											type="text"
											fullWidth
											multiline
											minRows={2}
											maxRows={4}
											variant="outlined"
											name="manuscript"
											value={values.manuscript}
											onChange={handleChange}
											error={touched.manuscript && Boolean(errors.manuscript)}
											helperText={touched.manuscript && errors.manuscript}
										/>
									</div>
									{/* <DatePicker
					disableFuture
					label="Responsive"
					openTo="year"
					views={["year", "month", "day"]}
					value={value}
					onChange={(newValue) => {
						setValue(newValue);
					}}
					renderInput={(params) => <TextField {...params} />}
				/> */}
								</div>
								<div className="secondaryPanelTitle">اطلاعات تحصیلی</div>
								<div className="profileFieldContainer">
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="آخرین مدرک تحصیلی"
											type="text"
											fullWidth
											variant="outlined"
											name="education"
											value={values.education}
											onChange={handleChange}
											error={touched.education && Boolean(errors.education)}
											helperText={touched.education && errors.education}
										/>
										<TextField
											className="profileInput"
											margin="dense"
											label="آخرین محل تحصیل"
											type="text"
											fullWidth
											variant="outlined"
											name="educationPlace"
											value={values.educationPlace}
											onChange={handleChange}
											error={
												touched.educationPlace && Boolean(errors.educationPlace)
											}
											helperText={
												touched.educationPlace && errors.educationPlace
											}
										/>
									</div>
								</div>
								<div className="secondaryPanelTitle">اطلاعات شغلی</div>
								<div className="profileFieldContainer">
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="سمت شغلی فعلی"
											type="text"
											fullWidth
											variant="outlined"
											name="currentOccupation"
											value={values.currentOccupation}
											onChange={handleChange}
											error={
												touched.currentOccupation &&
												Boolean(errors.currentOccupation)
											}
											helperText={
												touched.currentOccupation && errors.currentOccupation
											}
										/>
									</div>
									<div className="profileInputContainer">
										<TextField
											className="profileInput"
											margin="dense"
											label="سمت شغلی قبلی"
											type="text"
											fullWidth
											variant="outlined"
											name="lastOccupation"
											value={values.lastOccupation}
											onChange={handleChange}
											error={
												touched.lastOccupation && Boolean(errors.lastOccupation)
											}
											helperText={
												touched.lastOccupation && errors.lastOccupation
											}
										/>
										<TextField
											className="profileInput"
											margin="dense"
											label="محل کار قبلی"
											type="text"
											fullWidth
											variant="outlined"
											name="lastPlaceOfOccupation"
											value={values.lastPlaceOfOccupation}
											onChange={handleChange}
											error={
												touched.lastPlaceOfOccupation &&
												Boolean(errors.lastPlaceOfOccupation)
											}
											helperText={
												touched.lastPlaceOfOccupation &&
												errors.lastPlaceOfOccupation
											}
										/>
									</div>
								</div>
								{/* <div className="secondaryPanelTitle">تغییر گذرواژه</div>
			<div className="profileFieldContainer">
				<div className="profileInputContainer">
					<TextField
						className="profileInput"
						margin="dense"
						label="گذرواژه قدیمی"
						type="password"
						fullWidth
						variant="outlined"
					/>
					<TextField
						className="profileInput"
						margin="dense"
						label="گذرواژه جدید"
						type="password"
						fullWidth
						variant="outlined"
					/>
				</div>
				<div className="profileInputContainer">
					<TextField
						className="profileInput"
						margin="dense"
						label="تکرار گذرواژه جدید"
						type="password"
						fullWidth
						variant="outlined"
					/>
				</div>
			</div> */}
								{/* <div className="secondaryPanelTitle">تنظیمات</div>
			<div className="profileFieldContainer">
				<div className="profileInputContainer">
					<TextField
						className="profileInput"
						margin="dense"
						label="کد رنگی"
						type="color"
						fullWidth
						variant="outlined"
						InputLabelProps={{ shrink: true }}
					/>
				</div>
			</div> */}
							</div>
							<div className="profileFieldContainer">
								<div className="profileInputContainer">
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
										ذخیره
										{handleLoading ? <LoadingSmall /> : null}
									</Button>
								</div>
							</div>
						</Form>
					)}
				</Formik>
			)}
		</>
	);
}
