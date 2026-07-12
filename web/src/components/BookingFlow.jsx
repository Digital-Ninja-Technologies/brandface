import { useState } from 'react';
import { CALENDLY_URL, WEB3FORMS_ACCESS_KEY } from '../siteConfig.js';

const REVENUE_OPTIONS = ['Under $25K', '$25K–$50K', '$50K–$100K', '$100K+'];
const CONSTRAINT_OPTIONS = [
  'Not enough leads',
  "Leads aren't qualified",
  "Can't convert leads to signed cases",
  'No time to market myself',
];

const EMPTY_FORM = {
  fullName: '',
  phone: '',
  email: '',
  firmName: '',
  monthlyRevenue: '',
  constraint: '',
};

async function submitLead(form) {
  const res = await fetch('https://api.web3forms.com/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New strategy call lead: ${form.firmName || form.fullName}`,
      from_name: 'BrandFace Media site',
      'Full name': form.fullName,
      'Best number to reach them directly': form.phone,
      Email: form.email,
      'Firm name': form.firmName,
      'Current monthly revenue': form.monthlyRevenue,
      '#1 constraint': form.constraint,
    }),
  });
  const data = await res.json().catch(() => null);
  if (!res.ok || !data?.success) {
    throw new Error(data?.message || 'Submission failed');
  }
}

// Three-step flow: qualification form -> success confirmation -> Calendly scheduler.
// `step` is owned by the parent (Modal/BookCta) so it can adapt its own heading copy too.
// `initialForm` lets a parent seed the success message (e.g. the popup modal picking up
// the name/firm from a form that was actually submitted elsewhere, on the page).
export default function BookingFlow({
  step,
  onSubmitSuccess,
  onScheduleClick = () => {},
  calendlyClassName,
  initialForm,
}) {
  const [form, setForm] = useState(() => ({ ...EMPTY_FORM, ...initialForm }));
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    try {
      await submitLead(form);
      onSubmitSuccess(form);
    } catch (err) {
      setError("Something went wrong sending that. Please try again, or email us directly if it keeps happening.");
    } finally {
      setSubmitting(false);
    }
  };

  if (step === 'calendly') {
    return (
      <div className={calendlyClassName}>
        <iframe src={CALENDLY_URL} title="Schedule a call with BrandFace Media" />
      </div>
    );
  }

  if (step === 'success') {
    return (
      <div className="bf-booking-success">
        <div className="bf-booking-success-icon">✓</div>
        <p className="bf-booking-success-text">
          Thanks{form.fullName ? `, ${form.fullName.split(' ')[0]}` : ''}. That's exactly what we needed. Grab a time
          now and we'll map out the engine for {form.firmName || 'your firm'}.
        </p>
        <button type="button" className="bf-btn-gold-lg" onClick={onScheduleClick}>
          Schedule a meeting now
        </button>
      </div>
    );
  }

  return (
    <form className="bf-booking-form" onSubmit={handleSubmit}>
      <div className="bf-field">
        <label htmlFor="bf-fullName">Full name</label>
        <input
          id="bf-fullName"
          name="fullName"
          type="text"
          autoComplete="name"
          placeholder="Jordan Rivera"
          required
          value={form.fullName}
          onChange={update('fullName')}
        />
      </div>
      <div className="bf-field">
        <label htmlFor="bf-phone">Best number to reach you directly</label>
        <input
          id="bf-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          placeholder="(555) 123-4567"
          required
          value={form.phone}
          onChange={update('phone')}
        />
      </div>
      <div className="bf-field">
        <label htmlFor="bf-email">Email</label>
        <input
          id="bf-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="you@yourfirm.com"
          required
          value={form.email}
          onChange={update('email')}
        />
      </div>
      <div className="bf-field">
        <label htmlFor="bf-firmName">Firm name</label>
        <input
          id="bf-firmName"
          name="firmName"
          type="text"
          autoComplete="organization"
          placeholder="Rivera Injury Law"
          required
          value={form.firmName}
          onChange={update('firmName')}
        />
      </div>
      <div className="bf-field">
        <label htmlFor="bf-revenue">Current monthly revenue</label>
        <select id="bf-revenue" name="monthlyRevenue" required value={form.monthlyRevenue} onChange={update('monthlyRevenue')}>
          <option value="" disabled>
            Select one
          </option>
          {REVENUE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="bf-field">
        <label htmlFor="bf-constraint">What's your #1 constraint right now?</label>
        <select id="bf-constraint" name="constraint" required value={form.constraint} onChange={update('constraint')}>
          <option value="" disabled>
            Select one
          </option>
          {CONSTRAINT_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      {error && <p className="bf-field-error">{error}</p>}
      <button type="submit" className="bf-btn-gold-lg bf-booking-submit" disabled={submitting}>
        {submitting ? 'Submitting…' : 'Continue'}
      </button>
    </form>
  );
}
