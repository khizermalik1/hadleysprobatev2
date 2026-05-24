import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = { title: 'Privacy Policy — Hadleys Probate Autos' };

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <section className="bg-white py-16 lg:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-500 text-sm mb-8">Last updated: {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
          <div className="space-y-8 text-gray-600 text-sm leading-relaxed">
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>1. Who We Are</h2><p>Hadleys Probate Autos is a specialist probate vehicle buying service. When you use our website or submit an enquiry, we may collect and process personal data about you.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>2. Information We Collect</h2><p>We may collect your name, email address, phone number, vehicle registration and any additional details you provide through our valuation or contact forms.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>3. How We Use Your Information</h2><p>We use your information solely to provide you with a vehicle valuation, to respond to your enquiry, and to facilitate the sale process where applicable. We will never sell or share your information with third parties.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>4. Your Rights</h2><p>You have the right to request access to, correction of, or deletion of your personal data at any time. Please contact us at <a href="mailto:info@probateautos.co.uk" className="text-[#1a3560] underline">info@probateautos.co.uk</a>.</p></div>
            <div><h2 className="text-[#1a3560] font-bold text-lg mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>5. Contact</h2><p>For any privacy-related queries, contact us at: <a href="mailto:info@probateautos.co.uk" className="text-[#1a3560] underline">info@probateautos.co.uk</a> or call <a href="tel:07404387679" className="text-[#1a3560] underline">07404 387679</a>.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
