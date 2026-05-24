import type { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import ProcessSection from '@/components/home/ProcessSection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import CTABanner from '@/components/CTABanner';

export const metadata: Metadata = {
  title: 'Sell Your Probate Vehicle Quickly & Safely — Hadleys Probate Autos',
  description: 'Hadleys Probate Autos buys probate vehicles from families, executors and solicitors across the UK. Free valuation, same-day payment, no hidden charges. Classic, vintage and all vehicles considered.',
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ProcessSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTABanner />
    </>
  );
}
