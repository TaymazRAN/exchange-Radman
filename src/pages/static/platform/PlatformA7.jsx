import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA7 = () => {
  return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment right">
					<div className="data">
						<h2>سامانه معاملات اینترنتی (آفلاین)</h2>
						<p>
							با سامانه سفارش های اینترنتی در هر زمان از شبانه روز می توانید
							درخواست خرید و یا فروش خود را به اتاق معاملات ما ارسال نمایید و
							اجرای آنها را به معامله گران حرفه ای بسپارید. اگر مشغله روزانه به
							شما فرصت معامله نمی دهد، ما اجرای سفارش های از پیش ارسال شده شما
							را به عهده می گیریم.
						</p>
						<a
							href="https://c.sjb.co.ir/User/Login?ReturnUrl=/"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								ورود
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
					<div className="image platform7"></div>
				</div>
			</div>
		</div>
	);
};

export default PlatformA7;
