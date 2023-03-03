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
  fetchsubMenuByID,
  subMenuActions,
  updatesubMenu,
} from "../../../features/account/subMenuSlice";

const validationSchema = yup.object().shape({
  title: yup.string().required("نام منو را وارد کنید"),
});

export default function SubMenuEdit(props) {
  const { id } = useParams();

  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();

  const data = useSelector((state) => state.subMenu.subMenu);

  console.log("data...", data);
  const [post, setPost] = useState(undefined);
  const handleLoading = useSelector((state) => state.subMenu.handleLoading);
  const ready = useSelector((state) => state.subMenu.ready);
  const error = useSelector((state) => state.subMenu.error);
  const handleError = useSelector((state) => state.subMenu.handleError);

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
    dispatch(fetchsubMenuByID(id));
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

  const initialValues = {
    id: fixNull(post?.id),
    title: fixNull(post?.title),
    body: fixNull(post?.body),
    groupType: fixNull(post?.groupType),
  };

  console.log("initialValues", initialValues);
  useEffect(() => {
    if (handleError === "success") {
      handleOpenSuccess("عملیات با موفقیت انجام شد");
      setTimeout(() => {
        navigate(`/admin/subMenuList/${initialValues.groupType}`);

        dispatch(subMenuActions.clearHandleError());
      }, 1500);
    } else if (handleError === "uploaded") {
      handleOpenSuccess("تصویر با موفقیت آپلود شد");
      dispatch(subMenuActions.clearHandleError());
    } else if (
      handleError !== "success" &&
      handleError !== "" &&
      handleError !== "uploaded"
    ) {
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

  const submit = (data) => {
    // dispatch(updateManager({ user: post.id, data })).unwrap();
    console.log("data pass", data);

    dispatch(updatesubMenu({ user: post.id, data })).unwrap();
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
          {({ handleChange, values, setFieldValue, errors, touched }) => (
            <Form>
              {console.log("values", values)}
              <div className="mainPanelTitle bold">
                ویرایش مدیریت منو {post.title}
              </div>
              <div className="profileInputContainer">
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <TextField
                      dir="rtl"
                      margin="dense"
                      id="title"
                      label="نام گروه  اصلی  "
                      type="text"
                      fullWidth
                      variant="outlined"
                      className="profileInput"
                      value={values.title}
                      onChange={handleChange}
                      error={touched.title && Boolean(errors.title)}
                      helperText={touched.title && errors.title}
                      disabled
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <TextField
                      dir="rtl"
                      margin="dense"
                      id="groupType"
                      label="عنوان  منو "
                      type="text"
                      fullWidth
                      variant="outlined"
                      className="profileInput"
                      value={values.groupType}
                      onChange={handleChange}
                      error={touched.groupType && Boolean(errors.groupType)}
                      helperText={touched.groupType && errors.groupType}
                      disabled
                    />
                  </div>
                </div>
                <textarea
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
                  style={{ height: "300px", width: "1000px" }}
                  multiline="true"
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
                      onClick={(event) =>
                        navigate(
                          `/admin/subMenuList/${initialValues.groupType}`
                        )
                      }
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
