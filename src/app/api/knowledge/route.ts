// app/api/knowledge/route.ts
import { findBestMatch } from '@/lib/knowledgeBase';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { message } = await request.json();
  
  try {
    // Try to find answer in knowledge base
    const kbAnswer = findBestMatch(message);
    
    if (kbAnswer) {
      return NextResponse.json({ reply: kbAnswer });
    }
    
    // If not found, return empty response to trigger GPT fallback
    return NextResponse.json({ reply: null });
  } catch (error) {
    console.error('Knowledge base error:', error);
    return NextResponse.json({ reply: null });
  }
}