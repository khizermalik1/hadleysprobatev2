import type { Metadata } from 'next';
import CTABanner from '@/components/CTABanner';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';

export const metadata: Metadata = {
  title: 'FAQs — Hadleys Probate Autos',
  description: 'Frequently asked questions about selling a probate vehicle. Everything you need to know about our process, payment, paperwork and more.',
};

const faqs = [
  { question: 'Will I incur any charges?', answer: 'Absolutely not. Our entire service — from the initial valuation to the final collection — is completely free of charge. There are no admin fees, inspection charges, collection costs or any other deductions. The price we agree is the amount you receive, in full.' },
  { question: 'Do I need to describe the car to you?', answer: "You don't need to be a car expert. We'll ask you a few straightforward questions — the registration number, the approximate condition, whether the vehicle runs, and where it is located. From there, we do the rest. We're used to working with families who know very little about the vehicle in question." },
  { question: 'How do I get paid for the car?', answer: 'Once we agree a price and the sale is confirmed, we make a secure bank transfer directly to your account on the same day. We do not pay by cheque. Payment is made before or at the time of collection — you will always receive confirmation of the transfer before the vehicle leaves your possession.' },
  { question: 'Can I sell the car to another buyer?', answer: "Yes, of course. You are under no obligation to sell to us. Our valuation is entirely free and non‑binding. We would simply ask that if you decide to sell elsewhere, you let us know so we can close your enquiry." },
  { question: 'What if the car does not run?', answer: "This is something we encounter regularly and it presents no problem whatsoever. Many probate vehicles haven't been started in months or even years. We are fully equipped to assess, purchase and transport non‑running vehicles using specialist trailers and flatbed recovery trucks." },
  { question: 'What if you decide not to purchase the car?', answer: 'In the rare circumstances where we are unable to make a purchase — for example, if there are significant ownership or legal complications — we will always explain our reasons clearly and honestly. We will never simply stop responding.' },
  { question: 'Can I sell the car before probate is granted?', answer: "In most cases, assets of the estate — including vehicles — cannot legally be sold until the Grant of Probate (or Letters of Administration) has been issued. However, we can discuss your vehicle, provide a valuation and agree terms in advance, so that as soon as probate is granted, the sale can proceed immediately. We recommend speaking with your solicitor and calling us to discuss your specific situation." },
  { question: 'Do you buy classic cars and motorcycles?', answer: "Yes — this is one of our genuine specialisms and something we are particularly passionate about. Classic cars, vintage motorcycles, pre‑war vehicles, barn finds, kit cars and rare models are all vehicles we welcome. We understand the value of these vehicles in a way that many general car buyers do not." },
  { question: 'How do I complete the paperwork and ownership changeover?', answer: 'We handle all of this on your behalf. Once the sale is agreed, we will take care of the V5C logbook transfer, DVLA notification and any other required documentation. We will provide you with a signed receipt confirming the sale. If the V5C is lost or missing, we can guide you through applying for a replacement.' },
  { question: 'Am I contracted to sell the car to you once I get an offer?', answer: 'No. Our offer is entirely non‑binding. You are free to accept, decline or take time to consider. There is no contract, no pressure and no fixed deadline. We understand that decisions about estate assets can involve multiple family members and beneficiaries.' },
  { question: 'What if I cannot find the registration document?', answer: "Missing V5C documents are very common with probate vehicles, particularly older or stored cars. In many cases, we can proceed with the sale without the V5C and manage the DVLA registration process ourselves. Please don't let a missing document stop you from getting in touch." },
];

export default function FAQsPage() {
  return (
    <>
      <PageHero eyebrow="Questions & Answers" title="Frequently Asked Questions" description="Everything you need to know about selling a probate vehicle. If you have a question that is not answered here, please do not hesitate to call or email us." />
      <section className="bg-white py-20 lg:py-28">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FAQAccordion faqs={faqs} />
        </div>
      </section>
      <section className="bg-[#f9f8f6] py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-[#1a3560] text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Still Have a Question?</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-6">Our team is available Monday to Saturday, 8am–8pm. We are always happy to talk through your situation without any pressure or obligation.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="tel:07404387679" className="inline-flex items-center justify-center gap-2 px-7 py-3 bg-[#1a3560] text-white font-semibold rounded-lg hover:bg-[#0f2140] transition-colors text-sm">Call 07404 387679</a>
            <a href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-3 border-2 border-[#1a3560] text-[#1a3560] font-semibold rounded-lg hover:bg-[#1a3560] hover:text-white transition-colors text-sm">Send Us a Message</a>
          </div>
        </div>
      </section>
      <CTABanner />
    </>
  );
}
