'use client';

import { useState } from 'react';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormData { name: string; email: string; phone: string; subject: string; message: string; }
const initial: FormData = { name: '', email: '', phone: '', subject: '', message: '' };

export default function ContactForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = 'Your name is required.';
    if (!form.email.trim()) { e.email = 'Email address is required.'; } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { e.email = 'Please enter a valid email address.'; }
    if (!form.message.trim()) e.message = 'Please enter your message.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    const subject = encodeURIComponent(`Website Enquiry${form.subject ? ' — ' + form.subject : ''} — ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || 'Not provided'}\n\nMessage:\n${form.message}`);
    window.location.href = `mailto:info@probateautos.co.uk?subject=${subject}&body=${body}`;
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initial);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: undefined }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center h-full flex flex-col items-center justify-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle2 size={32} className="text-green-600" /></div>
        <h2 className="text-[#1a3560] text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Message Sent!</h2>
        <p className="text-gray-600 text-sm leading-relaxed mb-8 max-w-sm">Thank you for getting in touch. We aim to respond to all enquiries within 2–4 hours during working hours.</p>
        <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">Send Another Message</button>
      </div>
    );
  }

  const fc = (err?: string) => `w-full px-4 py-3 border rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 transition-colors ${err ? 'border-red-300 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:ring-[#1a3560]/20 focus:border-[#1a3560]'}`;
  const lc = 'block text-sm font-medium text-gray-700 mb-1.5';
  const ec = 'text-red-500 text-xs mt-1';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-[#1a3560] text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Send Us a Message</h2>
      <p className="text-gray-500 text-sm mb-7">Fill in the form below and we will get back to you as soon as possible.</p>
      <form onSubmit={handleSubmit} noValidate className="space-y-5">
        <div className="grid sm:grid-cols-2 gap-5">
          <div><label htmlFor="c-name" className={lc}>Full Name <span className="text-red-400">*</span></label><input id="c-name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="e.g. Jane Smith" className={fc(errors.name)} />{errors.name && <p className={ec}>{errors.name}</p>}</div>
          <div><label htmlFor="c-email" className={lc}>Email Address <span className="text-red-400">*</span></label><input id="c-email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="e.g. jane@example.com" className={fc(errors.email)} />{errors.email && <p className={ec}>{errors.email}</p>}</div>
          <div><label htmlFor="c-phone" className={lc}>Phone Number <span className="text-gray-400 font-normal">(optional)</span></label><input id="c-phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="e.g. 07700 900000" className={fc()} /></div>
          <div>
            <label htmlFor="c-subject" className={lc}>Subject <span className="text-gray-400 font-normal">(optional)</span></label>
            <select id="c-subject" name="subject" value={form.subject} onChange={handleChange} className={fc()}>
              <option value="">Please select…</option><option>General Enquiry</option><option>I Have a Vehicle to Sell</option><option>Question About the Process</option><option>Question About Payment</option><option>Solicitor / Professional Enquiry</option><option>Other</option>
            </select>
          </div>
        </div>
        <div>
          <label htmlFor="c-message" className={lc}>Your Message <span className="text-red-400">*</span></label>
          <textarea id="c-message" name="message" rows={5} value={form.message} onChange={handleChange} placeholder="Please describe your enquiry…" className={`${fc(errors.message)} resize-none`} />
          {errors.message && <p className={ec}>{errors.message}</p>}
        </div>
        <p className="text-gray-400 text-xs leading-relaxed">By submitting this form you agree to be contacted by Hadleys Probate Autos regarding your enquiry. We will never share your information with third parties.</p>
        <button type="submit" disabled={submitting} className="w-full py-4 bg-[#1a3560] hover:bg-[#0f2140] disabled:bg-gray-300 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md">
          {submitting ? <><Loader2 size={18} className="animate-spin" /> Sending…</> : 'Send Message'}
        </button>
      </form>
    </div>
  );
}
