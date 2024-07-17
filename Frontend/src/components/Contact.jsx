import React, { useState } from 'react';
import contact from "../../public/contact1.jpg";
function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSend = async (e) => {
    e.preventDefault();
    
    // This is where you would typically handle the email sending logic
    // For now, we'll just log the values to the console
    console.log('Email:', email);
    console.log('Message:', message);

    // Reset the form
    setEmail('');
    setMessage('');
  };

  return (
    <div className="bg-pink-100 p-10 rounded-xl shadow-lg max-w-md mx-auto mt-20">
      <h2 className="font-bold text-2xl mb-5 text-center text-pink-700">Contact Us</h2>
      <form onSubmit={handleSend}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-pink-500 focus:border-pink-500"
          />
        </div>
        <button className="w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-700 duration-200" type="submit">
          Send
        </button>
      </form>
      <div className="mt-10 text-center">
          <img
            src={contact}
            className="mx-auto rounded-md shadow-md"
            alt="contact"
          />
        </div>
    </div>
  );
}

export default Contact;
