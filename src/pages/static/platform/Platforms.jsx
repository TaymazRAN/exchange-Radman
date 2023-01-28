import React from "react";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";
import { Button } from "@mui/material";
import Divider from "../../../components/divider/Divider";

const Platforms = () => {
	return (
		<div className="page">
			<div className="compartmentContainer">
				<div className="compartment right">
					<div className="data">
						<h2>همراه پلاس</h2>
						<p>
							با همراه پلاس نیازی به نصب اپلیکیشن ندارید. اگر در زمان معاملات،
							خارج از محل کار و یا زندگی خود هستید، ما همراه پلاس را به شما
							پیشنهاد می کنیم. از طریق این سامانه به راحتی، با سرعت بالا و بدون
							نیاز به نصب اپلیکیشن، با گوشی ها و تبلت ها با سیستم عامل Android و
							iOS وارد سامانه معاملات شوید.{" "}
						</p>

						<a href="https://mobile.sjb.co.ir" rel="noreferrer" target="_blank">
							<Button className="button" variant="text" color="error">
								ورود
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
					<div className="image platform1"></div>
				</div>
			</div>
			<Divider centered />
			<div className="compartmentContainer">
				<div className="compartment left">
					<div className="image platform2"></div>
					<div className="data">
						<h2>سامانه فروش سهام عدالت</h2>
						<p>
							اگر سهام عدالت به شما تعلق گرفته و نسبت به آزاد سازی آن اقدام
							نموده اید، می توانید بدون دریافت کد بورسی و بدون مراجعه حضوری به
							کارگزاری، نسبت به فروش آن اقدام نمایید.{" "}
						</p>
						<a
							href="https://sjbse.etadbir.com/login.html"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								فروش
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</div>
			</div>
			<Divider centered />
			<div className="compartmentContainer">
				<div className="compartment right">
					<div className="data">
						<h2>آنلاین پلاس</h2>
						<p>
							سامانه «آنلاین پلاس» بر پایه نیازهای متفاوت معامله گران حرفه ای
							طراحی شده که یکی از ویژگی های برجسته آن، اختصاصی سازی امکانات
							متنوع این سامانه معاملاتی می باشد. امکان مدیریت سفارش ها با حجم
							بالا و یا ارسال همزمان سفارش در چند نماد مختلف، شما را قادر می
							سازد در کوتاه ترین زمان ممکن، استراتژی معاملاتی خود را اجرا
							نمایید.{" "}
						</p>
						<a
							href="https://onlineplus.sjb.co.ir/Account/Login"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								مطالب بیشتر
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
					<div className="image platform3"></div>
				</div>
			</div>
			<Divider centered />
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
			<Divider centered />
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
			<Divider centered />
			<div className="compartmentContainer">
				<div className="compartment left">
					<div className="image platform6"></div>
					<div className="data">
						<h2>سامانه آنلاین آتی</h2>
						<p>
							با این سامانه هر آنچه را که در معاملات به آن نیاز خواهید داشت، به
							صورت یکجا به آن دسترسی دارید.{" "}
						</p>
						<a
							href="https://coinonline.sjb.co.ir"
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

export default Platforms;
