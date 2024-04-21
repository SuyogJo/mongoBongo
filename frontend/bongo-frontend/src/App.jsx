import React, { useState, useRef, useEffect } from 'react';
import './App.css'; // Import your CSS for styling
import mainLogo from'./luxury.png'
import personPic from './image-person.jpeg'
import txtFile from './ans.txt'

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
      // Store the chatbot's r
      const chatbotResponse = { text: `Based on the Google Trends for the last week, here are the top 5 most relevant trends pertaining to the characteristics of the person in the image:

      Topic Name: How to use clippers to cut hair \n
      Summary: Searches for “How to use clippers to cut hair” have gone up by 140% this week.\n
      Reasons why I would be interested: This trend aligns with the neat and professional style of the individual in the image, indicating a focus on grooming and personal appearance.\n
      
      Topic Name: Puppy adoption near me\n
      Summary: Searches for “Puppy adoption near me” went up 100%.\n
      Reasons why I would be interested: This trend reflects a compassionate and approachable side, suggesting an interest in pets and animal welfare.\n
      
      Topic Name: Taylor Swift\n
      Summary: Taylor Swift has been trending in searches.\n
      Reasons why I would be interested: This trend may indicate a shared interest in music and popular culture, adding a touch of creativity to the individual's profile.\n
      
      Topic Name: Arizona Coyotes\n
      Summary: Arizona Coyotes have been trending in searches.\n
      Reasons why I would be interested: This trend could suggest a potential interest in sports or a connection to the Arizona region, adding a dynamic aspect to the individual's personality.\n
      
      Topic Name: Mandisa\n
      Summary: Mandisa has been trending in searches.\n
      Reasons why I would be interested: This trend may indicate a diverse taste in music or a curiosity about trending artists, showcasing a well-rounded and open-minded nature.`, fromUser: false };
      setMessages(prevMessages => [...prevMessages, chatbotResponse]);
    }, 500);
  
    // Clear the input field
    setInputValue('');
  };

  return (
    <div className="chatbot-container">
      <div className="picAndTitle">
        <img src={mainLogo} width={50} height={50} alt="."/>
        <div className="title">SnapTrend</div>
      </div>
      <div className="messages-container">
        <img src={personPic} width={1} height={500} alt="." className="image-person"/>
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
