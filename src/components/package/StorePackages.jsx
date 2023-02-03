import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import { Button } from "@mui/material";
import purifyPrice from "../../../services/purifyPrice";
// import { storePackageActions } from "../../../features/package/storePackageSlice";
// import SnackAlert from "../../../components/snackAlert/SnackAlert";
import LoadingRedux from "../../../components/loadingRedux/LoadingRedux";
import { fetchFunctions } from "../../../features/package/functionSlice";
// import { useNavigate } from "react-router-dom";

export default function StorePackages(props) {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  const dataFunction = useSelector((state) => state.function.data);
  // const handleLoading = useSelector((state) => state.function.handleLoading);
  const error = useSelector((state) => state.function.error);
  // const handleError = useSelector((state) => state.function.handleError);
  const ready = useSelector((state) => state.function.ready);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [functions, setFunctions] = useState([]);

  const handleClickOpen = (title, functions) => {
    setOpen(true);
    setTitle(title);
    setFunctions(functions);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const [successAlert, setSuccessAlert] = useState(false);
  // const [successText, setSuccessText] = useState("");
  // const handleOpenSuccess = (text) => {
  // 	setSuccessText(text);
  // 	setSuccessAlert(true);
  // };

  // const handleCloseSuccess = () => {
  // 	setSuccessAlert(false);
  // };

  // const [errorAlert, setErrorAlert] = useState(false);
  // const [errorText, setErrorText] = useState("");

  // const handleOpenError = (text) => {
  // 	setErrorText(text);
  // 	setErrorAlert(true);
  // };

  // const handleCloseError = () => {
  // 	setErrorAlert(false);
  // };

  useEffect(() => {
    dispatch(fetchFunctions());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  // 	if (handleError === "success") {
  // 		handleOpenSuccess("عملیات با موفقیت انجام شد");
  // 		setTimeout(() => {
  // 			navigate(`/admin/storePackage`);
  // 			dispatch(storePackageActions.clearHandleError());
  // 		}, 1500);
  // 	} else if (handleError !== "success" && handleError !== "") {
  // 		handleOpenError("عملیات با مشکل مواجه شد");
  // 		dispatch(storePackageActions.clearHandleError());
  // 	}
  // 	// eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [handleError]);

  return (
    <>
      {/* <SnackAlert
						props={{
							successAlert,
							handleCloseSuccess,
							successText,
							errorAlert,
							handleCloseError,
							errorText,
						}}
					/> */}

      {error !== "" || !ready ? (
        <LoadingRedux error={error} />
      ) : (
        <div>
          <Dialog
            dir="rtl"
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
          >
            <DialogTitle>عملکرد های بسته {title}</DialogTitle>
            <DialogContent>
              {functions.map((item, i) => {
                let functionTemp = dataFunction.find(
                  (funcItem) => funcItem.id === item
                );
                return (
                  <div className="functionContainer" key={i}>
                    <div className="functionName">{functionTemp.name}</div>
                    <div className="functionDifficulty">
                      {functionTemp.difficulty === "Easy" && (
                        <span className="easy">آسان</span>
                      )}
                      {functionTemp.difficulty === "Normal" && (
                        <span className="normal">معمولی</span>
                      )}
                      {functionTemp.difficulty === "Hard" && (
                        <span className="hard">سخت</span>
                      )}
                    </div>
                    <div className="functuionPrice">{`${purifyPrice(
                      functionTemp.price
                    )} تومان`}</div>
                  </div>
                );
              })}
            </DialogContent>
            <DialogActions>
              <Button
                variant="outlined"
                color="info"
                onClick={handleClose}
                sx={{ marginRight: "15px" }}
              >
                تایید
              </Button>
            </DialogActions>
          </Dialog>
          {props.data.map((packageData, i) => {
            return (
              <div className="packageContainer" key={i}>
                <div className="packageName bold">
                  <div className="packagePicture"></div>
                  {packageData.name}
                </div>
                <div className="packageData">
                  <div className="packagePrice">
                    {purifyPrice(packageData.price)} تومان
                  </div>
                  <div className="packageDiscount bold">
                    <Button
                      sx={{
                        marginLeft: "10px",
                        color: "#ffffff",
                        backgroundColor: "#4955b6",
                        borderRadius: "10px",
                        height: "40px",
                        width: "40px",
                      }}
                    >
                      توضیحات
                    </Button>
                  </div>
                  <IconButton color="success">
                    <LocalGroceryStoreOutlinedIcon />
                  </IconButton>
                  <IconButton
                    color="info"
                    onClick={(event) =>
                      handleClickOpen(packageData.name, packageData.functions)
                    }
                  >
                    <VisibilityOutlinedIcon />
                  </IconButton>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
