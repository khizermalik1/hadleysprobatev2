'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Shield, Star, Clock } from 'lucide-react';

export default function HeroSection() {
  const [reg, setReg] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = reg.trim().toUpperCase().replace(/\s+/g, '');
    router.push(clean ? `/valuation?reg=${encodeURIComponent(clean)}` : '/valuation');
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f2140] via-[#1a3560] to-[#1e407a]">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url(https://images.pexels.com/photos/3822844/pexels-photo-3822844.jpeg?auto=compress&cs=tinysrgb&w=1600)', backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")` }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-amber-400 rounded-full"></span>
              Trusted by Families &amp; Solicitors Across the UK
            </div>

            <h1 className="text-white text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 text-balance" style={{ fontFamily: 'Playfair Display, serif' }}>
              Sell Your Probate <span className="text-amber-400">Vehicle</span> Quickly &amp; Safely
            </h1>

            <p className="text-white/75 text-lg leading-relaxed mb-8 max-w-xl">
              We make the sale of probate vehicles as straightforward and stress‑free as possible. We pay a fair price, handle all the paperwork, and collect from anywhere in the UK. Classic cars, vintage vehicles and long‑stored cars are our speciality.
            </p>

            <div className="bg-white rounded-xl p-5 shadow-2xl max-w-md mb-8">
              <p className="text-[#1a3560] font-semibold text-sm mb-3">Enter your vehicle registration to get started:</p>
              <form onSubmit={handleSubmit} className="flex gap-2">
                <div className="flex-1 relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-amber-400 text-[#1a3560] text-xs font-black px-1.5 py-0.5 rounded leading-none">GB</div>
                  <input type="text" value={reg} onChange={(e) => setReg(e.target.value)} placeholder="e.g. AB12 CDE" maxLength={8} className="w-full pl-12 pr-3 py-3 border-2 border-gray-200 rounded-lg text-[#1a3560] font-bold uppercase text-lg tracking-wider focus:outline-none focus:border-[#1a3560] transition-colors placeholder:text-gray-300 placeholder:font-normal placeholder:normal-case placeholder:text-sm placeholder:tracking-normal" />
                </div>
                <button type="submit" className="px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5 whitespace-nowrap text-sm">Get Valuation <ArrowRight size={15} /></button>
              </form>
              <p className="text-gray-400 text-xs mt-2.5">Free &amp; no‑obligation. Takes less than 2 minutes.</p>
            </div>

            <div className="flex flex-wrap gap-4">
              {[
                { icon: Shield, label: 'No Hidden Charges' },
                { icon: Star, label: 'Fair Market Prices' },
                { icon: Clock, label: 'Same-Day Payment' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-white/80 text-sm">
                  <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center"><Icon size={14} className="text-amber-400" /></div>
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-[4/3]">
              <img src="https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Classic vehicle — probate cars we buy" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f2140]/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-5 shadow-xl max-w-[230px]">
              <p className="text-[#1a3560] font-bold text-sm mb-1" style={{ fontFamily: 'Playfair Display, serif' }}>Classic &amp; Vintage Welcome</p>
              <p className="text-gray-500 text-xs leading-relaxed">We specialise in vehicles that have been in storage or belong to an estate — any condition, any age.</p>
              <div className="mt-3 flex items-center gap-1">
                {[1,2,3,4,5].map((s) => (<Star key={s} size={12} className="fill-amber-400 text-amber-400" />))}
                <span className="text-xs text-gray-400 ml-1">5.0 rating</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
          <path d="M0 60L1440 60L1440 0C1200 50 960 60 720 40C480 20 240 0 0 20L0 60Z" fill="#f9f8f6" />
        </svg>
      </div>
    </section>
  );
}
