// src/app/api/chat/route.ts
import { OpenAI } from 'openai';
import db from '@/lib/db'; // Ensure this path is correct
import knowledgeBase from '@/lib/knowledgeBase';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { message } = await request.json();

  // Search knowledge base first
  const kbAnswer = knowledgeBase.find((entry) =>
    entry.question.toLowerCase().includes(message.toLowerCase())
  )?.answer;

  if (kbAnswer) {
    return Response.json({ reply: kbAnswer });
  }

  // If no match, use OpenAI API
  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
        role: 'system',
        content: 'You are a helpful customer support assistant for an e-commerce website that sells shoes. Provide accurate and concise answers to user queries.',
      },
      { role: 'user', content: message },
    ],
  });

  const reply = completion.choices[0].message.content;

  // Save chat history to MySQL
  const query = 'INSERT INTO chat_history (user_message, bot_reply) VALUES (?, ?)';
  await db.query(query, [message, reply]);

  return Response.json({ reply });
}