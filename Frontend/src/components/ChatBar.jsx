import React, { useState } from 'react';

const suggestedMessages = [
  { question: 'How To Purchase?', answer: 'First select the item, then go to add to cart. The location is fixed..inter university. After clicking buy now and payment, wait for the delivery.' },
  { question: 'What are your working hours?', answer: 'Our working hours are from 9 AM to 6 PM, Monday to Friday.' },
  { question: 'How to contact support?', answer: 'You can contact support by emailing support@readx.com or calling (123) 456-7890.' }
];

const ChatBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const toggleChatBar = () => {
    setIsOpen(!isOpen);
  };

  const handleSuggestedMessageClick = (message) => {
    const newMessages = [...messages, { text: message.question, isBot: false }];
    setMessages(newMessages);
    setTimeout(() => {
      setMessages([...newMessages, { text: message.answer, isBot: true }]);
    }, 500); // Slight delay before showing the answer
  };

  const handleSendMessage = (event) => {
    event.preventDefault();
    const messageInput = event.target.elements.message;
    const newMessage = messageInput.value;
    if (newMessage.trim() === '') return;

    const newMessages = [...messages, { text: newMessage, isBot: false }];
    setMessages(newMessages);
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
              <div key={index} className={`my-2 p-2 rounded-lg ${msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-pink-500 text-white self-end'}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="mb-4">
            {suggestedMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleSuggestedMessageClick(msg)}
                className="block w-full text-left mb-2 p-2 bg-gray-200 hover:bg-gray-300 rounded-lg"
              >
                {msg.question}
              </button>
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
