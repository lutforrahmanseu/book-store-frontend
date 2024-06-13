import React, { useEffect, useState } from 'react'
import BookCard from './BookCard';

export default function OtherBooks() {

    const [books, setBooks] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/all-books")
        .then((res) => res.json())
        .then((data) => setBooks(data.slice(0,8)));
    }, []);
    return (
      <div>
        <BookCard books={books} heading='Others Books'/>
      </div>
    );
}

