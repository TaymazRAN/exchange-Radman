import React from "react";
import FormGroup from "@mui/material/FormGroup";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import Checkbox from "@mui/material/Checkbox";
// import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import { NavLink } from "react-router-dom";
// import Visibility from "@mui/icons-material/Visibility";
// import VisibilityOff from "@mui/icons-material/VisibilityOff";
// import InputAdornment from "@mui/material/InputAdornment";
// import IconButton from "@mui/material/IconButton";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import InputLabel from "@mui/material/InputLabel";
// import FormControl from "@mui/material/FormControl";
// import FormHelperText from "@mui/material/FormHelperText";

export default function FormLogin() {
  return (
    <div>
      <FormGroup
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "40px",
          padding: "20px",
        }}
      >
        <div className="widthFix boxshodow1">
          <div className="signButtonContainer">
            <NavLink to="/login/new" className="signButton">
              <Button
                className="bold"
                variant="contained"
                sx={{
                  fontSize: "16px",
                  backgroundColor: "#49DEE9",
                  color: "#ffffff",
                  borderRadius: "20px",
                  height: "40px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                  boxShadow: "0 2px 5px #dddddd",
                }}
              >
                ساخـتن حسـاب کاربـری
              </Button>
            </NavLink>
          </div>
          <form className="loginForm" dir="rtl">
            <div className="loginButtonContainer" style={{ marginTop: "0" }}>
              <Button color="success" variant="outlined">
                <NavLink to="/login/admin" className="loginButton">
                  ورود به پنل ادمین
                </NavLink>
              </Button>
              {/* <Button color="info" variant="outlined">
                <NavLink to="/login/manager" className="loginButton">
                  ورود به پنل سازمان
                </NavLink>
              </Button> */}
              {/* <Button color="error" variant="outlined">
                <NavLink to="/login/user" className="loginButton">
                  ورود به پنل کاربری
                </NavLink>
              </Button> */}
            </div>
          </form>
        </div>
      </FormGroup>
    </div>
  );
}
