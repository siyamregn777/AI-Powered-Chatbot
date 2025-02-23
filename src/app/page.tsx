// src/app/page.tsx
'use client'; // Mark as a Client Component
import { useState } from 'react';
import styles from '../styles/Chat.module.css';

export default function Home() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim()) {
      const userMessage = { role: 'user', content: input };
      setMessages((prev: { role: string; content: string }[]) => [...prev, userMessage]);

      // Send user input to the API route
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      const botMessage = { role: 'bot', content: data.reply };
      setMessages((prev: { role: string; content: string }[]) => [...prev, botMessage]);

      setInput('');
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.messages}>
        {messages.map((msg: { role: string; content: string }, index: number) => (
          <div key={index} className={msg.role === 'user' ? styles.userMessage : styles.botMessage}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className={styles.inputContainer}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
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