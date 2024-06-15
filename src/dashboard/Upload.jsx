import { Button, Label, Select, TextInput, Textarea } from "flowbite-react";
import React, { useState } from "react";

export default function Upload() {
  const bookCategories = [
    "Fiction",
    "NOn-Fiction",
    "Mistery",
    "Programming",
    "Science Fiction",
    "Fantasy",
    "Horror",
    "Bibliography",
    "Autobiography",
    "History",
    "Self-help",
    "Memoir",
    "Business",
    "Children Books",
    "Travel",
    "Religion",
    "Art and Design",
  ];

  const [selectedBookCategory, setSelectedBookCategory] = useState(
    bookCategories[0]
  );
  const handleChangSelectedValue = (e) => {
    setSelectedBookCategory(e.target.value);
  };

  //handle book submissions

  const handleBookSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL = form.imageURL.value;
    const categoryName = form.categoryName.value;
    const bookDescriptions = form.bookDescriptions.value;
    const bookPDFURL = form.bookPDFURL.value;
    const bookObj = {
      bookTitle,
      authorName,
      imageURL,
      categoryName,
      bookDescriptions,
      bookPDFURL,
    };
    

    //send data to database

    fetch("http://localhost:5000/upload-book",{
      method:"POST",
      headers:{
        "Content-type":"application/json",
      },
      body:JSON.stringify(bookObj)
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        alert('Book alert success')
        form.reset()
      });
      
  };

  return (
    <div className="my-8 px-4">
      <h2 className="mb-8 text-2xl font-bold">Upload A Book</h2>

      <form
        onSubmit={handleBookSubmit}
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
      >
        {/* first row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput
              id="bookTitle"
              type="text"
              placeholder="Book Name"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput
              id="authorName"
              type="text"
              placeholder="Author Name"
              required
            />
          </div>
        </div>
        {/* second row */}
        <div className="flex gap-8">
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image Url" />
            </div>
            <TextInput
              id="imageURL"
              type="text"
              placeholder="Book Image Url"
              required
            />
          </div>
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="inputState" value="Book Category" />
            </div>
            <Select
              id="inputState"
              name="categoryName"
              className="w-full rounded "
              value={selectedBookCategory}
              onChange={handleChangSelectedValue}
            >
              {bookCategories.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </Select>
          </div>
        </div>
        {/* book descriptions */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescriptions" value="Book Descriptions" />
          </div>
          <Textarea
            name="bookDescriptions"
            id="bookDescriptions"
            className="w-full"
            placeholder="Write Your Book Descriptions..."
            required
            rows={6}
          />
        </div>

        {/* Book Pdf Link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput
            id="bookPDFURL"
            type="text"
            placeholder="Book PDF URL"
            required
          />
        </div>
        <Button type="submit" className="bg-teal-500 ">
          Upload Book
        </Button>
      </form>
    </div>
  );
}
