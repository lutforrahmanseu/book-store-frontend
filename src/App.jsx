import React, { useEffect, useState } from "react";

export default function App() {
  const [datas, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-books")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {datas.map((data) => (
        <div key={data._id}>
          <p>{data.category}</p>
          <img src={data.imageURL} width={100} height={100} alt={data.bookTitle} />
        </div>
      ))}
    </div>
  );
}
