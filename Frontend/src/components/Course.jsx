// Course.jsx
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function Course() {
  const [book, setBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  const filteredBooks = book.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
    <Navbar book={book}/>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Other content */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;