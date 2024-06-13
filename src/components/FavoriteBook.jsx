import React from "react";
import favoriteBook from "../assets/banner-books/favoritebook.jpg";
import CountDown from "./CountDown";
export default function FavoriteBook() {
  return (
    <div className="px-4 lg:px-24 my-20 flex items-center">
      <div className="w-full flex md:flex-row flex-col justify-between gap-40 items-center">
        <div className=" md:w-1/2 h-full w-full">
          <img src={favoriteBook} alt="favoriteBook" />
        </div>
        <div className="md:w-1/2 space-y-7 h-full w-full">
          <h2 className="md:text-4xl lg:text-5xl font-sans font-bold leading-snug text-black">
            Find Your Favorite
            <span className="text-blue-400 inline-block">Book Hear!</span>
          </h2>
          <p className="md:w-4/5 w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            accusamus sed accusantium numquam doloribus exercitationem optio aut
            veritatis tempore facilis!
          </p>
          <CountDown />
        </div>
      </div>
    </div>
  );
}
