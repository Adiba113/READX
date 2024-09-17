import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function BookDetails() {
  const { id } = useParams(); // Get the book ID from the URL
  const [book, setBook] = useState(null);

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const res = await axios.get(`http://localhost:4001/book/${id}`);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchBook();
  }, [id]);

  if (!book) return <p>Loading...</p>; // Loading state

  return (
    <div className="max-w-screen-md mx-auto p-4">
      <h1 className="text-2xl font-bold">{book.name}</h1>
      <img src={book.image} alt={book.name} className="w-full h-auto my-4" /> {/* Displaying the book image */}
      <p>{book.description}</p>
      <p className="text-xl font-semibold">Price: ${book.price}</p>
      <p className="text-sm">Category: {book.category}</p>
      {/* Add more details as needed */}
    </div>
  );
}

export default BookDetails;