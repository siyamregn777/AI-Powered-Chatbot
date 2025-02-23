'use client';
import { useState, useEffect } from 'react';
import styles from '../styles/Chat.module.css';

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: 'bot', content: 'What can I help you with today?' },
  ]);
  const [input, setInput] = useState('');
  const [lastActivity, setLastActivity] = useState(Date.now());
  const [isTyping, setIsTyping] = useState(false); // Track typing state

  // Fetch chat history on page load
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await fetch('/api/chat/history');
        const data = await response.json();
        if (Array.isArray(data)) {
          const formattedMessages = data.map((msg) => ({
            role: 'bot',
            content: msg.bot_reply || 'What can I help you with today?',
          }));
          setMessages(formattedMessages);
        }
      } catch (error) {
        console.error('Error fetching chat history:', error);
      }
    };

    fetchChatHistory();
  }, []);

  // Clear chat history after 20 minutes of inactivity
  useEffect(() => {
    const inactivityTimer = setInterval(() => {
      if (Date.now() - lastActivity > 20 * 60 * 1000) {
        setMessages([]);
      }
    }, 1000);

    return () => clearInterval(inactivityTimer);
  }, [lastActivity]);

  // Function to simulate typing effect
  const simulateTyping = (text: string, callback: () => void) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setMessages((prev) => {
          const lastMessage = prev[prev.length - 1];
          if (lastMessage.role === 'bot') {
            // Update the last bot message with the new content
            return [
              ...prev.slice(0, -1),
              { ...lastMessage, content: text.slice(0, index + 1) },
            ];
          }
          return prev;
        });
        index++;
      } else {
        clearInterval(interval);
        callback();
      }
    }, 50); // Adjust typing speed (milliseconds per character)
  };

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages((prev) => [...prev, userMessage]);
      setLastActivity(Date.now());

      if (input.toLowerCase() === 'clear' || input.toLowerCase() === 'delete') {
        setMessages([]);
        setInput('');
        return;
      }

      // Add a placeholder bot message
      setMessages((prev) => [...prev, { role: 'bot', content: '' }]);
      setIsTyping(true);

      // Send user input to the API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botReply = data.reply;

      // Simulate typing effect for the bot's reply
      simulateTyping(botReply, () => {
        setIsTyping(false); // Stop typing animation
      });

      setInput('');
    }
  };

  // Handle "Enter" key press
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg, index) => (
          <div key={index} className={msg.role === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.content}
            {isTyping && index === messages.length - 1 && <span className={styles.cursor}>|</span>}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className={styles.input}
          placeholder="Type your message..."
        />
        <button onClick={handleSend} className={styles.button}>
          Send
        </button>
      </div>
    </div>
  );
}