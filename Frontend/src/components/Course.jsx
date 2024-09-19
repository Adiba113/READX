import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import Navbar from "./Navbar";

function Course() {
  const [book, setBook] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [category, setCategory] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get(
          `http://localhost:4001/book${category ? `/category/${category}` : ""}`
        );
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, [category]);

  const filteredBooks = book.filter(item =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentBooks = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Navbar book={book} />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        {/* Category Buttons */}
        <div className="flex space-x-4 mt-16">
          <button
            className={`px-4 py-1 text-sm ${category === "" ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCategory("")}
          >
            All
          </button>
          <button
            className={`px-4 py-1 text-sm ${category === "CSE" ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCategory("CSE")}
          >
            CSE
          </button>
          <button
            className={`px-4 py-1 text-sm ${category === "EEE" ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCategory("EEE")}
          >
            EEE
          </button>
          <button
            className={`px-4 py-1 text-sm ${category === "ME" ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCategory("ME")}
          >
            ME
          </button>
          <button
            className={`px-4 py-1 text-sm ${category === "Textile" ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCategory("Textile")}
          >
            Textile
          </button>
          <button
            className={`px-4 py-1 text-sm ${category === "IPE" ? "bg-blue-600" : "bg-gray-300"}`}
            onClick={() => setCategory("IPE")}
          >
            IPE
          </button>
          {/* Add more categories as needed */}
        </div>

        {/* Books */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-4">
          {currentBooks.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center mt-8">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`mx-1 px-3 py-1 rounded ${
                currentPage === index + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
