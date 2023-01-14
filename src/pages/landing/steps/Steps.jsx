import * as React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";

export default function Steps() {
	return (
		<div className="cardBox">
			<h2> شروع سرمایه گذاری </h2>

			<div className="cards">
				<div className="card stepContainer">
					<div className="step">
						<div className="stepper">1</div>
						<div className="sign one"></div>
					</div>
					<h3 className="title">ثبت نام در سجام</h3>
					<p className="description">
						اولین مرحله ثبت نام در سامانه سجام و احراز هویت شماست
					</p>
					<Button className="button" variant="text" color="error">
						سامانه سجام
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>

				<div className="card stepContainer">
					<div className="step">
						<div className="stepper">2</div>
						<div className="sign two"></div>
					</div>
					<h3 className="title"> افتتاح حساب غیرحضوری</h3>
					<p className="description">
						دومین مرحله افتتاح حساب در سایت صبا جهاد می باشد
					</p>
					<Button className="button" variant="text" color="error">
						افتتاح حساب
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>

				<div className="card stepContainer">
					<div className="step">
						<div className="stepper">3</div>
						<div className="sign three"></div>
					</div>
					<h3 className="title">ارسال دسترسی و شروع معاملات</h3>
					<p className="description">
						تبریک در این مرحله شما می توانید سرمایه گذاری خود را شروع کنید
					</p>
					<Button className="button" variant="text" color="error">
						شروع سرمایه گذاری
						<KeyboardArrowLeftRoundedIcon className="icon" />
					</Button>
				</div>
			</div>
		</div>
	);
}
