import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Formik, Form } from "formik";
import * as yup from "yup";
import { useNavigate, useParams } from "react-router-dom";
import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import LoadingSmall from "../../../components/loadingSmall/LoadingSmall";
import { Editor } from "@tinymce/tinymce-react";

import {
  addsubMenu,
  subMenuActions,
} from "../../../features/account/subMenuSlice";

const validationSchema = yup.object().shape({
  title: yup.string().required("  عنوان را وارد کنید"),
  // body: yup.string().required("  متن  را وارد کنید"),

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
  const editorRef = useRef(null);
  // const organid = JSON.parse(localStorage.getItem("organid"));
  const navigate = useNavigate();
  const { GroupType } = useParams();
  console.log("Group Type ", GroupType);

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
        navigate(`/admin/SubMenulistDynamic/${GroupType}`);
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
    // id: "3fa85f64-5717-4563-b3fc-2c963f66afa0",
    title: "",
    body: "",
    groupType: GroupType,
    description: "description",
    ModifiedDate: "2023-06-23T12:29:29.962Z",
    CreateDate: "2023-06-23T12:29:29.962Z",
  };

  const submit = (values) => {
    // alert(JSON.stringify(values, null, 2));
    console.log("value =", values);
    // dispatch(addsubMenu(values)).unwrap();
    dispatch(
      addsubMenu({
        title: values.title,
        groupType: values.groupType,
        description: values.description,
        ModifiedDate: "2023-06-23T12:57:18.542Z",
        CreateDate: "2023-06-23T12:57:18.542Z",
        body: editorRef.current ? editorRef.current.getContent() : null,
      })
    ).unwrap();
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
            <Form style={{ height: "800px" }}>
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

                {/* <TextField
                  dir="rtl"
                  margin="dense"
                  id="body"
                  label="متن "
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.body}
                  onChange={handleChange}
                  error={touched.body && Boolean(errors.body)}
                  helperText={touched.body && errors.body}
                  style={{
                    backgroundColor: "#dddddd",
                    minHeight: 200,
                    // border:,
                  }}
                  multiline
                /> */}

                <Editor
                  // apiKey={`0l9ca7pyz0qyliy0v9mmkfl2cz69uodvc8l6md8o4cnf6rnc`}
                  onEditorChange={handleChange}
                  change
                  id="body"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={values.body}
                  init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                      "a11ychecker",
                      "advlist",
                      "advcode",
                      "advtable",
                      "autolink",
                      "checklist",
                      "export",
                      "lists",
                      "link",
                      "image",
                      "charmap",
                      "preview",
                      "anchor",
                      "searchreplace",
                      "visualblocks",
                      "powerpaste",
                      "fullscreen",
                      "formatpainter",
                      "insertdatetime",
                      "media",
                      "table",
                      "help",
                      "wordcount",
                    ],
                    toolbar:
                      "insertfile undo redo | casechange blocks | bold italic backcolor forecolor  | image | export | fullscreen " +
                      "alignleft aligncenter alignright alignjustify | table |" +
                      "bullist numlist checklist outdent indent | removeformat ",
                    // content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                  }}
                />

                <TextField
                  dir="rtl"
                  margin="dense"
                  id="groupType"
                  label="groupType "
                  type="text"
                  fullWidth
                  variant="outlined"
                  className="profileInput"
                  value={values.groupType}
                  onChange={handleChange}
                  // error={touched.body && Boolean(errors.groupType)}
                  // helperText={touched.body && errors.groupType}
                  // disabled
                  hidden
                />

                {/* <FormControl margin="dense" fullWidth className="profileInput">
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
                </FormControl> */}
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
                      onClick={(event) =>
                        navigate(`/admin/SubMenulistDynamic/${GroupType}`)
                      }
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
