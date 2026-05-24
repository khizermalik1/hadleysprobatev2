import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ValuationForm from '@/components/ValuationForm';
import { Shield, Clock, Banknote, Phone } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Free Vehicle Valuation — Hadleys Probate Autos',
  description: 'Get a free, no‑obligation valuation for your probate vehicle. Complete our simple form and we will contact you promptly with a fair, transparent offer.',
};

const reassurances = [
  { icon: Shield, text: 'No hidden charges — ever' },
  { icon: Clock, text: 'Response within a few hours' },
  { icon: Banknote, text: 'Same‑day payment on agreement' },
  { icon: Phone, text: 'Friendly UK‑based team' },
];

export default function ValuationPage() {
  return (
    <>
      <PageHero eyebrow="No Obligation" title="Get Your FREE Vehicle Valuation" description="Complete the form below and one of our specialists will be in touch promptly to discuss your vehicle and provide a personal, transparent valuation." />
      <section className="bg-[#f9f8f6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2"><ValuationForm /></div>
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-[#1a3560] font-bold text-base mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose Hadleys?</h3>
                <div className="space-y-4">
                  {reassurances.map(({ icon: Icon, text }) => (
                    <div key={text} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-amber-50 rounded-lg flex items-center justify-center shrink-0"><Icon size={15} className="text-amber-600" /></div>
                      <span className="text-gray-600 text-sm">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-[#1a3560] rounded-xl p-6 text-white">
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Prefer to Talk?</h3>
                <p className="text-white/70 text-sm mb-4 leading-relaxed">Our friendly team is available Monday–Saturday, 8am–8pm.</p>
                <a href="tel:07404387679" className="flex items-center gap-2 text-amber-400 font-bold text-lg hover:text-amber-300 transition-colors"><Phone size={18} /> 07404 387679</a>
                <a href="mailto:info@probateautos.co.uk" className="block text-white/60 text-sm mt-2 hover:text-white transition-colors">info@probateautos.co.uk</a>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-[#1a3560] font-bold text-base mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>We Buy All Vehicles</h3>
                <ul className="space-y-1.5 text-sm text-gray-600">
                  {['Classic & vintage cars', 'Modern everyday vehicles', 'Motorcycles & scooters', 'Non-running & project cars', 'Barn finds & long-stored', 'Vehicles without MOT', 'Missing V5C logbook', 'High-mileage vehicles'].map((item) => (
                    <li key={item} className="flex items-center gap-2"><span className="w-1.5 h-1.5 bg-amber-500 rounded-full shrink-0" />{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
