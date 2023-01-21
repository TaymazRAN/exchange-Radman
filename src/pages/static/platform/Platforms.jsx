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
							با همراه پلاس فرصت ها را در بازار از دست نمی دهید. اگر در زمان
							معاملات، خارج از محل کار و یا زندگی خود هستید، ما همراه پلاس را به
							شما پیشنهاد می کنیم. بدون نیاز به نصب اپلیکیشن به راحتی بر روی
							گوشی ها و تبلت ها با سیستم عامل Android و iOS و با اینترنت
							اپراتورهای موبایل به راحتی کار می کند.
						</p>
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
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
							در دولت نهم، آیین نامه اجرایی سهام عدالت با نام “افزایش ثروت
							خانوارهای ایرانی” تبدیل به سهام عدالت شد و به مشمولان این آیین
							نامه که شامل دو دهک پایین درآمدی و چهار دهک میانی درآمد بود یک
							میلیون تومان سهام تخصیص و در مقابل پولی از آنها دریافت نگردید.
						</p>
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
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
							نمایید.
						</p>
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
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
							را به عهده می گیریم.
						</p>
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</div>
				</div>
			</div>
			<Divider centered />
			<div className="compartmentContainer">
				<div className="compartment right">
					<div className="data">
						<h2>همراه تریدر آتی</h2>
						<p>
							این اپلیکیشن را بر روی تلفن همراه و تبلت Android یا iOS خود نصب
							کنید و در زمان معاملات از هر کجا که هستید خرید و فروش کنید.{" "}
						</p>
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
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
						<Button className="button" variant="text" color="error">
							مطالب بیشتر
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Platforms;
