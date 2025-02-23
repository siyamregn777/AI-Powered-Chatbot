// frontend/src/pages/index.js
import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages((prev) => [...prev, userMessage]);

      // Send user input to the backend
      const response = await axios.post('/api/chat', { message: input });
      const botMessage = { role: 'bot', content: response.data.reply };
      setMessages((prev) => [...prev, botMessage]);

      setInput('');
    }
  };

  return (
    <div>
      <div>
        {messages.map((msg, index) => (
          <div key={index} className={msg.role}>
            {msg.content}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  );
}