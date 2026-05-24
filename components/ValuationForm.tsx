'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Loader2 } from 'lucide-react';

interface FormData {
  isExecutor: string;
  registration: string;
  mileage: string;
  location: string;
  vehicleRuns: string;
  hasV5: string;
  name: string;
  email: string;
  phone: string;
  details: string;
}

const initialForm: FormData = { isExecutor: '', registration: '', mileage: '', location: '', vehicleRuns: '', hasV5: '', name: '', email: '', phone: '', details: '' };

function ValuationFormInner() {
  const searchParams = useSearchParams();
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const reg = searchParams.get('reg');
    if (reg) setForm((prev) => ({ ...prev, registration: reg.toUpperCase() }));
  }, [searchParams]);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.registration.trim()) e.registration = 'Registration number is required.';
    if (!form.location.trim()) e.location = 'Location is required.';
    if (!form.name.trim()) e.name = 'Your name is required.';
    if (!form.email.trim()) { e.email = 'Email address is required.'; } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { e.email = 'Please enter a valid email address.'; }
    if (!form.phone.trim()) e.phone = 'Phone number is required.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const buildWhatsAppMessage = (data: FormData): string => {
    const lines = [
      `*New Probate Vehicle Valuation Request*`, ``,
      `*Name:* ${data.name}`, `*Email:* ${data.email}`, `*Phone:* ${data.phone}`, ``,
      `*Vehicle Registration:* ${data.registration}`, `*Mileage:* ${data.mileage || 'Not provided'}`, `*Location:* ${data.location}`,
      `*Vehicle Runs/Starts:* ${data.vehicleRuns || 'Not specified'}`, `*Has V5 Logbook:* ${data.hasV5 || 'Not specified'}`, `*Is Executor:* ${data.isExecutor || 'Not specified'}`, ``,
      `*Additional Details:*`, data.details || 'None provided',
    ];
    return encodeURIComponent(lines.join('\n'));
  };

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);

    const whatsappNumber = '447404387679';
    const message = buildWhatsAppMessage(form);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');

    const emailSubject = encodeURIComponent(`Probate Vehicle Valuation Request — ${form.registration} — ${form.name}`);
    const emailBody = encodeURIComponent(`New Probate Vehicle Valuation Request\n\nName: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nVehicle Registration: ${form.registration}\nMileage: ${form.mileage || 'Not provided'}\nLocation: ${form.location}\nVehicle Runs/Starts: ${form.vehicleRuns || 'Not specified'}\nHas V5 Logbook: ${form.hasV5 || 'Not specified'}\nIs Executor: ${form.isExecutor || 'Not specified'}\n\nAdditional Details:\n${form.details || 'None provided'}`);
    window.location.href = `mailto:info@probateautos.co.uk?subject=${emailSubject}&body=${emailBody}`;

    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setForm(initialForm);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === 'registration' ? value.toUpperCase() : value }));
    if (errors[name as keyof FormData]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-10 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-5"><CheckCircle2 size={32} className="text-green-600" /></div>
        <h2 className="text-[#1a3560] text-2xl font-bold mb-3" style={{ fontFamily: 'Playfair Display, serif' }}>Thank You — We Are On It!</h2>
        <p className="text-gray-600 leading-relaxed text-sm mb-6 max-w-md mx-auto">Your valuation request has been sent. One of our specialists will be in touch shortly to discuss your vehicle and provide a personal, no‑obligation offer.</p>
        <p className="text-gray-500 text-xs mb-8">If you have any immediate questions, you can also call us on <a href="tel:07404387679" className="text-[#1a3560] font-semibold hover:underline">07404 387679</a>.</p>
        <button onClick={() => setSubmitted(false)} className="px-6 py-2.5 border border-gray-300 text-gray-600 rounded-lg text-sm hover:bg-gray-50 transition-colors">Submit Another Vehicle</button>
      </div>
    );
  }

  const fc = (err?: string) => `w-full px-4 py-3 border rounded-lg text-sm text-gray-800 focus:outline-none focus:ring-2 transition-colors ${err ? 'border-red-300 focus:ring-red-200 bg-red-50' : 'border-gray-200 focus:ring-[#1a3560]/20 focus:border-[#1a3560]'}`;
  const lc = 'block text-sm font-medium text-gray-700 mb-1.5';
  const ec = 'text-red-500 text-xs mt-1';

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8">
      <h2 className="text-[#1a3560] text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif' }}>Vehicle Valuation Form</h2>
      <p className="text-gray-500 text-sm mb-7">All fields marked with <span className="text-red-400">*</span> are required. We will be in touch shortly.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-5">
          <div>
            <h3 className="text-[#1a3560] font-semibold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">Vehicle Details</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="registration" className={lc}>Vehicle Registration Number <span className="text-red-400">*</span></label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 bg-amber-400 text-[#1a3560] text-xs font-black px-1.5 py-0.5 rounded leading-none pointer-events-none">GB</div>
                  <input id="registration" name="registration" type="text" value={form.registration} onChange={handleChange} placeholder="e.g. AB12 CDE" maxLength={8} className={`${fc(errors.registration)} pl-12 font-bold uppercase tracking-wider`} />
                </div>
                {errors.registration && <p className={ec}>{errors.registration}</p>}
              </div>
              <div>
                <label htmlFor="mileage" className={lc}>Approximate Mileage <span className="text-gray-400 font-normal">(optional)</span></label>
                <input id="mileage" name="mileage" type="text" value={form.mileage} onChange={handleChange} placeholder="e.g. 45,000" className={fc()} />
              </div>
              <div>
                <label htmlFor="location" className={lc}>Approximate Location <span className="text-red-400">*</span></label>
                <input id="location" name="location" type="text" value={form.location} onChange={handleChange} placeholder="e.g. Birmingham, West Midlands" className={fc(errors.location)} />
                {errors.location && <p className={ec}>{errors.location}</p>}
              </div>
              <div>
                <label htmlFor="isExecutor" className={lc}>Are you the executor of the estate?</label>
                <select id="isExecutor" name="isExecutor" value={form.isExecutor} onChange={handleChange} className={fc()}>
                  <option value="">Please select…</option>
                  <option value="Yes — I am the executor">Yes — I am the executor</option>
                  <option value="No — I am a beneficiary">No — I am a beneficiary</option>
                  <option value="No — I am acting as a solicitor">No — I am acting as a solicitor</option>
                  <option value="No — other role">No — other role</option>
                </select>
              </div>
              <div>
                <label htmlFor="vehicleRuns" className={lc}>Does the vehicle run / start?</label>
                <select id="vehicleRuns" name="vehicleRuns" value={form.vehicleRuns} onChange={handleChange} className={fc()}>
                  <option value="">Please select…</option>
                  <option value="Yes — runs and drives">Yes — runs and drives</option>
                  <option value="Yes — starts but does not drive">Yes — starts but does not drive</option>
                  <option value="No — does not start">No — does not start</option>
                  <option value="Unknown">Unknown</option>
                </select>
              </div>
              <div>
                <label htmlFor="hasV5" className={lc}>Do you have the V5C logbook?</label>
                <select id="hasV5" name="hasV5" value={form.hasV5} onChange={handleChange} className={fc()}>
                  <option value="">Please select…</option>
                  <option value="Yes — I have the V5C">Yes — I have the V5C</option>
                  <option value="No — V5C is missing">No — V5C is missing</option>
                  <option value="Unknown — I need to check">Unknown — I need to check</option>
                </select>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[#1a3560] font-semibold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-gray-100">Your Details</h3>
            <div className="grid sm:grid-cols-2 gap-5">
              <div className="sm:col-span-2">
                <label htmlFor="name" className={lc}>Your Full Name <span className="text-red-400">*</span></label>
                <input id="name" name="name" type="text" value={form.name} onChange={handleChange} placeholder="e.g. Jane Smith" className={fc(errors.name)} />
                {errors.name && <p className={ec}>{errors.name}</p>}
              </div>
              <div>
                <label htmlFor="email" className={lc}>Email Address <span className="text-red-400">*</span></label>
                <input id="email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="e.g. jane@example.com" className={fc(errors.email)} />
                {errors.email && <p className={ec}>{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone" className={lc}>Phone Number <span className="text-red-400">*</span></label>
                <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleChange} placeholder="e.g. 07700 900000" className={fc(errors.phone)} />
                {errors.phone && <p className={ec}>{errors.phone}</p>}
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="details" className={lc}>Additional Details <span className="text-gray-400 font-normal">(optional)</span></label>
            <textarea id="details" name="details" rows={4} value={form.details} onChange={handleChange} placeholder="Please share anything else that might be helpful — vehicle history, known issues, access details, etc." className={`${fc()} resize-none`} />
          </div>
          <p className="text-gray-400 text-xs leading-relaxed">By submitting this form you agree to be contacted by Hadleys Probate Autos regarding your enquiry. We will never share your information with third parties.</p>
          <button type="submit" disabled={submitting} className="w-full py-4 bg-amber-500 hover:bg-amber-600 disabled:bg-amber-300 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 text-sm shadow-md">
            {submitting ? <><Loader2 size={18} className="animate-spin" /> Sending Your Request…</> : 'Send My FREE Valuation Request'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function ValuationForm() {
  return (
    <Suspense fallback={<div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-400 text-sm">Loading form…</div>}>
      <ValuationFormInner />
    </Suspense>
  );
}
