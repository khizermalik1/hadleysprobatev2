'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQ { question: string; answer: string; }
interface FAQAccordionProps { faqs: FAQ[]; }

export default function FAQAccordion({ faqs }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div key={idx} className={`border rounded-xl overflow-hidden transition-all duration-200 ${isOpen ? 'border-amber-300 shadow-sm' : 'border-gray-200 hover:border-gray-300'}`}>
            <button onClick={() => setOpenIndex(isOpen ? null : idx)} className="w-full flex items-center justify-between px-6 py-5 text-left gap-4" aria-expanded={isOpen}>
              <span className={`font-semibold text-sm leading-snug ${isOpen ? 'text-[#1a3560]' : 'text-gray-800'}`} style={{ fontFamily: 'Playfair Display, serif' }}>{faq.question}</span>
              <ChevronDown size={18} className={`shrink-0 text-amber-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
              <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">{faq.answer}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
