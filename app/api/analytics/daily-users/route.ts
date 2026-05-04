import { NextRequest, NextResponse } from 'next/server';

const buyClicks: Array<{
  productId: string;
  source: string;
  clickedAt: string;
  ipAddress: string;
  userAgent: string;
}> = [];

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

export async function GET(request: NextRequest) {
  try {
    const now = new Date();
    const twentyFourHoursAgo = new Date(now.getTime() - 24 * 60 * 60 * 1000);

    let data: any[] = [];
    let error: any = null;

    if (supabase) {
      const result = await supabase
        .from('buy_button_clicks')
        .select('ip_address, user_agent')
        .gte('clicked_at', twentyFourHoursAgo.toISOString());
      
      data = result.data || [];
      error = result.error;
    } else {
      data = buyClicks.filter(click => 
        new Date(click.clickedAt) >= twentyFourHoursAgo
      );
    }

    if (error) {
      console.error('Error fetching analytics:', error);
      return NextResponse.json({
        dailyUsers: 1000,
        lastUpdated: now.toISOString(),
        windowStart: twentyFourHoursAgo.toISOString(),
        error: 'Database error, using fallback',
      }, {
        headers: {
          'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300', // 1 hour revalidation
        },
      });
    }

    const uniqueUsers = new Set();
    data.forEach((click: any) => {
      const userKey = `${click.ip_address || 'unknown'}|${click.user_agent || 'unknown'}`;
      uniqueUsers.add(userKey);
    });

    const dailyUsersCount = uniqueUsers.size || 1000;

    return NextResponse.json({
      dailyUsers: dailyUsersCount,
      lastUpdated: now.toISOString(),
      windowStart: twentyFourHoursAgo.toISOString(),
      totalClicks: data.length,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300',
      },
    });
  } catch (error) {
    console.error('Error in daily-users endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

export function addBuyClick(click: {
  productId: string;
  source: string;
  ipAddress: string;
  userAgent: string;
}) {
  buyClicks.push({
    ...click,
    clickedAt: new Date().toISOString(),
  });
  
  if (buyClicks.length > 1000) {
    buyClicks.splice(0, buyClicks.length - 1000);
  }
}
