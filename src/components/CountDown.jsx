import React from "react";
import { Link } from "react-router-dom";

export default function CountDown() {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between ">
        <div className="space-y-2 md:space-y-5">
          <h1 className="font-bold md:text-2xl lg:text-4xl">800+</h1>
          <p>Book Listing</p>
        </div>
        <div className="space-y-2 md:space-y-5">
          <h1 className="font-bold md:text-2xl lg:text-4xl">550+</h1>
          <p>Register User</p>
        </div>
        <div className="space-y-2 md:space-y-5">
          <h1 className="font-bold md:text-2xl lg:text-4xl">1200+</h1>
          <p>Pdf Download</p>
        </div>
      </div>
      <Link to="/shop">
        <button className="text-xl font-medium bg-blue-300 text-white px-5 py-2 rounded-md mt-8 ">
          Explore Now
        </button>
      </Link>
    </div>
  );
}
