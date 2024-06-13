import React from 'react'
import { useLoaderData } from 'react-router'

export default function SingleBook() {
    const {bookTitle,authorName,imageURL,bookDescription,bookPDFURL,category}=useLoaderData()
  return (
    <div className='mt-28 px-4 md:px-24 '>

        <div>
<h2>{bookTitle}</h2>
        </div>
    </div>
  )
}
