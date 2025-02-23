import { OpenAI } from 'openai';
import db from '@/lib/db.mjs'; // Update the import pathimport { findBestMatch } from '@/lib/knowledgeBase';
import { ResultSetHeader } from 'mysql2'; // Import ResultSetHeader
import { findBestMatch } from '@/lib/knowledgeBase';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    // Save user question to MySQL
    const insertQuery = 'INSERT INTO chat_history (user_message) VALUES (?)';
    const [result] = await db.query<ResultSetHeader>(insertQuery, [message]); // Explicitly type result

    // Get the inserted row ID
    const insertedId = result.insertId;

    // Try to find an answer in the knowledge base
    const kbAnswer = findBestMatch(message);
    if (kbAnswer) {
      // Update the chat history with the bot's reply
      const updateQuery = 'UPDATE chat_history SET bot_reply = ? WHERE id = ?';
      await db.query(updateQuery, [kbAnswer, insertedId]);
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

    // Update the chat history with the bot's reply
    const updateQuery = 'UPDATE chat_history SET bot_reply = ? WHERE id = ?';
    await db.query(updateQuery, [reply, insertedId]);

    return Response.json({ reply });
  } catch (error) {
    console.error('Error:', error);

    // Fallback response
    return Response.json({
      reply: 'Sorry, I am unable to process your request at the moment. Please try again later.',
    });
  }
}