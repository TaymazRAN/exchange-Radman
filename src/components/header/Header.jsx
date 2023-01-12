import { Button } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import SuperMenu from "../superMenu/SuperMenu";

export default function Header() {
  return (
    <div className="header">
      <div className="widthFix">
        <Link to="/" className="logoBox">
          <div className="logo"></div>
          <span className="name">
            کارگزاری <span className="yellow">صبا جهاد</span>
          </span>
        </Link>
        <div className="buttonBox">
          <Button className="button" variant="text" color="error">
            درباره ما
          </Button>
          <SuperMenu />
          <Button className="button" variant="text" color="error">
            سامانه های معاملاتی
          </Button>
          <Button className="button" variant="text" color="error">
            تماس با ما
          </Button>
        </div>

        <div className="buttonBox">
          <Button
            className="button contained kalameh b"
            variant="text"
            color="warning"
          >
            ورود / ثبت نام
          </Button>
          <Button
            className="bold"
            // onClick={handleOpenUserMenu}
            color="info"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "20px",
              height: "40px",
              paddingLeft: "15px",
              paddingRight: "15px",
              boxShadow: "0 2px 5px #dddddd",
              fontSize: "15px",
              color: "#49DEE9",
            }}
          >
            <NavLink to="/login" className="link">
              حساب کاربری
            </NavLink>
          </Button>
        </div>
      </div>
    </div>
  );
}
