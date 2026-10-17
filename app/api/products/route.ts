import { getProducts } from '@/lib/service/products';

export async function GET() {
  try {
    const products = await getProducts();

    return Response.json({ products, total: products.length });
  } catch (error) {
    console.error('Failed to fetch products from Sanity:', error);

    return Response.json(
      { error: 'Failed to fetch products.' },
      { status: 500 }
    );
  }
}
