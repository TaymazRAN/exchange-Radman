import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import SuperMenu from "../superMenu/SuperMenu";
import { useNavigate } from "react-router-dom";

export default function Header({ dark }) {
  const navigate = useNavigate();

  return (
    <div className={`header ${dark && "dark"}`}>
      <div className="widthFix">
        <Link to="/" className="logoBox">
          <div className="logo"></div>
          <span className="name">
            کارگزاری <span className="yellow">صبا جهاد</span>
          </span>
        </Link>
        <div className="buttonBox">
          <SuperMenu />
        </div>

        <div className="buttonBox">
          {/* <Button
						className="button contained kalameh b"
						variant="text"
						color="warning"
						onClick={(event) => navigate("/login")}
					>
					
					</Button> */}

          <a href="https://customer.sjb.co.ir" rel="noreferrer" target="_blank">
            <Button
              className="button contained kalameh b"
              variant="text"
              color="warning"
            >
              ثبت نام غیر حضوری
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
