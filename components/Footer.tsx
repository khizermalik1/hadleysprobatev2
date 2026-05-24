import Link from 'next/link';
import { Phone, Mail, Clock } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/process', label: 'Our Process' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/valuation', label: 'Free Valuation' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0f2140] text-white">
      <div className="bg-amber-500 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-white font-bold text-xl" style={{ fontFamily: 'Playfair Display, serif' }}>Ready to discuss your probate vehicle?</p>
            <p className="text-white/85 text-sm mt-0.5">We offer a free, no‑obligation valuation. Call us or get started online today.</p>
          </div>
          <Link href="/valuation" className="shrink-0 px-8 py-3 bg-white text-amber-600 font-bold rounded-md hover:bg-amber-50 transition-colors shadow-md text-sm">Get Your FREE Valuation</Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg" style={{ fontFamily: 'Playfair Display, serif' }}>H</span>
              </div>
              <div>
                <div className="font-bold text-white text-lg leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Hadleys Probate Autos</div>
                <div className="text-[10px] text-white/50 uppercase tracking-widest">Specialist Probate Vehicle Buyers</div>
              </div>
            </div>
            <p className="text-white/65 text-sm leading-relaxed max-w-sm">We specialise in buying probate vehicles from families, executors and solicitors across the UK. Our service is respectful, transparent and completely hassle‑free. We have particular experience with classic, vintage and long‑stored vehicles.</p>
            <div className="mt-6 flex flex-col gap-3">
              <a href="tel:07404387679" className="flex items-center gap-2.5 text-amber-400 hover:text-amber-300 transition-colors text-sm font-medium"><Phone size={15} /> 07404 387679</a>
              <a href="mailto:info@probateautos.co.uk" className="flex items-center gap-2.5 text-white/65 hover:text-white transition-colors text-sm"><Mail size={15} /> info@probateautos.co.uk</a>
              <div className="flex items-center gap-2.5 text-white/50 text-sm"><Clock size={15} /> Mon–Sat 8:00am–8:00pm</div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (<li key={link.href}><Link href={link.href} className="text-white/60 hover:text-amber-400 transition-colors text-sm">{link.label}</Link></li>))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">We Buy All Types</h4>
            <ul className="space-y-2 text-white/60 text-sm">
              {['Classic & Vintage Cars', 'Modern Vehicles', 'Motorcycles', 'Non-Running Vehicles', 'Unregistered Vehicles', 'High-Mileage Cars', 'Project Cars', 'Commercial Vehicles'].map((item) => (
                <li key={item} className="flex items-start gap-1.5"><span className="text-amber-500 mt-0.5">›</span>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-white/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Hadleys Probate Autos. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
