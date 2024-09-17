import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Freebook from '../components/Freebook';
import Footer from '../components/Footer';
import axios from 'axios';

function Home() {
  const [book, setBook] = useState([]);

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

  return (
    <>
      <Navbar book={book} /> 
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;