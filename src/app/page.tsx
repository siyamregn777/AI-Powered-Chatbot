'use client';

import { useState, useEffect, useRef } from 'react';
import styles from '../styles/Chat.module.css';

type Message = {
  role: 'user' | 'bot';
  content: string;
};

export default function Chat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'bot', content: 'Hello! How can I assist you today?' },
  ]);
  const [input, setInput] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [lastActivity, setLastActivity] = useState<number>(Date.now());
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Clear chat after 20 minutes of inactivity
  useEffect(() => {
    const timer = setInterval(() => {
      if (Date.now() - lastActivity > 20 * 60 * 1000) {
        setMessages([{ role: 'bot', content: 'Hello! How can I assist you today?' }]);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [lastActivity]);

  const simulateTyping = (text: string, callback: () => void) => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        setMessages((prev) => {
          const last = prev[prev.length - 1];
          return last.role === 'bot'
            ? [...prev.slice(0, -1), { ...last, content: text.substring(0, index + 1) }]
            : prev;
        });
        index++;
      } else {
        clearInterval(interval);
        callback();
      }
    }, 20);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setLastActivity(Date.now());

    if (input.toLowerCase() === 'clear') {
      setMessages([{ role: 'bot', content: 'Hello! How can I assist you today?' }]);
      setInput('');
      return;
    }

    // Add empty bot message for typing indicator
    setMessages((prev) => [...prev, { role: 'bot', content: '' }]);
    setIsTyping(true);
    setInput('');

    try {
      // First try to get response from knowledge base
      const kbResponse = await fetch('/api/knowledge', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });
      
      const kbData = await kbResponse.json();
      
      if (kbData.reply) {
        // Found in knowledge base
        simulateTyping(kbData.reply, () => setIsTyping(false));
      } else {
        // Not found in knowledge base, use GPT-3.5
        const gptResponse = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ message: input }),
        });
        
        const gptData = await gptResponse.json();
        simulateTyping(gptData.reply, () => setIsTyping(false));
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { role: 'bot', content: 'Sorry, I encountered an error. Please try again.' },
      ]);
      setIsTyping(false);
    }
  };

  return (
    <div className={styles.chatContainer}>
      {/* Header */}
      <header className={styles.header}>
        <h1 className={styles.headerTitle}>ChatBot</h1>
      </header>

      {/* Messages container */}
      <div className={styles.messagesContainer}>
        {messages.map((msg: Message, index: number) => (
          <div
            key={index}
            className={`${styles.messageWrapper} ${
              msg.role === 'user' ? styles.userMessageWrapper : styles.botMessageWrapper
            }`}
          >
            <div
              className={`${styles.messageBubble} ${
                msg.role === 'user' ? styles.userMessageBubble : styles.botMessageBubble
              }`}
            >
              {msg.content}
              {isTyping && index === messages.length - 1 && (
                <span className={styles.typingIndicator}></span>
              )}
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className={styles.inputArea}>
        <div className={styles.inputContainer}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            className={styles.inputField}
            placeholder="Type your message..."
            disabled={isTyping}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`${styles.sendButton} ${
              !input.trim() || isTyping
                ? styles.sendButtonDisabled
                : styles.sendButtonActive
            }`}
          >
            Send
          </button>
        </div>
        <p className={styles.disclaimer}>
          ChatBot can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}