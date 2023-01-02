import "../menuTopAdmin/menuTopAdmin.css";
import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";
import { NavLink } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import LogoutIcon from "@mui/icons-material/Logout";
import { loginActions } from "../../features/account/loginSlice";
import { useDispatch } from "react-redux";
import { clearOrganStorage } from "../../services/clearLocalStorage";

export default function MenuTopOrganization() {
	const user = JSON.parse(localStorage.getItem("managername"));
	const userAdmin = JSON.parse(localStorage.getItem("adminname"));
	const name = JSON.parse(localStorage.getItem("organname"));
	const dispatch = useDispatch();

	// console.log(JSON.parse(localStorage.getItem("organid")));
	// console.log(user);
	// console.log(getCurrentUser);
	return (
		<div className="topBar">
			<div className="topBarWrapper">
				<div className="topLeft">
					<NavLink to="/">
						<span className="logoAdmin"></span>
					</NavLink>
				</div>
				<div className="topRight">
					<div className="topBarIconContainer">
						<NotificationsNoneIcon />
						<span className="iconBadge mediumText">2</span>
					</div>
					<div className="topBarIconContainer">
						<LanguageIcon />
						<span className="iconBadge mediumText">2</span>
					</div>
					<div className="topBarIconContainer">
						<SettingsIcon />
					</div>
					<div className="profileNameTag">
						<NavLink to="/login" onClick={dispatch(loginActions.logout)}>
							<IconButton
								sx={{ marginLeft: "10px" }}
								size="medium"
								color="error"
							>
								<LogoutIcon sx={{ fontSize: "24px" }} />
							</IconButton>
						</NavLink>
						{userAdmin ? (
							<NavLink
								onClick={(event) => clearOrganStorage()}
								className="textLink"
								to="/admin/organization"
							>
								{userAdmin} - {name}
							</NavLink>
						) : (
							user
						)}
					</div>
					<div className="avatarPicture"></div>
				</div>
			</div>
		</div>
	);
}
