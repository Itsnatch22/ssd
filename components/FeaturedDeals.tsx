import { getProducts } from '@/lib/service/products';
import { DealCard } from './DealCard';
import { Tag } from 'lucide-react';

export async function FeaturedDeals() {
  const devices = await getProducts({ featuredOnly: true });

  if (!devices.length) return null;

  return (
    <section className="py-24 bg-surface">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-accent/10 text-accent p-2 rounded-xl">
            <Tag size={24} />
          </div>
          <div>
            <h2 className="text-3xl font-heading font-bold tracking-tight">
              Featured <span className="text-accent">Deals</span>
            </h2>
            <p className="text-text-secondary">Hand-picked storage values for you.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devices.map((device, i) => (
            <DealCard key={device.id} device={device} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
