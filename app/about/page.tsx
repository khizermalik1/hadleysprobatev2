import type { Metadata } from 'next';
import { Shield, Heart, Award, Users } from 'lucide-react';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';

export const metadata: Metadata = {
  title: 'About Us — Hadleys Probate Autos',
  description: 'Learn about Hadleys Probate Autos — specialist probate vehicle buyers with years of experience helping families, executors and solicitors across the UK.',
};

const values = [
  { icon: Heart, title: 'Compassion First', description: 'We know that selling a vehicle from an estate can feel overwhelming during an already difficult time. We approach every enquiry with empathy and patience.' },
  { icon: Shield, title: 'Total Transparency', description: 'Our quotes are fair, our process is honest and there are absolutely no hidden charges. What we say, we mean.' },
  { icon: Award, title: 'Deep Expertise', description: 'From rare pre-war classics to modern everyday vehicles, our team has the knowledge to value and acquire vehicles of every type and condition.' },
  { icon: Users, title: 'Family‑Friendly Service', description: 'We work at your pace, explain everything clearly and ensure the whole family feels comfortable and confident throughout the process.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our Story" title="About Hadleys Probate Autos" description="A specialist service built around families, executors and solicitors who need a trusted, respectful and completely hassle‑free way to sell a probate vehicle." />

      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-[#1a3560] text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>A Business Built on Trust &amp; Respect</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>Hadleys Probate Autos was founded with a single purpose: to make the sale of probate vehicles as simple, respectful and stress‑free as possible for the families and individuals who need it most.</p>
                <p>Over the years, we have worked alongside hundreds of families, estate executors, solicitors and professional trustees to help them navigate the sometimes complex process of selling a vehicle that forms part of a deceased person's estate.</p>
                <p>We understand that behind every vehicle is a family — and behind every family is a story. That is why every enquiry we receive is treated with the utmost sensitivity, patience and professionalism.</p>
                <p>Our team has extensive experience with all types of vehicles but we have a particular passion and expertise when it comes to classic cars, vintage motorcycles, barn finds and vehicles that have been in long‑term storage. These are precisely the vehicles that other buyers often overlook — and that we value most.</p>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Classic vehicle in a garage — probate estate vehicle" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-5 -left-5 bg-[#1a3560] rounded-xl p-5 shadow-xl hidden md:block">
                <p className="text-amber-400 font-black text-3xl mb-0.5" style={{ fontFamily: 'Playfair Display, serif' }}>15+</p>
                <p className="text-white/80 text-xs leading-tight">Years of specialist<br />probate experience</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f9f8f6] py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="rounded-2xl overflow-hidden shadow-xl aspect-[4/3]">
                <img src="https://images.pexels.com/photos/3849167/pexels-photo-3849167.jpeg?auto=compress&cs=tinysrgb&w=900" alt="Vintage car — specialist probate vehicle buyer" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Speciality</p>
              <h2 className="text-[#1a3560] text-3xl sm:text-4xl font-bold mb-6 leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Why We Specialise in Probate Vehicles</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm">
                <p>Probate vehicle sales are a unique type of transaction. The seller is rarely the original owner. Often there are multiple beneficiaries involved. Documents may be missing. The vehicle may not have been started in years.</p>
                <p>We have built our entire service around these circumstances. Unlike general car buying services, we know what questions to ask, what paperwork is needed, and how to work sensitively with everyone involved in the estate.</p>
                <p>We also know how to accurately value vehicles that other buyers struggle with — classic cars, motorcycles, barn finds, vehicles without MOTs or with lapsed insurance. Our specialist knowledge means you always receive a fair offer.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-amber-600 text-sm font-semibold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-[#1a3560] text-3xl sm:text-4xl font-bold" style={{ fontFamily: 'Playfair Display, serif' }}>What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="bg-[#f9f8f6] rounded-xl p-7 border border-gray-100 hover:shadow-md transition-shadow text-center">
                  <div className="w-12 h-12 bg-[#1a3560] rounded-xl flex items-center justify-center mx-auto mb-5"><Icon size={22} className="text-amber-400" /></div>
                  <h3 className="text-[#1a3560] font-bold text-base mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>{value.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTABanner />
    </>
  );
}
