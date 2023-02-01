import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

const PlatformA4 = () => {
  return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment left">
					<div className="image platform4"></div>
					<div className="data">
						<h2>سفارشات اینترنتی</h2>
						<p>
							با سامانه سفارش های اینترنتی در هر زمان از شبانه روز می توانید
							درخواست خرید و یا فروش خود را به اتاق معاملات ما ارسال نمایید و
							اجرای آنها را به معامله گران حرفه ای بسپارید. اگر مشغله روزانه به
							شما فرصت معامله نمی دهد، ما اجرای سفارش های از پیش ارسال شده شما
							را به عهده می گیریم.{" "}
						</p>
						<a
							href="https://c.sjb.co.ir/User/Login?ReturnUrl=/"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								مطالب بیشتر
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlatformA4;
