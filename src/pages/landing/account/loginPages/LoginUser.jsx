import React, { useEffect, useRef, useState } from "react";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import { useDispatch, useSelector } from "react-redux";
import FormHelperText from "@mui/material/FormHelperText";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { userLogin } from "../../../../features/account/loginSlice";
import LoadingSmall from "../../../../component/loadingSmall/LoadingSmall";

const initialValues = {
	username: "",
	password: "",
};

const validationSchema = yup.object().shape({
	username: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام  کاربری را وارد کنید"),
	password: yup.string().required("پسورد را وارد کنید"),
});

export default function LoginUser() {
	// eslint-disable-next-line no-unused-vars
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const error = useSelector((state) => state.login.error);
	const loading = useSelector((state) => state.login.loading);
	const logged = useSelector((state) => state.login.logged);

	const [errorMessage, setErrorMessage] = useState("");
	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	useEffect(() => {
		const user = JSON.parse(localStorage.getItem("username"));
		if (logged && user) navigate("/user");
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [loading]);

	useEffect(() => {
		// if (error !== "") setErrorMessage("مشکلی پیش آمده است: " + error);
		if (error !== "")
			if (error !== "")
				setErrorMessage("رمز عبور یا شناسه کاربری اشتباه وارد شده است");

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error]);

	const submit = (values) => {
		dispatch(userLogin(values));
	};

	const [showPassword, setShowPassword] = React.useState(false);

	return (
		<>
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
								<div className="loginTitle bold">ورود به حساب کاربری</div>

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

								<div className="loginButtonContainer">
									<Button
										onClick={(event) => handleSubmit()}
										variant="outlined"
										disabled={loading}
									>
										ورود
										{loading ? <LoadingSmall /> : null}
									</Button>

									<p style={{ color: "red" }}> {errorMessage}</p>
								</div>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</>
	);
}
