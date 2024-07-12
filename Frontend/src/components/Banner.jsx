import React, { useState } from 'react';
import banner from "../../public/Banner6.jpg";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row">
        <div className="order-1 w-full md:w-1/2 mt-12 md:mt-32">
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              Hello, Welcome to <span className="text-pink-900">READX</span> to experience a new{' '}
              <span className="text-pink-500">collaborative educational environment!!!</span>
            </h1>
            <p className="text-xl font-bold">CONNECT | CREATE | READ | SHARE</p>
            <label className="input input-bordered flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className="btn mt-6 btn-secondary">Secondary</button>
        </div>
        <div className="order-1 w-full mt-20 md:w-1/2">
          <img src={banner} className="md:w-[550px] md:h-[460px] md:ml-12" alt="Banner" />
        </div>
      </div>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChatBar}
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          💬
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-16 right-6 w-80 h-96 bg-white shadow-lg border rounded-lg p-4 z-50">
          <h2 className="text-lg font-bold mb-4">Chat with us!</h2>
          <div className="flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-2">
              {/* Chat messages will go here */}
              <p className="text-gray-500">Start your conversation...</p>
            </div>
            <div className="mt-4 flex">
              <input
                type="text"
                className="flex-1 border border-gray-300 p-2 rounded-l-lg focus:outline-none"
                placeholder="Type a message..."
              />
              <button className="bg-pink-500 text-white p-2 rounded-r-lg hover:bg-pink-600 transition duration-300">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
