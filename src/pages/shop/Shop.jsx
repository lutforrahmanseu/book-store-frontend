import { Button, Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

export default function Shop() {
  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/all-books`)
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="px-4 md:px-24 mt-28">
      <h2 className="text-center text-5xl font-semibold font-sans mb-6">
        All Books Are Hear
      </h2>
      <div className="grid grid-cols-1 my-12 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {books.map((book) => {
          const { imageURL, bookDescription, bookTitle } = book;
          return (
            <Card
            
            >
             
             <img src={imageURL} className="h-96 " alt="" />
             <div className="px-3">
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {bookTitle}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {bookDescription.slice(0, 10)}
              </p>
             </div>
            
              <button className="text-center text-white bg-teal-400 py-2 text-lg font-sans font-bold">Buy Now</button>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
