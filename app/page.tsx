import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { Philosophy } from '@/components/philosophy';
import { Approach } from '@/components/approach';
import { Impact } from '@/components/impact';
import { Structure } from '@/components/structure';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Philosophy />
      <Approach />
      <Impact />
      <Structure />
      <CTA />
      <Footer />
    </div>
  );
}
