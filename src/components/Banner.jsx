import React from "react";
import Search from "./Search";
import BannerCard from "./BannerCard";

import './BannerCard.css'
export default function Banner() {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex items-center">
      <div className="w-full flex md:flex-row flex-col justify-between gap-12 items-center py-28 md:py-40">
        <div className="space-y-7 md:w-1/2 h-full w-full">
          <h2 className="text-6xl font-sans font-bold leading-snug text-black">
            Buy and sell a Books{" "}
            <span className="text-blue-400">For the best practice</span>
          </h2>
          <p className="md:w-2/3 w-full">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit
            accusamus sed accusantium numquam doloribus exercitationem optio aut
            veritatis tempore facilis!
          </p>
          <Search/>
        </div>
        <div className="md:w-1/2 h-full w-full">
            <BannerCard/>
        </div>
      </div>
    </div>
  );
}
