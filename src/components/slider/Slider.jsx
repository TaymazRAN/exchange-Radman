import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Slider() {
	return (
		<div className="swiperBody">
			<Swiper
				spaceBetween={30}
				centeredSlides={true}
				autoplay={{
					delay: 2500,
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
					<div className="slideContainer first">Slide 1</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContainer second">Slide 2</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className="slideContainer third">Slide 3</div>
				</SwiperSlide>
			</Swiper>
		</div>
	);
}
