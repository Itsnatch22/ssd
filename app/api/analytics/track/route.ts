import { NextRequest, NextResponse } from 'next/server';
import { addBuyClick } from '../daily-users/route';

// Try to create Supabase client, but handle gracefully if not configured
let supabase: any = null;
try {
  if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY) {
    const { createClient } = require('@supabase/supabase-js');
    supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.SUPABASE_SERVICE_ROLE_KEY
    );
  }
} catch (error) {
  console.log('Supabase not configured, using fallback storage');
}

export async function POST(request: NextRequest) {
  try {
    const { productId, source } = await request.json();

    if (!productId || !source) {
      return NextResponse.json(
        { error: 'Missing required fields: productId, source' },
        { status: 400 }
      );
    }

    const clickData = {
      productId,
      source,
      ipAddress: request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || '',
      userAgent: request.headers.get('user-agent') || '',
    };

    if (supabase) {
      const { error } = await supabase
        .from('buy_button_clicks')
        .insert({
          product_id: productId,
          source: source,
          clicked_at: new Date().toISOString(),
          user_agent: clickData.userAgent,
          ip_address: clickData.ipAddress,
        });

      if (error) {
        console.error('Error tracking click:', error);
        // Fallback to in-memory storage
        addBuyClick(clickData);
      }
    } else {
      // Use fallback in-memory storage
      addBuyClick(clickData);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error in track endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
