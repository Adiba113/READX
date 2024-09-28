import React, { useState } from 'react';
import contact from "../../public/contact1.jpg";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);  // To manage loading state
  const [feedback, setFeedback] = useState('');  // To show success or error feedback

  const handleSend = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);  // Start submitting
    setFeedback('');  // Clear previous feedback

    try {
      const response = await fetch('http://localhost:5000/api/sendMail', {  // Update URL with your backend endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),  // Send email and message to backend
      });

      const data = await response.json();
      
      if (response.ok) {
        setFeedback('Your message has been sent successfully!');
      } else {
        setFeedback('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setFeedback('An error occurred. Please try again later.');
    }

    setIsSubmitting(false);  // End submitting
    setEmail('');
    setMessage('');
  };

  return (
    <>
      <Navbar />
      <div className="bg-pink-100 p-10 rounded-xl shadow-lg max-w-md mx-auto mt-20">
        <h2 className="font-bold text-2xl mb-5 text-center text-pink-700">Contact Us</h2>

        {/* Display feedback message */}
        {feedback && <div className="mb-4 text-center text-green-700">{feedback}</div>}

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
          <button
            className="w-full bg-pink-500 text-white rounded-md py-2 hover:bg-pink-700 duration-200"
            type="submit"
            disabled={isSubmitting}  // Disable button while submitting
          >
            {isSubmitting ? 'Sending...' : 'Send'}
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
      <Footer />
    </>
  );
}

export default Contact;
