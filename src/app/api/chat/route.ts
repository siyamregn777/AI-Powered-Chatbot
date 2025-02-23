import { OpenAI } from 'openai';
import db from '@/lib/db';
import { findBestMatch } from '@/lib/knowledgeBase';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { message } = await request.json();

  // Try to find an answer in the knowledge base
  const kbAnswer = findBestMatch(message);
  if (kbAnswer) {
    return Response.json({ reply: kbAnswer });
  }

  // If no match, use OpenAI API
  try {
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
  } catch (error) {
    console.error('OpenAI API Error:', error);

    // Fallback response
    return Response.json({
      reply: 'Sorry, I am unable to process your request at the moment. Please try again later.',
    });
  }
}