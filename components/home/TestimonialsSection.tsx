import { Star, Quote } from 'lucide-react';

const testimonials = [
  { name: 'Margaret T.', role: 'Estate Executor, Surrey', content: 'When my father passed away, his 1967 Triumph Herald had been in the garage for 15 years. Hadleys were brilliant — they came to us, handled everything and paid exactly what they quoted. I cannot recommend them highly enough.', stars: 5 },
  { name: 'David & Jane P.', role: 'Beneficiaries, Yorkshire', content: 'Our solicitor recommended Hadleys Probate Autos and we are so glad they did. The whole process was handled with such sensitivity and professionalism. The car was collected promptly and payment was immediate.', stars: 5 },
  { name: 'Robert C.', role: 'Solicitor, London', content: 'I regularly recommend Hadleys to my probate clients. They are reliable, transparent and always treat families with great respect. No hidden fees, no last-minute changes to offers — exactly what estate administration needs.', stars: 5 },
  { name: 'Susan M.', role: 'Estate Executor, Cheshire', content: "The car wouldn't start and hadn't moved in years. Hadleys still gave a fair offer, organised a transporter and had it collected within two days. Completely stress-free from start to finish.", stars: 5 },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-[#f9f8f6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">What Our Clients Say</p>
          <h2 className="text-[#1a3560] text-3xl sm:text-4xl font-bold mb-4" style={{ fontFamily: 'Playfair Display, serif' }}>Trusted by Families &amp; Solicitors</h2>
          <p className="text-gray-500 leading-relaxed">We take great pride in the service we provide during what is often a difficult time. Here is what some of our clients have told us.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
              <Quote size={28} className="text-amber-200 mb-3 shrink-0" />
              <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-5">{t.content}</p>
              <div>
                <div className="flex gap-0.5 mb-2">{Array.from({ length: t.stars }).map((_, i) => (<Star key={i} size={12} className="fill-amber-400 text-amber-400" />))}</div>
                <p className="text-[#1a3560] font-semibold text-sm" style={{ fontFamily: 'Playfair Display, serif' }}>{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
