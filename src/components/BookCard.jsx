import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import './BookCard.css'
import { CiShoppingCart } from "react-icons/ci";

export default function BookCard({ books, heading }) {
  console.log(books, heading);
  return (
    <div className="my-7 px-4 md:px-24 relative">
      <h2 className="text-bold text-5xl font-sans text-center">{heading}</h2>
      {/* cards */}

      <div className="">
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
          className=" w-full h-full bg-white"
        >
          {books.map((book) => (
            <SwiperSlide key={book._id} className="my-7">
              <Link to={`/book/${book._id}`}>
                <div className="relative">
                  <img src={book.imageURL} alt="" />
                  <div className="absolute top-4 right-2 bg-blue-800 hover:bg-black p-2 rounded-md">
                  <CiShoppingCart  className="w-5 h-5 text-white font-bold"/>

                  </div>
                </div>
                <div className="bg-white ">
                    <div>
                    <h1>{book.bookTitle}</h1>
                    <p>{book.authorName}</p>
                    </div>
                    <div>
                        <p>$10.00</p>
                    </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
