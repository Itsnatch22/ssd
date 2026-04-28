import { Hero } from '@/components/Hero';
import { StatsBar } from '@/components/StatsBar';
import { HowItWorks } from '@/components/HowItWorks';
import { FeaturedDeals } from '@/components/FeaturedDeals';
import { DiskTable } from '@/components/DiskTable';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-1">
        <Hero />
        <StatsBar />
        <FeaturedDeals />
        <HowItWorks />
        <DiskTable />
      </div>
    </main>
  );
}
