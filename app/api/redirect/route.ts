import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/service/supabaseClient';

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id');

  if (!id) {
    return NextResponse.json({ error: 'Missing product id' }, { status: 400 });
  }

  
  const { data, error } = await supabase
    .from('ssd_products')
    .select('amazon_url, affiliate_tag')
    .eq('id', id)
    .single();

  if (error || !data) {
    return NextResponse.json({ error: 'Product not found' }, { status: 404 });
  }

  const affiliateUrl = `${data.amazon_url}?tag=${data.affiliate_tag}`;

  return NextResponse.redirect(affiliateUrl);
}