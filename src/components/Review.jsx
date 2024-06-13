// Import Swiper React components
import "./Review.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaStar } from "react-icons/fa6";
import profile from "../assets/banner-books/profile.jpg";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";
import { Avatar } from "flowbite-react";
export default function Review() {
  return (
    <div className="my-7 px-4 md:px-24 relative">
      <h2 className="text-5xl font-bold font-sans text-center mb-10">
        Our Customer
      </h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper "
      >
        <SwiperSlide className="shadow-2xl bg-white py-5 px-4 rounded-lg border">
          {" "}
          <div>
            <div className="text-yellow-300 flex  gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="space-y-6 mt-5">
              <p className="">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quod
              </p>
              <Avatar
                img={profile}
                className="w-10  "
                alt="avatar of Jese"
                rounded
              />
              <h5 className="text-lg font-sans font-bold ">Mark Ping</h5>
              <p className="text-lg font-sans font-semibold">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-5 px-4 rounded-lg border">
          {" "}
          <div>
            <div className="text-yellow-300 flex  gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="space-y-6 mt-5">
              <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quod
              </p>
              <Avatar
                img={profile}
                className="w-10  "
                alt="avatar of Jese"
                rounded
              />
              <h5 className="text-lg font-sans font-bold ">Mark Ping</h5>
              <p className="text-lg font-sans font-semibold">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-5 px-4 rounded-lg border">
          {" "}
          <div>
            <div className="text-yellow-300 flex  gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="space-y-6 mt-5">
              <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quod
              </p>
              <Avatar
                img={profile}
                className="w-10  "
                alt="avatar of Jese"
                rounded
              />
              <h5 className="text-lg font-sans font-bold ">Mark Ping</h5>
              <p className="text-lg font-sans font-semibold">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-5 px-4 rounded-lg border">
          {" "}
          <div>
            <div className="text-yellow-300 flex  gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="space-y-6 mt-5">
              <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quod
              </p>
              <Avatar
                img={profile}
                className="w-10  "
                alt="avatar of Jese"
                rounded
              />
              <h5 className="text-lg font-sans font-bold ">Mark Ping</h5>
              <p className="text-lg font-sans font-semibold">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-5 px-4 rounded-lg border">
          {" "}
          <div>
            <div className="text-yellow-300 flex  gap-2">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </div>
            {/* text */}
            <div className="space-y-6 mt-5">
              <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatem quod
              </p>
              <Avatar
                img={profile}
                className="w-10  "
                alt="avatar of Jese"
                rounded
              />
              <h5 className="text-lg font-sans font-bold ">Mark Ping</h5>
              <p className="text-lg font-sans font-semibold">CEO,ABC Company</p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
