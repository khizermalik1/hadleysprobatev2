import type { Metadata } from 'next';
import { Phone, ClipboardList, Search, Car, CreditCard, FileText, Truck } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'Our Process — Hadleys Probate Autos',
  description: 'Our simple 7-step process for buying probate vehicles. From first contact to collection — clear, transparent and completely hassle-free.',
};

const steps = [
  { icon: Phone, number: '01', title: 'Get in Touch', description: ['The first step is simply to contact us. You can call, email or use our online valuation form — whichever you feel most comfortable with.', 'There is absolutely no pressure, no commitment and no cost at this stage. We will listen carefully to your situation, ask a few straightforward questions about the vehicle and begin to understand what you need from us.', 'We work with families, executors, solicitors, and trustees. Whatever your role in the estate, we are here to help.'] },
  { icon: ClipboardList, number: '02', title: 'Receive Your Personal Valuation', description: ['Based on the details you provide — the vehicle registration, its approximate condition, mileage and location — we will prepare a personal valuation and present it to you clearly.', 'Our valuations are based on current market data combined with our specialist knowledge of classic, vintage and probate vehicles. We always aim to offer the fairest possible price.', 'There is no obligation to accept. If you would like time to consider, that is absolutely fine.'] },
  { icon: Search, number: '03', title: 'We Arrange an Inspection', description: ['If you are happy with our initial offer, the next step is for one of our specialists to carry out a more detailed inspection of the vehicle.', 'We will work around your schedule to arrange a convenient time and location. We can visit a residential property, a storage facility, a garage or any other location where the vehicle is kept.', 'The inspection is completely free of charge and places no obligation on either party.'] },
  { icon: Car, number: '04', title: 'On‑Site Assessment', description: ['Our specialist will carry out a professional assessment of the vehicle on site. We assess condition, mechanical state, any bodywork concerns and overall authenticity in the case of classic or vintage vehicles.', 'We are highly experienced with vehicles that have been in long‑term storage, barn finds, non‑running vehicles, and those missing paperwork. We will never be dismissive or reduce our offer unreasonably.', 'Once the assessment is complete, we will confirm our final offer. In the vast majority of cases, this matches or comes very close to our initial valuation.'] },
  { icon: CreditCard, number: '05', title: 'Payment on the Day', description: ['Once you accept our offer, we make payment immediately — directly to your bank account on the same day.', 'We do not use cheques. There are no delays and no deductions. The agreed amount is transferred securely via bank transfer.', 'You will receive confirmation of the transfer before we take possession of the vehicle.'] },
  { icon: FileText, number: '06', title: 'We Handle the Paperwork', description: ['One of the most daunting aspects of selling a probate vehicle is the paperwork. We take care of all of it on your behalf.', 'This includes completing the V5C logbook transfer, notifying the DVLA of the change of ownership, and providing you with a signed receipt of purchase.', 'If the V5C is missing or lost, do not worry — we can guide you through the process of applying for a replacement, or in many cases we can proceed without one.'] },
  { icon: Truck, number: '07', title: 'Our Transport Team Collects', description: ['Once everything is agreed and payment has been made, our transport team will collect the vehicle at a time that is convenient for you.', 'We collect from anywhere in the United Kingdom — mainland England, Scotland, Wales and Northern Ireland. There is absolutely no collection charge.', 'Whether the vehicle is in a private garage, a storage unit, on a driveway or in a barn, we have the equipment and expertise to collect it safely.'] },
];

export default function ProcessPage() {
  return (
    <>
      <PageHero eyebrow="Simple & Clear" title="Our Probate Vehicle Process" description="We have designed our process to be as simple and stress‑free as possible. Here is exactly what to expect from first contact to final collection." />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-0">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isLast = idx === steps.length - 1;
              return (
                <div key={step.number} className="relative flex gap-8">
                  <div className="flex flex-col items-center shrink-0">
                    <div className="w-14 h-14 bg-[#1a3560] rounded-xl flex items-center justify-center shadow-md shrink-0 z-10"><Icon size={22} className="text-amber-400" /></div>
                    {!isLast && <div className="w-0.5 bg-gradient-to-b from-[#1a3560]/30 to-transparent flex-1 my-2 min-h-[40px]" />}
                  </div>
                  <div className="pb-12 flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-amber-500 font-black text-2xl leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>{step.number}</span>
                      <h2 className="text-[#1a3560] text-xl font-bold leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>{step.title}</h2>
                    </div>
                    <div className="space-y-3">{step.description.map((para, i) => (<p key={i} className="text-gray-600 text-sm leading-relaxed">{para}</p>))}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#f9f8f6] py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 text-center">
            <h3 className="text-[#1a3560] text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Have a Question About the Process?</h3>
            <p className="text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto text-sm">Every estate is different. Please do not hesitate to call us for a confidential, no‑obligation chat.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:07404387679" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1a3560] text-white font-semibold rounded-lg hover:bg-[#0f2140] transition-colors text-sm">Call 07404 387679</a>
              <a href="/valuation" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-amber-500 text-white font-semibold rounded-lg hover:bg-amber-600 transition-colors text-sm">Start Your Free Valuation</a>
            </div>
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
