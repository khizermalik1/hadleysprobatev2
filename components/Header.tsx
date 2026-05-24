'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/process', label: 'Our Process' },
  { href: '/faqs', label: 'FAQs' },
  { href: '/valuation', label: 'Free Valuation' },
  { href: '/contact', label: 'Contact Us' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'}`}>
      <div className="bg-[#1a3560] text-white text-sm py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <span className="hidden sm:block text-white/80 text-xs">Specialist Probate Vehicle Buyers — Respectful, Trusted, Family‑Friendly</span>
          <div className="flex items-center gap-4 ml-auto">
            <a href="tel:07404387679" className="flex items-center gap-1.5 text-amber-300 font-semibold hover:text-amber-200 transition-colors">
              <Phone size={13} /> 07404 387679
            </a>
            <a href="mailto:info@probateautos.co.uk" className="text-white/70 hover:text-white transition-colors hidden md:block">info@probateautos.co.uk</a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#1a3560] rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-amber-400 font-bold text-lg leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>H</span>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-[#1a3560] text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif' }}>Hadleys</div>
              <div className="text-[10px] text-gray-500 uppercase tracking-widest leading-tight font-medium">Probate Autos</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              if (link.href === '/valuation') {
                return <Link key={link.href} href={link.href} className="ml-2 px-5 py-2 bg-amber-500 hover:bg-amber-600 text-white text-sm font-semibold rounded-md transition-colors shadow-sm">{link.label}</Link>;
              }
              return <Link key={link.href} href={link.href} className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${isActive ? 'text-[#1a3560] bg-blue-50' : 'text-gray-600 hover:text-[#1a3560] hover:bg-gray-50'}`}>{link.label}</Link>;
            })}
          </nav>

          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#1a3560] hover:bg-gray-100 transition-colors" aria-label="Toggle menu">
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${mobileOpen ? 'max-h-screen border-t border-gray-100' : 'max-h-0'}`}>
        <div className="bg-white px-4 pb-4 pt-2 space-y-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            if (link.href === '/valuation') {
              return <Link key={link.href} href={link.href} className="block px-4 py-3 bg-amber-500 text-white font-semibold rounded-md text-center mt-2">{link.label}</Link>;
            }
            return <Link key={link.href} href={link.href} className={`block px-4 py-2.5 rounded-md text-sm font-medium transition-colors ${isActive ? 'text-[#1a3560] bg-blue-50' : 'text-gray-600 hover:text-[#1a3560] hover:bg-gray-50'}`}>{link.label}</Link>;
          })}
        </div>
      </div>
    </header>
  );
}
