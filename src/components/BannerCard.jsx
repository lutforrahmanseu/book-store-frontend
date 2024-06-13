
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import './BannerCard.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper/modules";
export default function BannerCard() {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
        <SwiperSlide ></SwiperSlide>
       
      </Swiper>
    </div>
  );
}
