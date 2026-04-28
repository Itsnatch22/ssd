import { getProducts } from '@/lib/service/products';

export async function GET() {
  try {
    const products = await getProducts({ featuredOnly: true });

    return Response.json({ products, total: products.length });
  } catch (error) {
    console.error('Failed to fetch featured products from Supabase:', error);

    return Response.json(
      { error: 'Failed to fetch featured products.' },
      { status: 500 }
    );
  }
}
