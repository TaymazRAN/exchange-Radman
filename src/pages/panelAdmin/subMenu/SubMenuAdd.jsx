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
// import { registerActions } from "../../../features/account/registerSlice";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  addsubMenu,
  subMenuActions,
} from "../../../features/account/subMenuSlice";
import Editor from "../../../components/editor/Editor";

const validationSchema = yup.object().shape({
  title: yup.string().required("  عنوان را وارد کنید"),

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

export default function SubMenuAdd(props) {
  // const organid = JSON.parse(localStorage.getItem("organid"));
  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();

  const handleLoading = useSelector((state) => state.subMenu.handleLoading);
  const error = useSelector((state) => state.subMenu.error);
  const handleError = useSelector((state) => state.subMenu.handleError);
  const ready = useSelector((state) => state.subMenu.ready);

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
        navigate(`/admin/subMenu`);
        dispatch(subMenuActions.clearHandleError());
      }, 1500);
    } else if (handleError !== "success" && handleError !== "") {
      handleOpenError("عملیات با مشکل مواجه شد");
      dispatch(subMenuActions.clearHandleError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleError]);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const initialValues = {
    title: "",
    body: "",
    groupType: "",
  };

  const submit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    dispatch(addsubMenu(values)).unwrap();
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
              <div className="mainPanelTitle bold">اضافه کردن منو </div>
              <div className="profileInputContainer">
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="title"
                  label="عنوان"
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.title}
                  onChange={handleChange}
                  error={touched.title && Boolean(errors.title)}
                  helperText={touched.title && errors.title}
                />

                <TextField
                  dir="rtl"
                  margin="dense"
                  id="body"
                  label="body "
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.body}
                  onChange={handleChange}
                  error={touched.body && Boolean(errors.body)}
                  helperText={touched.body && errors.body}
                />
                <Editor
                  dir="rtl"
                  id="body"
                  // label="body"
                  placeholder="body وارد  کن  "
                  value={values.body}
                  onChange={handleChange}
                  // error={touched.body && Boolean(errors.body)}
                  // helperText={touched.body && errors.body}
                />
                <FormControl margin="dense" fullWidth className="profileInput">
                  <InputLabel
                    error={touched.responsible && Boolean(errors.responsible)}
                  >
                    نوع منو
                  </InputLabel>
                  <Select
                    labelId="groupType"
                    id="groupType"
                    variant="outlined"
                    value={values.groupType}
                    onChange={(e) => {
                      setFieldValue("groupType", e.target.value);
                    }}
                    error={touched.groupType && Boolean(errors.groupType)}
                    fullWidth
                    label="نوع منو"
                  >
                    <MenuItem value="" sx={{ justifyContent: "flex-end" }}>
                      <em>انتخاب کنید</em>
                    </MenuItem>
                    <MenuItem
                      value={"About"}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      About
                    </MenuItem>
                    <MenuItem
                      value={"Landing"}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      Landing
                    </MenuItem>
                    <MenuItem
                      value={"Service"}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      Service
                    </MenuItem>
                    <MenuItem
                      value={"Platform"}
                      sx={{ justifyContent: "flex-end" }}
                    >
                      Platform
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
                <div style={{ display: "flex" }}>
                  <div className="BtnBottom">
                    {" "}
                    <Button
                      variant="outlined"
                      className="profileInput"
                      component="label"
                      margin="dense"
                      color="error"
                      onClick={(event) => navigate("/admin/subMenu")}
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
