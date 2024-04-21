import React, { useState, useRef, useEffect } from 'react';
import './App.css'; // Import your CSS for styling
import mainLogo from'./luxury.png';

function App() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
  
    // Store the user's message
    const userMessage = { text: inputValue, fromUser: true };
    setMessages(prevMessages => [...prevMessages, userMessage]);
  
    // Simulate the chatbot's response after a delay
    setTimeout(() => {
      // Store the chatbot's response
      const chatbotResponse = { text: 'This is a sample response from the chatbot.', fromUser: false };
      setMessages(prevMessages => [...prevMessages, chatbotResponse]);
    }, 500);
  
    // Clear the input field
    setInputValue('');
  };

  return (
    <div className="chatbot-container">
      <div className="picAndTitle">
        <img src={mainLogo} width={50} height={50} alt="."/>
        <div className="title">LuxuryAI</div>
      </div>
      <div className="messages-container">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.fromUser ? 'from-user' : 'from-chatbot'}`}>
            {message.text}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type your message here..."
          className="input-field"
        />
        <button type="submit" className="send-button">Send</button>
      </form>
    </div>
  );
}

export default App;
