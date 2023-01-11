import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
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
					<Button className="button contained kalameh b" variant="text" color="warning">
						ورود / ثبت نام
					</Button>
				</div>
			</div>
		</div>
	);
}
