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
  fetchManagerByID,
  managerActions,
  updateManager,
  uploadManagerImage,
} from "../../../features/account/managerSlice";

const validationSchema = yup.object().shape({
  fullName: yup.string().required("نام مدیر را وارد کنید"),
});

export default function ManagerEdit(props) {
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
      console.log(data);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (handleError === "success") {
      handleOpenSuccess("عملیات با موفقیت انجام شد");
      setTimeout(() => {
        navigate(`/organization/manager`);
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
    fullName: fixNull(post?.fullName),
    body: fixNull(post?.body),
  };

  const submit = (data) => {
    dispatch(updateManager({ user: post.id, data })).unwrap();
  };

  // const handleImageUpload = async (event) => {
  //   var data = new FormData();
  //   var file = event.target.files[0];
  //   if (
  //     file.type === "image/jpeg" ||
  //     file.type === "image/jpg" ||
  //     file.type === "image/png"
  //   ) {
  //     data.append("formFile", file);
  //     dispatch(uploadManagerImage({ user: post.username, data }));
  //   } else {
  //     handleOpenError("فرمت تصویر باید jpg, jpeg یا png باشد");
  //   }
  // };

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
              <div className="mainPanelTitle bold">
                ویرایش مدیر
                {/* <Button
                  variant="outlined"
                  component="label"
                  margin="dense"
                  color="info"
                  id="logoFileName"
                  sx={{ marginLeft: "15px" }}
                  onChange={handleImageUpload}
                >
                  آپلود تصویر
                  {handleLoading ? <LoadingSmall /> : null}
                  <input type="file" hidden />
                </Button> */}
              </div>
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
              </div>
              <div className="profileInputContainer">
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
