import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ContactForm from '@/components/ContactForm';
import { Phone, Mail, Clock, MapPin, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us — Hadleys Probate Autos',
  description: "Get in touch with Hadleys Probate Autos. Call, email or use our contact form. We're here to help families, executors and solicitors with probate vehicle sales.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Get in Touch" title="Contact Hadleys Probate Autos" description="We are here to help. Whether you have a vehicle to discuss or simply a question about the probate process, please do not hesitate to reach out." />
      <section className="bg-[#f9f8f6] py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h3 className="text-[#1a3560] font-bold text-base mb-5" style={{ fontFamily: 'Playfair Display, serif' }}>Direct Contact</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5"><Phone size={17} className="text-amber-600" /></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Telephone</p><a href="tel:07404387679" className="text-[#1a3560] font-bold text-base hover:text-amber-600 transition-colors">07404 387679</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5"><Mail size={17} className="text-amber-600" /></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Email</p><a href="mailto:info@probateautos.co.uk" className="text-[#1a3560] font-semibold text-sm hover:text-amber-600 transition-colors break-all">info@probateautos.co.uk</a></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5"><Clock size={17} className="text-amber-600" /></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Opening Hours</p><p className="text-gray-700 text-sm font-medium">Mon – Sat: 8:00am – 8:00pm</p><p className="text-gray-400 text-xs">Sunday: Closed</p></div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5"><MapPin size={17} className="text-amber-600" /></div>
                    <div><p className="text-gray-500 text-xs mb-0.5">Coverage</p><p className="text-gray-700 text-sm font-medium">Nationwide — Across the UK</p><p className="text-gray-400 text-xs">England, Scotland, Wales &amp; N. Ireland</p></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#1a3560] rounded-xl p-6 text-white">
                <h3 className="font-bold text-base mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to Get a Valuation?</h3>
                <p className="text-white/70 text-sm mb-5 leading-relaxed">Our free valuation form is the quickest way to get the ball rolling.</p>
                <Link href="/valuation" className="flex items-center justify-center gap-2 px-5 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg transition-colors text-sm">Get Your FREE Valuation <ArrowRight size={15} /></Link>
              </div>
              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
                <p className="text-amber-800 text-sm font-semibold mb-1">Typical Response Time</p>
                <p className="text-amber-700 text-xs leading-relaxed">We aim to respond to all enquiries within 2–4 hours during working hours. For urgent matters, please call us directly.</p>
              </div>
            </div>
            <div className="lg:col-span-2"><ContactForm /></div>
          </div>
        </div>
      </section>
    </>
  );
}
