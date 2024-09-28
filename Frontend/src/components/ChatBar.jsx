import React, { useState } from 'react';

const suggestedMessages = [
  { question: 'How To Purchase?', answer: 'First select the item, then go to add to cart. The location is fixed..inter university. After clicking buy now and payment, wait for the delivery.' },
  { question: 'how to purchase', answer: 'First select the item, then go to add to cart. The location is fixed..inter university. After clicking buy now and payment, wait for the delivery.' },
  { question: 'how to purchase?', answer: 'First select the item, then go to add to cart. The location is fixed..inter university. After clicking buy now and payment, wait for the delivery.' },

  { question: 'What are your working hours?', answer: 'Our working hours are from 9 AM to 6 PM, Monday to Friday.' },
  { question: 'How to contact support?', answer: 'You can contact support by emailing support@readx.com or calling (123) 456-7890.' },
  { question: 'how to contact support?', answer: 'You can contact support by emailing support@readx.com or calling (123) 456-7890.' },
  { question: 'how to contact support', answer: 'You can contact support by emailing support@readx.com or calling (123) 456-7890.' },
  



];

const defaultResponse = 'We are having some problems. Please for any inquiry email us at readx@gmail.com.';

const ChatBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatBar = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const newMessage = messageInput.value.trim();
    if (newMessage === '') return;

    const userMessage = { text: newMessage, isBot: false };

    // Check if the message matches any of the predefined questions
    const matchedMessage = suggestedMessages.find(
      (msg) => msg.question.toLowerCase() === newMessage.toLowerCase()
    );

    const botResponse = {
      text: matchedMessage ? matchedMessage.answer : defaultResponse,
      isBot: true,
    };

    // Add user message first
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);

    // Then add the bot response after a short delay
    setTimeout(() => {
      setMessages([...newMessages, botResponse]);
    }, 500);

    messageInput.value = '';
  };

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={toggleChatBar}
          className="bg-pink-500 text-white p-4 rounded-full shadow-lg hover:bg-pink-600 transition duration-300"
        >
          💬
        </button>
      </div>
      {isOpen && (
        <div className="fixed bottom-16 right-6 w-80 h-96 bg-white shadow-lg border rounded-lg p-4 z-50 flex flex-col">
          <h2 className="text-lg font-bold mb-4">Chat with us!</h2>
          <div className="flex-1 overflow-y-auto p-2 mb-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-2 p-2 rounded-lg ${
                  msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-pink-500 text-white self-end'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <form onSubmit={handleSendMessage} className="flex">
            <input
              type="text"
              name="message"
              className="flex-1 border border-gray-300 p-2 rounded-l-lg focus:outline-none"
              placeholder="Type a message..."
            />
            <button className="bg-pink-500 text-white p-2 rounded-r-lg hover:bg-pink-600 transition duration-300">
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default ChatBar;
