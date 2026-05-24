import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = { title: 'Terms of Service — Hadleys Probate Autos' };

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" />
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>1. Service Description</h2><p>Hadleys Probate Autos provides a specialist vehicle purchasing service for probate vehicles. Our valuations are free and non‑binding. No contract exists until a formal written agreement is signed by both parties.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>2. Valuations</h2><p>All initial valuations are estimates based on information provided. A formal offer is only made following a physical inspection.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>3. No Obligation</h2><p>You are under no obligation to sell to us at any stage. Similarly, we are under no obligation to purchase any vehicle until a formal agreement is signed.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>4. Probate Requirements</h2><p>It is the responsibility of the seller to ensure they have the legal right to sell the vehicle. In most circumstances, a Grant of Probate or Letters of Administration must be in place before the sale can proceed.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>5. Contact</h2><p>For queries relating to these terms, contact us at: <a href="mailto:info@probateautos.co.uk" className="text-[#1a3560] underline">info@probateautos.co.uk</a>.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
