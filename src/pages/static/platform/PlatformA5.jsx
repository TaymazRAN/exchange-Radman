import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA5 = () => {
  return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment right">
					<div className="data">
						<h2>همراه تریدر آتی</h2>
						<p>
							با نصب این اپلیکیشن بر روی تلفن همراه و تبلت Android یا iOS خود،
							تغییر و تحولات لحظه ای در جهان را از دست نمی دهید و از هر کجا که
							باشید می توانید معاملات خود را انجام دهید.{" "}
						</p>
						<a
							href="https://onlineplus.sjb.co.ir/Account/Login"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								دانلود
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
					<div className="image platform5"></div>
				</div>
			</div>
		</div>
	);
};

export default PlatformA5;
