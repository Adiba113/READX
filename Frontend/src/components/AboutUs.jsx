import React, { useState } from 'react';
import adiba from "../../public/adiba.jpg";
import srabani from "../../public/srabani1.jpg";
import Navbar from '../components/Navbar'
import Course from '../components/Course'
import Footer from '../components/Footer'
function AboutUs() {
  const [showMoreSrabani, setShowMoreSrabani] = useState(false);
  const [showMoreNusrat, setShowMoreNusrat] = useState(false);

  return (
    <>
    <Navbar />
    <div className="bg-pink-100 p-10 rounded-xl shadow-lg max-w-4xl mx-auto mt-20">
      <h2 className="font-bold text-3xl mb-10 text-center text-gray-800">About Us</h2>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="flex-1 text-center">
          <img src={srabani} alt="Srabani Mitra" className="mx-auto rounded-full shadow-md" />
          <h3 className="font-bold text-xl mt-4">Srabani Mitra</h3>
          <button
            className="bg-blue-500 text-white rounded-md px-3 py-1 mt-2 hover:bg-blue-700 duration-200"
            onClick={() => setShowMoreSrabani(!showMoreSrabani)}
          >
            {showMoreSrabani ? 'Show Less' : 'Show More'}
          </button>
          {showMoreSrabani && (
            <p className="mt-4 text-gray-700">
              Srabani Mitra's thought behind making this website is to create a platform that empowers readers with easy access to information and a community to share their love for reading.
            </p>
          )}
        </div>
        <div className="flex-1 text-center">
          <img src={adiba} alt="Nusrat Jahan Adiba" className="mx-auto rounded-full shadow-md" />
          <h3 className="font-bold text-xl mt-4">Nusrat Jahan Adiba</h3>
          <button
            className="bg-blue-500 text-white rounded-md px-3 py-1 mt-2 hover:bg-blue-700 duration-200"
            onClick={() => setShowMoreNusrat(!showMoreNusrat)}
          >
            {showMoreNusrat ? 'Show Less' : 'Show More'}
          </button>
          {showMoreNusrat && (
            <p className="mt-4 text-gray-700">
              Nusrat Jahan Adiba's vision for this website is to build a resourceful and engaging space for book lovers, promoting literacy and the joy of reading.
            </p>
          )}
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default AboutUs;
