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
import { Editor } from "@tinymce/tinymce-react";
import "./style.css";
import {
  fetchsubMenuByID,
  subMenuActions,
  updatesubMenu,
} from "../../../features/account/subMenuSlice";

const validationSchema = yup.object().shape({
  title: yup.string().required(" متن  نباید  خالی باشد  "),
});

export default function SubMenuEdit(props) {
  const editorRef = useRef(null);
  const { id } = useParams();
  const navigate = useNavigate();
  const formRef = useRef();
  const dispatch = useDispatch();
  const data = useSelector((state) => state.subMenu.subMenu);
  // console.log("data...", data);
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
    // window.location.reload();
  }, []);

  useEffect(() => {
    if (Object.keys(data).length !== 0) {
      setPost(data);
    }
  }, [data]);

  const initialValues = {
    id: fixNull(post?.id),
    title: fixNull(post?.title),
    body: fixNull(post?.body),
    groupType: fixNull(post?.groupType),
    description: fixNull(post?.description),
    ModifiedDate: "2023-06-23T12:57:18.542Z",
    CreateDate: "2023-06-23T12:57:18.542Z",
  };

  useEffect(() => {
    if (handleError === "success") {
      handleOpenSuccess("عملیات با موفقیت انجام شد");
      setTimeout(() => {
        navigate(`/admin/subMenuList/${initialValues.groupType}`);
        dispatch(subMenuActions.clearHandleError());
      }, 1500);
    } else if (
      handleError !== "success" &&
      handleError !== "" &&
      handleError !== "uploaded"
    ) {
      handleOpenError("عملیات با مشکل مواجه شد");
      dispatch(subMenuActions.clearHandleError());
    }
  }, [handleError]);

  const handleSubmit = () => {
    if (formRef.current) {
      formRef.current.handleSubmit();
    }
  };

  const submit = (data) => {
    // dispatch(updateManager({ user: post.id, data })).unwrap();
    console.log("data Submit  ", data);
    console.log(
      "Body",
      editorRef.current ? editorRef.current.getContent() : null
    );

    dispatch(
      updatesubMenu({
        id: post.id,
        title: post.title,
        groupType: post.groupType,
        description: post.description,
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

      {error !== "" || Object.keys(post ? post : {}).length === 0 || !ready ? (
        <LoadingRedux error={error} />
      ) : (
        <Formik
          {...props}
          initialValues={data}
          validationSchema={validationSchema}
          onSubmit={submit}
          innerRef={formRef}
        >
          {({ handleChange, values, setFieldValue, errors, touched }) => (
            <Form style={{ height: "800px" }}>
              <div className="mainPanelTitle bold">
                <span>
                  {/* <button onClick={refresh}>Refresh</button>  */}
                  ویرایش مدیریت منو{" "}
                </span>
                <span style={{ color: "red", fontSize: 22 }}>{post.title}</span>
              </div>
              {/* <div className="profileInputContainer"> */}

              <div>
                <div style={{ display: "flex" }}>
                  <div style={{ flex: 1 }}>
                    <TextField
                      dir="rtl"
                      margin="dense"
                      id="title"
                      // label="نام گروه  اصلی  "
                      type="text"
                      fullWidth
                      variant="outlined"
                      className="profileInput"
                      value={post.title}
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
                      // label="عنوان  منو "
                      type="text"
                      fullWidth
                      variant="outlined"
                      className="profileInput"
                      value={post.groupType}
                      onChange={handleChange}
                      error={touched.groupType && Boolean(errors.groupType)}
                      helperText={touched.groupType && errors.groupType}
                      disabled
                    />
                  </div>
                </div>

                <Editor
                  // apiKey={`0l9ca7pyz0qyliy0v9mmkfl2cz69uodvc8l6md8o4cnf6rnc`}
                  onEditorChange={handleChange}
                  change
                  id="body"
                  onInit={(evt, editor) => (editorRef.current = editor)}
                  initialValue={post.body}
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
                    content_style:
                      'body { font-family:Helvetica,Arial,sans-serif; font-size:14px ,height: "500px"   }',
                  }}
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

              {/* <div
                dangerouslySetInnerHTML={{
                  __html: post.body,
                }}
              ></div> */}
            </Form>
          )}
        </Formik>
      )}
    </>
  );
}
