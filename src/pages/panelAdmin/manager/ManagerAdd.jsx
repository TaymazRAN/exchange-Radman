import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import { registerActions } from "../../../features/account/registerSlice";
import { addManager } from "../../../features/account/managerSlice";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("نام مدیر را وارد کنید"),

  // password: yup
  //   .string()
  //   .matches(
  //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
  //     "باید شامل 8 حرف، یک حرف بزرگ انگلیسی، یک حرف کوچک انگلیسی، یک شماره و یک علامت خاص باشد."
  //   )
  //   .required("گذرواژه را وارد کنید"),
  // phoneNum: yup
  //   .number()
  //   .typeError("شماره تماس باید عدد باشد")
  //   .required("شماره تماس را وارد کنید"),
  // email: yup
  //   .string()
  //   .matches(
  //     /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i,
  //     "ایمیل را با ساختار صحیح وارد کنید"
  //   )
  //   .required("ایمیل را وارد کنید"),
});

export default function ManagerAdd(props) {
  // const organid = JSON.parse(localStorage.getItem("organid"));
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
        navigate(`/admin/manager`);
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
    fullName: "",
    image: "",
    responsible: "",
    body: "",
    description: "",
  };

  const submit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    dispatch(addManager(values)).unwrap();
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
              <div className="mainPanelTitle bold">اضافه کردن هیات مدیره </div>
              <div className="profileInputContainer">
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="fullName"
                  label="نام"
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.fullName}
                  onChange={handleChange}
                  error={touched.fullName && Boolean(errors.fullName)}
                  helperText={touched.fullName && errors.fullName}
                />
                <FormControl margin="dense" fullWidth className="profileInput">
                  <InputLabel
                    error={touched.responsible && Boolean(errors.responsible)}
                  >
                    نوع مدیر
                  </InputLabel>
                  <Select
                    labelId="responsible"
                    id="responsible"
                    variant="outlined"
                    value={values.responsible}
                    onChange={(e) => {
                      setFieldValue("responsible", e.target.value);
                    }}
                    error={touched.responsible && Boolean(errors.responsible)}
                    fullWidth
                    label="نوع مدیر"
                  >
                    <MenuItem value="" sx={{ justifyContent: "flex-end" }}>
                      <em>انتخاب کنید</em>
                    </MenuItem>
                    <MenuItem
                      value={"Admin"}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      مدیر اصلی
                    </MenuItem>
                    <MenuItem
                      value={"Users"}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      مدیر عادی
                    </MenuItem>
                  </Select>
                  <FormHelperText
                    error={touched.responsible && Boolean(errors.responsible)}
                  >
                    {touched.responsible && errors.responsible}
                  </FormHelperText>
                </FormControl>
              </div>
              <div className="profileInputContainer">
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="image"
                  label="عکس"
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.image}
                  onChange={handleChange}
                  error={touched.image && Boolean(errors.image)}
                  helperText={touched.image && errors.image}
                />
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="description"
                  label="description"
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.description}
                  onChange={handleChange}
                  error={touched.description && Boolean(errors.description)}
                  helperText={touched.description && errors.description}
                />
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="body"
                  label="body"
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.body}
                  onChange={handleChange}
                  error={touched.body && Boolean(errors.body)}
                  helperText={touched.body && errors.body}
                />
              </div>

              <div className="profileInputContainer">
                <div style={{ display: "flex" }}>
                  <div className="BtnBottom">
                    {" "}
                    <Button
                      variant="outlined"
                      className="profileInput"
                      component="label"
                      margin="dense"
                      color="error"
                      onClick={(event) => navigate("/admin/manager")}
                      id="logoFileName"
                      sx={{ padding: "15px 0", marginTop: "4px" }}
                      fullWidth
                    >
                      انصراف
                    </Button>
                  </div>
                  <div className="BtnBottom">
                    {" "}
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
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
