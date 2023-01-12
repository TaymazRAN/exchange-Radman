import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import {
	managerRegister,
	registerActions,
} from "../../../features/account/registerSlice";

const validationSchema = yup.object().shape({
	name: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نام مدیر را وارد کنید"),
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
	// orgId: yup
	//   .string()
	//   // .matches(
	//   // 	/ /,
	//   // 	""
	//   // )
	//   .required("سازمان را انتخاب کنید"),
	isExecutive: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("نوع مدیر انتخاب کنید"),
});

export default function ManagerAdd(props) {
	const organid = JSON.parse(localStorage.getItem("organid"));
	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const handleLoading = useSelector((state) => state.manager.handleLoading);
	const error = useSelector((state) => state.manager.error);
	const handleError = useSelector((state) => state.manager.handleError);
	const ready = useSelector((state) => state.manager.ready);

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
				navigate(`/organization/manager`);
				dispatch(registerActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(registerActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		orgId: organid,
		username: "",
		password: "",
		phoneNum: "",
		email: "",
		name: "",
		isExecutive: false,
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		dispatch(managerRegister(values)).unwrap();
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
							<div className="mainPanelTitle bold">اضافه کردن مدیر</div>
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
								<FormControl margin="dense" fullWidth className="profileInput">
									<InputLabel
										error={touched.isExecutive && Boolean(errors.isExecutive)}
									>
										نوع مدیر
									</InputLabel>
									<Select
										labelId="isExecutive"
										id="isExecutive"
										variant="outlined"
										value={values.isExecutive}
										onChange={(e) => {
											setFieldValue("isExecutive", e.target.value);
										}}
										error={touched.isExecutive && Boolean(errors.isExecutive)}
										fullWidth
										label="نوع مدیر"
									>
										<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
											<em>انتخاب کنید</em>
										</MenuItem>
										<MenuItem value={true} sx={{ justifyContent: "flex-end" }}>
											مدیر اصلی
										</MenuItem>
										<MenuItem value={false} sx={{ justifyContent: "flex-end" }}>
											مدیر عادی
										</MenuItem>
									</Select>
									<FormHelperText
										error={touched.isExecutive && Boolean(errors.isExecutive)}
									>
										{touched.isExecutive && errors.isExecutive}
									</FormHelperText>
								</FormControl>
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
								<TextField
									dir="rtl"
									margin="dense"
									id="username"
									label="نام کاربری"
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.username}
									onChange={handleChange}
									error={touched.username && Boolean(errors.username)}
									helperText={touched.username && errors.username}
								/>
								<TextField
									dir="rtl"
									margin="dense"
									id="password"
									label="گذرواژه"
									type="password"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.password}
									onChange={handleChange}
									error={touched.password && Boolean(errors.password)}
									helperText={touched.password && errors.password}
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
