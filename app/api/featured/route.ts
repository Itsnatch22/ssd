import { getProducts } from '@/lib/service/products';

export async function GET(request: Request) {
  const searchParams = new URL(request.url).searchParams;
  const search = searchParams.get('search')?.trim();
  const limitValue = searchParams.get('limit');
  const options: { featuredOnly: true; search?: string; limit?: number } = {
    featuredOnly: true,
  };

  if (search) {
    options.search = search;
  }

  if (limitValue !== null) {
    const limit = Number(limitValue);
    if (!Number.isSafeInteger(limit) || limit <= 0) {
      return Response.json({ error: 'The limit must be a positive integer.' }, { status: 400 });
    }
    options.limit = limit;
  }

  try {
    const products = await getProducts(options);

    return Response.json({ products, total: products.length });
  } catch (error) {
    console.error('Failed to fetch featured products from Sanity:', error);

    return Response.json(
      { error: 'Failed to fetch featured products.' },
      { status: 500 }
    );
  }
}
