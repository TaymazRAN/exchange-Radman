import React from "react";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const SnackAlert = ({ props }) => {
  return (
    <div style={{ direction: "rtl" }}>
      <Snackbar
        open={props.successAlert}
        autoHideDuration={6000}
        onClose={props.handleCloseSuccess}
        sx={{ direction: "right" }}
      >
        <Alert
          onClose={props.handleCloseSuccess}
          severity="success"
          sx={{ width: "100%" }}
        >
          {props.successText}
        </Alert>
      </Snackbar>
      <Snackbar
        open={props.errorAlert}
        autoHideDuration={6000}
        onClose={props.handleCloseError}
        sx={{ direction: "right" }}
      >
        <Alert
          onClose={props.handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {props.errorText}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default SnackAlert;
