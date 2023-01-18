import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Button } from "@mui/material";
import KeyboardArrowLeftRoundedIcon from "@mui/icons-material/KeyboardArrowLeftRounded";

export default function Slider() {
	return (
		<div className="swiperBody">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 5000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className="slideContainer first">
						<h1 className="title">
							بـــرای رویـــــــــاهـــات{" "}
							<span className="yellow">برنامه ریزی کن</span>
						</h1>
						<p className="description">
							در عصر حاضر، سرمایه گذاری محدود به افرادی خاص با سرمایه و تخصص
							بالا نیست همه می توانند با هر شغل و هر میزان دارایی به فکر آینده
							خود باشند.
						</p>
						<Button className="button" variant="text" color="error">
							افتتاح حساب
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContainer second">
						<h1 className="title">
							صندوق <span className="yellow">تضمین</span>
						</h1>
						<p className="description">
							برای سرمایه گذاری در صندوق تضمین اصل سرمایه کاریزما همین حالا
							اقدام کنید
						</p>
						<Button className="button" variant="text" color="error">
							شروع سرمایه‌گذاری
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContainer third">
						<h1 className="title">
							با یه کلیک <span className="yellow">پول تو حســـــابته</span>
						</h1>
						<p className="description">
							برداشت وجه آنی با سامانه مشتریان کارگزاری صبا جهاد
						</p>
						<Button className="button" variant="text" color="error">
							پیش به سوی تحول
							<KeyboardArrowLeftRoundedIcon className="icon" />
						</Button>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
