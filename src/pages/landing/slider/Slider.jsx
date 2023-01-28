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
							<span className="yellow">عرضه خودرو</span>
							در بورس کالا{" "}
						</h1>
						<p className="description">متن توضیحات برای تایتل</p>
						<a
							href="https://sjb.ebgo.ir/Login"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								ثبت نام
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContainer second">
						<h1 className="title">
							سامانه معاملات <span className="yellow">همراه پلاس</span>
						</h1>
						<p className="description">متن توضیحات برای تایتل </p>
						<a
							href="https://mobile.sjb.co.ir/Login"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								ورود به سامانه
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContainer third">
						<h1 className="title">
							سامانه ثبت نام <span className="yellow">غیرحضوری</span>
						</h1>
						<p className="description">متن توضیحات برای تایتل</p>
						<a
							href="https://customer.sjb.co.ir"
							rel="noreferrer"
							target="_blank"
						>
							<Button className="button" variant="text" color="error">
								افتتاح حساب
								<KeyboardArrowLeftRoundedIcon className="icon" />
							</Button>
						</a>
					</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
