import { OpenAI } from 'openai';
import { supabase } from '@/lib/supabaseClient'; // Import Supabase client
import { findBestMatch } from '@/lib/knowledgeBase';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { message } = await request.json();

  try {
    // Save user question to Supabase
    const { data: insertResult, error: insertError } = await supabase
      .from('chat_history')
      .insert([{ user_message: message }])
      .select();

    if (insertError) {
      throw insertError;
    }

    const insertedId = insertResult[0].id;

    // Try to find an answer in the knowledge base
    const kbAnswer = findBestMatch(message);
    if (kbAnswer) {
      // Update the chat history with the bot's reply
      const { error: updateError } = await supabase
        .from('chat_history')
        .update({ bot_reply: kbAnswer })
        .eq('id', insertedId);

      if (updateError) {
        throw updateError;
      }

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
    const { error: updateError } = await supabase
      .from('chat_history')
      .update({ bot_reply: reply })
      .eq('id', insertedId);

    if (updateError) {
      throw updateError;
    }

    return Response.json({ reply });
  } catch (error) {
    console.error('Error:', error);

    // Fallback response
    return Response.json({
      reply: 'Sorry, I am unable to process your request at the moment. Please try again later.',
    });
  }
}