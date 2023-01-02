import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import { FormControl } from "@mui/material";
import { Formik, Form } from "formik";
import * as yup from "yup";
import {
	selectAllPosts as selectAllManagers,
	fetchManager,
} from "../manager/managerSlice";
import { useNavigate } from "react-router-dom";
import { addNewPost } from "./accessSlice";
import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import { fetchDepartments } from "../../../features/department/departmentSlice";

const initialValues = {
	managerUsername: "",
	departmentId: "",
	managerAccess: "",
};

const validationSchema = yup.object().shape({
	managerUsername: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("مدیر را انتخاب کنید"),
	departmentId: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("دپارتمان را انتخاب کنید"),
	managerAccess: yup
		.string()
		// .matches(
		// 	/ /,
		// 	""
		// )
		.required("سطح دسترسی را انتخاب کنید"),
});

export default function AccessAdd(props) {
	const organid = JSON.parse(localStorage.getItem("organid"));

	const navigate = useNavigate();
	const formRef = useRef();
	const dispatch = useDispatch();

	const dataManager = useSelector((state) => selectAllManagers(state));
	const dataDepartment = useSelector((state) => state.department.data);

	React.useEffect(() => {
		dispatch(fetchManager());
		dispatch(fetchDepartments(organid));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleSubmit = () => {
		if (formRef.current) {
			formRef.current.handleSubmit();
		}
	};

	const submit = (values) => {
		// alert(JSON.stringify(values, null, 2));
		try {
			dispatch(addNewPost(values)).unwrap();
			console.log(values);
			navigate(`/organization/access`);
		} catch (err) {
			console.error("Failed to save the post", err);
		}
	};

	return (
		<Formik
			{...props}
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={submit}
			innerRef={formRef}
		>
			{({ handleChange, values, setFieldValue, errors, touched }) => (
				<Form>
					<div className="mainPanelTitle bold">اضافه کردن کارمند</div>
					<div className="profileInputContainer">
						<Autocomplete
							fullWidth
							id="managerUsername"
							name="managerUsername"
							margin="dense"
							className="profileInput"
							options={dataManager.map((item) => {
								return { ...item, label: item.username };
							})}
							// getOptionLabel={(option) => option.name}
							onChange={(e, value) => {
								setFieldValue(
									"managerUsername",
									value !== null
										? value.username
										: initialValues.managerUsername
								);
							}}
							renderInput={(params) => (
								<TextField
									margin="normal"
									label="نام کاربری"
									fullWidth
									name="managerUsername"
									value={values.managerUsername}
									error={
										touched.managerUsername && Boolean(errors.managerUsername)
									}
									helperText={touched.managerUsername && errors.managerUsername}
									{...params}
								/>
							)}
						/>
						<Autocomplete
							fullWidth
							id="departmentId"
							name="departmentId"
							margin="dense"
							className="profileInput"
							options={dataDepartment.map((item) => {
								return { ...item, label: item.name };
							})}
							// getOptionLabel={(option) => option.name}
							onChange={(e, value) => {
								setFieldValue(
									"departmentId",
									value !== null ? value.id : initialValues.departmentId
								);
							}}
							renderInput={(params) => (
								<TextField
									margin="normal"
									label="دپارتمان"
									fullWidth
									name="departmentId"
									value={values.departmentId}
									error={touched.departmentId && Boolean(errors.departmentId)}
									helperText={touched.departmentId && errors.departmentId}
									{...params}
								/>
							)}
						/>
					</div>
					<div className="profileInputContainer">
						<FormControl fullWidth className="selectContainer profileInput">
							<InputLabel
								error={touched.managerAccess && Boolean(errors.managerAccess)}
								id="managerAccessLabel"
							>
								سطح دسترسی
							</InputLabel>
							<Select
								labelId="managerAccessLabel"
								id="managerAccess"
								variant="outlined"
								fullWidth
								label="سطح دسترسی"
								value={values.managerAccess}
								onChange={(e) => {
									setFieldValue("managerAccess", e.target.value);
								}}
								error={touched.managerAccess && Boolean(errors.managerAccess)}
							>
								<MenuItem value="" sx={{ justifyContent: "flex-end" }}>
									<em>انتخاب کنید</em>
								</MenuItem>
								<MenuItem value={"Read"} sx={{ justifyContent: "flex-end" }}>
									خواندن
								</MenuItem>
								<MenuItem value={"Manage"} sx={{ justifyContent: "flex-end" }}>
									مدیریت
								</MenuItem>
							</Select>
							<FormHelperText
								error={touched.managerAccess && Boolean(errors.managerAccess)}
							>
								{touched.managerAccess && errors.managerAccess}
							</FormHelperText>
						</FormControl>
					</div>
					<div className="profileInputContainer">
						<Button
							variant="outlined"
							className="profileInput"
							component="label"
							margin="dense"
							color="error"
							onClick={(event) => navigate("/organization/employee")}
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
						</Button>
					</div>
				</Form>
			)}
		</Formik>
	);
}
