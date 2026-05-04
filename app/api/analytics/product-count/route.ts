import { NextRequest, NextResponse } from 'next/server';

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
    let productCount = 500; // Fallback value

    if (supabase) {
      // Get actual product count from database
      const { count, error } = await supabase
        .from('ssd_products')
        .select('*', { count: 'exact', head: true });

      if (!error && count !== null) {
        productCount = count;
      } else if (error) {
        console.error('Error fetching product count:', error);
        // Keep fallback value
      }
    }

    return NextResponse.json({
      productCount,
      lastUpdated: new Date().toISOString(),
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=300', // 1 hour revalidation
      },
    });
  } catch (error) {
    console.error('Error in product-count endpoint:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
