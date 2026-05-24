import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';

export default function CTABanner() {
  return (
    <section className="bg-[#1a3560] py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-white text-3xl sm:text-4xl font-bold mb-3 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to Sell Your Probate Vehicle?</h2>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed">Get a free, no‑obligation valuation today. We will call you within a few hours. No pressure, no hidden fees — just a straightforward, respectful service.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link href="/valuation" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-bold rounded-lg transition-colors shadow-lg text-sm">Get Your FREE Valuation <ArrowRight size={16} /></Link>
            <a href="tel:07404387679" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold rounded-lg transition-colors text-sm"><Phone size={16} /> Call 07404 387679</a>
          </div>
        </div>
      </div>
    </section>
  );
}
