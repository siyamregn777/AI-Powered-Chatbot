// route.ts
import { OpenAI } from 'openai';
import { supabase } from '@/lib/supabaseClient';
import { findBestMatch } from '@/lib/knowledgeBase';
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(request: Request) {
  const { message } = await request.json();
  const customerSupportEmail = "supportteam@gmail.com";
  const customerSupportPhone = "(+251) 961-177-953";

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

    // Try to find an answer in the knowledge base first
    const kbAnswer = findBestMatch(message);
    if (kbAnswer) {
      await supabase
        .from('chat_history')
        .update({ bot_reply: kbAnswer })
        .eq('id', insertedId);
      
      return Response.json({ reply: kbAnswer });
    }

    // If no KB match, try OpenAI with timeout
    let openAIResponse = null;
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 5000); // 5 second timeout

      const completion = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [
          {
            role: 'system',
            content: 'You are a helpful customer support assistant for an e-commerce website. Provide accurate and concise answers to user queries. If unsure, say you cannot answer.',
          },
          { role: 'user', content: message },
        ],
        max_tokens: 150,
      }, { signal: controller.signal });

      clearTimeout(timeout);
      openAIResponse = completion.choices[0].message.content;
    } catch (openAIError) {
      console.error('OpenAI Error:', openAIError);
      openAIResponse = null;
    }

    // Prepare final response
    let finalReply = '';
    if (openAIResponse && !openAIResponse.toLowerCase().includes("i don't know") && 
        !openAIResponse.toLowerCase().includes("i cannot answer")) {
      finalReply = openAIResponse;
    } else {
      finalReply = `I couldn't find a specific answer to your question. For further assistance, please:\n\n` +
                  `- Email us at ${customerSupportEmail}\n` +
                  `- Call our support team at ${customerSupportPhone}\n` 
    }

    // Update chat history with final reply
    await supabase
      .from('chat_history')
      .update({ bot_reply: finalReply })
      .eq('id', insertedId);

    return Response.json({ reply: finalReply });

  } catch (error) {
    console.error('System Error:', error);
    
    // Comprehensive fallback with contact options
    const fallbackReply = `Sorry, I'm unable to process your request at the moment. Please try one of these options:\n\n` +
                         `1. Email: ${customerSupportEmail}\n` +
                         `2. Phone: ${customerSupportPhone}\n` 
    return Response.json({ reply: fallbackReply });
  }
}