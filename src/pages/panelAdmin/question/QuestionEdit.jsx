import React, { useRef, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import { fixNull } from "../../../services/fixNull";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import {
  fetchManagerByID,
  managerActions,
  updateManager,
  uploadManagerImage,
} from "../../../features/account/managerSlice";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("نام مدیر را وارد کنید"),
});

export default function QuestionEdit(props) {
  const { id } = useParams();

  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.manager.manager);
  const [post, setPost] = useState(undefined);
  const handleLoading = useSelector((state) => state.manager.handleLoading);
  const ready = useSelector((state) => state.manager.ready);
  const error = useSelector((state) => state.manager.error);
  const handleError = useSelector((state) => state.manager.handleError);

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
    dispatch(fetchManagerByID(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setPost(data);
      console.log("data...", data);
      console.log("post...", post);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (handleError === "success") {
      handleOpenSuccess("عملیات با موفقیت انجام شد");
      setTimeout(() => {
        navigate(`/admin/manager`);
        dispatch(managerActions.clearHandleError());
      }, 1500);
    } else if (handleError === "uploaded") {
      handleOpenSuccess("تصویر با موفقیت آپلود شد");
      dispatch(managerActions.clearHandleError());
    } else if (
      handleError !== "success" &&
      handleError !== "" &&
      handleError !== "uploaded"
    ) {
      handleOpenError("عملیات با مشکل مواجه شد");
      dispatch(managerActions.clearHandleError());
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [handleError]);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const initialValues = {
    id: fixNull(post?.id),
    fullName: fixNull(post?.fullName),
    body: fixNull(post?.body),
    image: fixNull(post?.image),
    responsible: fixNull(post?.responsible),
    description: fixNull(post?.description),
  };

  const submit = (data) => {
    // dispatch(updateManager({ user: post.id, data })).unwrap();
    console.log("data pass", data);

    dispatch(updateManager({ user: post.id, data })).unwrap();
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
      dispatch(uploadManagerImage({ user: post.username, data }));
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
          {/* fullName: "", image: "", responsible: "", body: "", description: "", */}
          {({ handleChange, values, setFieldValue, errors, touched }) => (
            <Form>
              <div className="mainPanelTitle bold">ویرایش مدیر</div>

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

                <Button
                  variant="outlined"
                  component="label"
                  margin="dense"
                  color="info"
                  id="logoFileName"
                  // sx={{ marginLeft: "15px" }}
                  onChange={handleImageUpload}
                  fullWidth
                >
                  آپلود تصویر
                  {handleLoading ? <LoadingSmall /> : null}
                  <input type="file" hidden />
                </Button>

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
              </div>

              <div className="profileInputContainer">
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="image"
                  label="image "
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.image}
                  onChange={handleChange}
                  error={touched.image && Boolean(errors.image)}
                  helperText={touched.image && errors.image}
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
                    <MenuItem
                      value={values.responsible}
                      sx={{ justifyContent: "flex-end" }}
                    >
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
                <TextField
                  dir="rtl"
                  margin="dense"
                  id="description"
                  label="description "
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
                <div style={{ display: "flex" }}>
                  <div className="BtnBottom">
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
                </div>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
