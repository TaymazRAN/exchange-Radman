import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { Formik, Form, Field, FieldArray, getIn } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import { fetchFunctions } from "../../../features/package/functionSlice";
import { addReport, reportActions } from "../../../features/report/reportSlice";
import { fixNull } from "../../../services/fixNull";

export default function PackageReportAdd(props) {
	const { id } = useParams();

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const dataFunction = useSelector((state) => state.function.data);
	const handleLoading = useSelector((state) => state.report.handleLoading);
	const error = useSelector((state) => state.function.error);
	const handleError = useSelector((state) => state.report.handleError);
	const ready = useSelector((state) => state.function.ready);

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
		dispatch(fetchFunctions());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (handleError === "success") {
			handleOpenSuccess("عملیات با موفقیت انجام شد");
			setTimeout(() => {
				navigate(`/admin/report`);
				dispatch(reportActions.clearHandleError());
			}, 1500);
		} else if (handleError !== "success" && handleError !== "") {
			handleOpenError("عملیات با مشکل مواجه شد");
			dispatch(reportActions.clearHandleError());
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [handleError]);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const initialValues = {
		packageId: fixNull(id),
		manuscript: "",
		numberOfFunctions: "",
		reportValues: [],
	};

	const validationSchema = yup.object().shape({
		packageId: yup.string().required("شناسه اجرا را انتخاب کنید"),
		manuscript: yup.string().required("نوشته را وارد کنید"),
		numberOfFunctions: yup.string().required("تعداد عملکرد را انتخاب کنید"),
		reportValues: yup.array().of(
			yup.object().shape({
				functionId: yup.string().required("عملکرد را انتخاب کنید"),
				value: yup
					.number()
					.min(0, "نمره حداقل 1 می باشد")
					.max(10, "نمره حداکثر 10 می باشد")
					.typeError("نمره باید عدد باشد")
					.required("نمره را وارد کنید"),
			})
		),
	});

	function onChangeTickets(e, field, values, setValues) {
		// update dynamic form
		const reportValues = [...values.reportValues];
		const numberOfFunctions = e.target.value || 0;
		const previousNumber = parseInt(field.value || "0");
		if (previousNumber < numberOfFunctions) {
			for (let i = previousNumber; i < numberOfFunctions; i++) {
				reportValues.push({ functionId: "", value: "" });
			}
		} else {
			for (let i = previousNumber; i >= numberOfFunctions; i--) {
				reportValues.splice(i, 1);
			}
		}
		setValues({ ...values, reportValues });

		// call formik onChange method
		field.onChange(e);
	}

	const submit = (values) => {
		dispatch(addReport(values)).unwrap();
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
					initialValues={initialValues}
					validationSchema={validationSchema}
					onSubmit={submit}
					innerRef={formRef}
				>
					{({
						errors,
						values,
						setFieldValue,
						touched,
						setValues,
						handleChange,
					}) => (
						<Form>
							<div className="mainPanelTitle bold">اضافه کردن کارنامه</div>
							<div className="profileInputContainer">
								<Field name="numberOfFunctions">
									{({ field }) => (
										<>
											<TextField
												autoFocus
												dir="rtl"
												margin="dense"
												id="packageId"
												label="شناسه اجرا"
												type="text"
												fullWidth
												variant="outlined"
												className="profileInput"
												value={values.packageId}
												onChange={handleChange}
												error={touched.packageId && Boolean(errors.packageId)}
												helperText={touched.packageId && errors.packageId}
												disabled
											/>

											<FormControl
												fullWidth
												className="selectContainer profileInput"
											>
												<InputLabel
													error={
														touched.numberOfFunctions &&
														Boolean(errors.numberOfFunctions)
													}
													id="numberOfFunctions"
												>
													تعداد عملکرد
												</InputLabel>
												<Select
													{...field}
													labelId="numberOfFunctions"
													id="numberOfFunctions"
													variant="outlined"
													fullWidth
													label="تعداد عملکرد"
													value={values.numberOfFunctions}
													// onChange={(e) => {
													// 	setFieldValue("numberOfFunctions", e.target.value);
													// }}
													onChange={(e) =>
														onChangeTickets(e, field, values, setValues)
													}
													error={
														touched.numberOfFunctions &&
														Boolean(errors.numberOfFunctions)
													}
												>
													<MenuItem
														value=""
														sx={{ justifyContent: "flex-end" }}
													>
														<em>انتخاب کنید</em>
													</MenuItem>
													{[3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
														<MenuItem
															key={i}
															value={i}
															sx={{ justifyContent: "flex-end" }}
														>
															{i}
														</MenuItem>
													))}
												</Select>
												<FormHelperText
													error={
														touched.numberOfFunctions &&
														Boolean(errors.numberOfFunctions)
													}
												>
													{touched.numberOfFunctions &&
														errors.numberOfFunctions}
												</FormHelperText>
											</FormControl>
										</>
									)}
								</Field>
							</div>
							<div className="profileInputContainer">
								<TextField
									autoFocus
									dir="rtl"
									margin="dense"
									id="manuscript"
									label="توضیحات"
									multiline
									maxRows={4}
									minRows={2}
									type="text"
									fullWidth
									variant="outlined"
									className="profileInput"
									value={values.manuscript}
									onChange={handleChange}
									error={touched.manuscript && Boolean(errors.manuscript)}
									helperText={touched.manuscript && errors.manuscript}
								/>
							</div>
							<FieldArray name="reportValues">
								{() =>
									values.reportValues.map((func, index) => {
										const functionId = `reportValues[${index}].functionId`;
										const touchedFunctionId = getIn(touched, functionId);
										const errorFunctionId = getIn(errors, functionId);

										const value = `reportValues[${index}].value`;
										const touchedValue = getIn(touched, value);
										const errorValue = getIn(errors, value);
										return (
											<div className="profileInputContainer">
												<Autocomplete
													fullWidth
													margin="dense"
													className="profileInput"
													options={dataFunction.map((item) => {
														return { ...item, label: item.name };
													})}
													// getOptionLabel={(option) => option.name}
													onChange={(e, value) => {
														setFieldValue(
															functionId,
															value !== null
																? value.id
																: initialValues.reportValues[index].functionId
														);
													}}
													renderInput={(params) => (
														<TextField
															margin="normal"
															label={`نام عملکرد ${index + 1}`}
															fullWidth
															name={functionId}
															value={func.functionId}
															error={
																touchedFunctionId && Boolean(errorFunctionId)
															}
															helperText={touchedFunctionId && errorFunctionId}
															{...params}
														/>
													)}
												/>
												<TextField
													autoFocus
													dir="rtl"
													margin="dense"
													name={value}
													label={`نمره ${index + 1}`}
													type="number"
													fullWidth
													variant="outlined"
													className="profileInput"
													value={func.value}
													onChange={handleChange}
													error={touchedValue && Boolean(errorValue)}
													helperText={touchedValue && errorValue}
												/>
											</div>
										);
									})
								}
							</FieldArray>
							<div className="profileInputContainer">
								<Button
									variant="outlined"
									className="profileInput"
									component="label"
									margin="dense"
									color="error"
									onClick={(event) => navigate("/admin/task")}
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
