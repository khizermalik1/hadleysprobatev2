import { Heart, ShieldCheck, Banknote, Wrench, MapPin, Handshake, Star } from 'lucide-react';

const reasons = [
  { icon: Heart, title: 'Sensitive & Respectful Service', description: "We understand that dealing with a loved one's estate can be an emotional time. Our team always approaches every enquiry with compassion, patience and full discretion." },
  { icon: ShieldCheck, title: 'No Hidden Charges — Ever', description: 'Our service is completely free of charge. There are no admin fees, inspection fees or deductions at any stage. The price we offer is the price you receive.' },
  { icon: Banknote, title: 'Same-Day Secure Payment', description: 'Once a deal is agreed, we transfer funds to your bank account the same day. No waiting for cheques, no uncertainty.' },
  { icon: Wrench, title: 'Classic & Non-Running Vehicles Welcome', description: "We specialise in vehicles that other buyers won't touch — classic cars, vintage motorcycles, barn finds, non-starters, and long-stored vehicles in any condition." },
  { icon: MapPin, title: 'Nationwide Collection', description: 'We collect from anywhere in the UK at no cost to you — whether the vehicle is in a private garage, a storage unit, or on a driveway.' },
  { icon: Handshake, title: 'We Handle All the Paperwork', description: "From the V5C transfer to DVLA notifications, we manage all the documentation so you don't have to lift a finger after the sale." },
];

export default function WhyChooseSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-2xl overflow-hidden shadow-xl aspect-[5/4]">
              <img src="https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Classic car being assessed" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-6 -right-4 bg-white rounded-xl p-5 shadow-xl hidden md:block">
              <p className="text-[#1a3560] font-black text-3xl mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>500+</p>
              <p className="text-gray-500 text-xs leading-tight">Probate vehicles<br />purchased</p>
            </div>
            <div className="absolute -bottom-4 left-6 bg-[#1a3560] rounded-xl p-5 shadow-xl hidden md:block">
              <p className="text-amber-400 font-black text-3xl mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>100%</p>
              <p className="text-white/80 text-xs leading-tight">No-obligation<br />valuations</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Why Families Choose Us</p>
            <h2 className="text-[#1a3560] text-3xl sm:text-4xl font-bold mb-5 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Why Choose Hadleys Probate Autos?</h2>
            <p className="text-gray-500 leading-relaxed mb-10">As specialists in probate vehicle sales, we know that families and executors need a service they can trust completely. Here is why hundreds of families have chosen us.</p>
            <div className="grid sm:grid-cols-2 gap-6">
              {reasons.map((reason) => {
                const Icon = reason.icon;
                return (
                  <div key={reason.title} className="flex gap-4">
                    <div className="w-10 h-10 bg-amber-50 border border-amber-100 rounded-lg flex items-center justify-center shrink-0 mt-0.5"><Icon size={18} className="text-amber-600" /></div>
                    <div>
                      <h3 className="text-[#1a3560] font-semibold text-sm mb-1 leading-snug" style={{ fontFamily: 'Playfair Display, serif' }}>{reason.title}</h3>
                      <p className="text-gray-500 text-xs leading-relaxed">{reason.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
