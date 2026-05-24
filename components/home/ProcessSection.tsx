import Link from 'next/link';
import { Phone, ClipboardList, Search, Car, CreditCard, FileText, Truck } from 'lucide-react';

const steps = [
  { icon: Phone, step: '01', title: 'Get in Touch', description: "Call us, email us or submit your vehicle details online. We're here to listen and help you through the process from the very first contact." },
  { icon: ClipboardList, step: '02', title: 'Receive Your Personal Valuation', description: "Based on the details you provide, we'll offer a fair, transparent valuation — no pressure, no obligation. We take into account the vehicle's age, condition and model." },
  { icon: Search, step: '03', title: 'We Arrange an Inspection', description: "If you're happy with our initial offer, we'll arrange a convenient time to carry out an inspection at a location that suits you." },
  { icon: Car, step: '04', title: 'On‑Site Assessment', description: "Our specialist assessor visits the vehicle. We're experienced with classic, vintage and non-running vehicles. No surprises — what we say we'll pay, we pay." },
  { icon: CreditCard, step: '05', title: 'Payment on the Day', description: 'Once we agree, you receive secure same-day payment directly to your bank account. No cheques, no delays, no fuss.' },
  { icon: FileText, step: '06', title: 'We Handle the Paperwork', description: "We manage all ownership transfer documentation, including the V5C logbook, so you don't have to worry about any of the admin." },
  { icon: Truck, step: '07', title: 'Our Transport Team Collects', description: 'Our team collects the vehicle from wherever it is located — garage, driveway or storage unit — anywhere in the UK, at no cost to you.' },
];

export default function ProcessSection() {
  return (
    <section className="bg-[#f9f8f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Simple &amp; Stress‑Free</p>
          <h2 className="text-[#1a3560] text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>How Our Probate Vehicle Process Works</h2>
          <p className="text-gray-500 leading-relaxed">We have helped hundreds of families and estate executors navigate the sale of probate vehicles. Our seven-step process is designed to be clear, respectful and completely hassle‑free.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.step} className="relative bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md hover:border-amber-200 transition-all duration-200 group">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-11 h-11 bg-[#1a3560] rounded-lg flex items-center justify-center shrink-0 group-hover:bg-amber-500 transition-colors">
                    <Icon size={20} className="text-amber-400 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-3xl font-black text-gray-100 leading-none pt-1" style={{ fontFamily: 'Playfair Display, serif' }}>{step.step}</span>
                </div>
                <h3 className="text-[#1a3560] font-semibold text-base mb-2 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{step.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <Link href="/process" className="inline-flex items-center gap-2 text-[#1a3560] font-semibold text-sm border-2 border-[#1a3560] px-7 py-3 rounded-lg hover:bg-[#1a3560] hover:text-white transition-colors">Read the Full Process</Link>
        </div>
      </div>
    </section>
  );
}
