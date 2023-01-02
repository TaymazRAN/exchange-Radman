import React, { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { useDispatch } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import {
	registerActions,
	userRegister,
} from "../../../features/account/registerSlice";
import SnackAlert from "../../../component/snackAlert/SnackAlert";
import LoadingSmall from "../../../component/loadingSmall/LoadingSmall";

const validationSchema = yup.object().shape({
	firstName: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام را وارد کنید"),
	lastName: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام خانوادگی را وارد کنید"),
	address: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("آدرس را وارد کنید"),
	contactNum: yup
		.number()
		.typeError("شماره تماس باید عدد باشد")
		.required("شماره تماس را وارد کنید"),
	nationalId: yup
		.number()
		.typeError("کد ملی باید عدد باشد")
		.required("کد ملی را وارد کنید"),
	username: yup
		.string()
		.matches(
			/^[A-Za-z][A-Za-z0-9_]{5,}$/,
			"باید شامل 5 حرف باشد و با حرف انگلیسی شروع شود. فقط حروف انگلیسی، شماره ها و زیر خط مجاز است."
		)
		.required("نام کاربری را وارد کنید"),
	password: yup
		.string()
		.matches(
			/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
			"باید شامل 8 حرف، یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی، یک شماره و یک علامت خاص باشد."
		)
		.required("گذرواژه را وارد کنید"),
	currentOccupation: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("شغل فعلی را انتخاب کنید"),
	gender: yup
		.boolean()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("جنسیت را انتخاب کنید"),
	email: yup
		.string()
		.matches(
			/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
			"ایمیل را با ساختار صحیح وارد کنید"
		)
		.required("ایمیل را وارد کنید"),
});

export default function FormRegister() {
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const handleLoading = useSelector((state) => state.register.handleLoading);
	// const error = useSelector((state) => state.register.error);
	const handleError = useSelector((state) => state.register.handleError);
	// const ready = useSelector((state) => state.register.ready);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/login/user`);
				dispatch(registerActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد: " + handleError);
			dispatch(registerActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

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

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(userRegister(values)).unwrap();
	};

	const [showPassword, setShowPassword] = React.useState(false);

	const initialValues = {
		username: "",
		password: "",
		firstName: "",
		address: "",
		lastName: "",
		nationalId: "",
		contactNum: "",
		email: "",
		currentOccupation: "",
		gender: "",
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

			<Formik
				initialValues={initialValues}
				validationSchema={validationSchema}
				onSubmit={submit}
				innerRef={formRef}
			>
				{({ handleChange, values, setFieldValue, errors, touched }) => (
					<div
						style={{
							display: "flex",
							alignItems: "center",
							justifyContent: "center",
							marginBottom: "40px",
							padding: "20px",
						}}
					>
						<Form className="widthFix signup boxshodow1">
							<div className="loginForm" dir="rtl">
								<div className="loginTitle bold">ساخت حساب کاربری</div>
								<div className="formInputContainer signup">
									<TextField
										className="formInput signup"
										variant="outlined"
										label="نام"
										id="firstName"
										value={values.firstName}
										onChange={handleChange}
										error={touched.firstName && Boolean(errors.firstName)}
										helperText={touched.firstName && errors.firstName}
									/>
									<TextField
										className="formInput signup"
										variant="outlined"
										label="نام خانوادگی"
										id="lastName"
										value={values.lastName}
										onChange={handleChange}
										error={touched.lastName && Boolean(errors.lastName)}
										helperText={touched.lastName && errors.lastName}
									/>
								</div>
								<div className="formInputContainer signup">
									<TextField
										className="formInput signup"
										variant="outlined"
										label="شناسه کاربری"
										id="username"
										value={values.username}
										onChange={handleChange}
										error={touched.username && Boolean(errors.username)}
										helperText={touched.username && errors.username}
									/>
									<FormControl className="formInput signup" variant="outlined">
										<InputLabel
											error={touched.password && Boolean(errors.password)}
										>
											رمز عبور
										</InputLabel>
										<OutlinedInput
											type={showPassword ? "text" : "password"}
											id="password"
											value={values.password}
											onChange={handleChange}
											error={touched.password && Boolean(errors.password)}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
														aria-label="toggle password visibility"
														onClick={(event) => setShowPassword(!showPassword)}
														edge="end"
													>
														{showPassword ? (
															<VisibilityOff className="passwordIcon" />
														) : (
															<Visibility className="passwordIcon" />
														)}
													</IconButton>
												</InputAdornment>
											}
											label="رمز عبور"
										/>
										<FormHelperText
											error={touched.password && Boolean(errors.password)}
										>
											{touched.password && errors.password}
										</FormHelperText>
									</FormControl>
								</div>
								<div className="formInputContainer signup">
									<TextField
										className="formInput signup"
										variant="outlined"
										type="text"
										label="کد ملی"
										id="nationalId"
										value={values.nationalId}
										onChange={handleChange}
										error={touched.nationalId && Boolean(errors.nationalId)}
										helperText={touched.nationalId && errors.nationalId}
									/>
									<TextField
										className="formInput signup"
										variant="outlined"
										type="text"
										label="آدرس"
										id="address"
										value={values.address}
										onChange={handleChange}
										error={touched.address && Boolean(errors.address)}
										helperText={touched.address && errors.address}
									/>
								</div>
								<div className="formInputContainer signup">
									<TextField
										className="formInput signup"
										variant="outlined"
										type="email"
										label="ایمیل"
										id="email"
										value={values.email}
										onChange={handleChange}
										error={touched.email && Boolean(errors.email)}
										helperText={touched.email && errors.email}
									/>
									<TextField
										className="formInput signup"
										variant="outlined"
										type="tel"
										label="شماره تماس"
										id="contactNum"
										value={values.contactNum}
										onChange={handleChange}
										error={touched.contactNum && Boolean(errors.contactNum)}
										helperText={touched.contactNum && errors.contactNum}
									/>
								</div>
								<div className="formInputContainer signup">
									<FormControl fullWidth className="formInput signup">
										<FormLabel error={touched.gender && Boolean(errors.gender)}>
											جنسیت
										</FormLabel>
										<RadioGroup
											row
											id="gender"
											value={values.gender}
											onChange={(e) => {
												setFieldValue(
													"gender",
													e.target.value === "true" ? true : false
												);
											}}
											error={touched.gender && Boolean(errors.gender)}
										>
											<FormControlLabel
												value={true}
												control={<Radio />}
												label="مرد"
												sx={{ color: "#222222" }}
											/>
											<FormControlLabel
												value={false}
												control={<Radio />}
												label="زن"
												sx={{ color: "#222222" }}
											/>
										</RadioGroup>
										<FormHelperText
											error={touched.gender && Boolean(errors.gender)}
										>
											{touched.gender && errors.gender}
										</FormHelperText>
									</FormControl>
									<div className="formInput signup">
										<TextField
											className="formInput signup"
											variant="outlined"
											type="text"
											label="شغل فعلی"
											id="currentOccupation"
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
								</div>
								<div className="loginButtonContainer">
									<Button
										onClick={(event) => handleSubmit()}
										variant="outlined"
										disabled={handleLoading}
									>
										ساخت حساب کاربری
										{handleLoading ? <LoadingSmall /> : null}
									</Button>
								</div>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</>
	);
}
