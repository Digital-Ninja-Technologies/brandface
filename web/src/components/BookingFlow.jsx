import { useState } from 'react';
import { CALENDLY_URL, GHL_WEBHOOK_URL } from '../siteConfig.js';

const DECISION_MAKER_OPTIONS = ['Yes', 'No, I share decisions', 'No, someone else decides'];
const TIMELINE_OPTIONS = ['Immediately', 'Within 30 days', 'Just exploring'];

const EMPTY_FORM = {
  fullName: '',
  email: '',
  phone: '',
  firmName: '',
  bottleneck: '',
  decisionMaker: '',
  timeline: '',
  casesPerMonth: '',
};

async function submitLead(form) {
  const res = await fetch(GHL_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      source: 'BrandFace Media site',
      full_name: form.fullName,
      email: form.email,
      phone: form.phone,
      firm_name: form.firmName,
      marketing_bottleneck: form.bottleneck,
      sole_decision_maker: form.decisionMaker,
      timeline: form.timeline,
      cases_per_month: form.casesPerMonth,
    }),
  });
  if (!res.ok) {
    throw new Error('Submission failed');
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
    } catch {
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
        <label htmlFor="bf-phone">Phone number</label>
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
        <label htmlFor="bf-firmName">Law firm name</label>
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
        <label htmlFor="bf-bottleneck">What's your #1 marketing bottleneck right now?</label>
        <input
          id="bf-bottleneck"
          name="bottleneck"
          type="text"
          placeholder="e.g. Not enough inbound leads"
          required
          value={form.bottleneck}
          onChange={update('bottleneck')}
        />
      </div>
      <div className="bf-field">
        <label htmlFor="bf-decisionMaker">Are you the sole decision-maker for marketing decisions at your firm?</label>
        <select
          id="bf-decisionMaker"
          name="decisionMaker"
          required
          value={form.decisionMaker}
          onChange={update('decisionMaker')}
        >
          <option value="" disabled>
            Select one
          </option>
          {DECISION_MAKER_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="bf-field">
        <label htmlFor="bf-timeline">How soon are you looking to get started?</label>
        <select id="bf-timeline" name="timeline" required value={form.timeline} onChange={update('timeline')}>
          <option value="" disabled>
            Select one
          </option>
          {TIMELINE_OPTIONS.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
      </div>
      <div className="bf-field">
        <label htmlFor="bf-casesPerMonth">Roughly how many new cases/clients are you looking to add per month?</label>
        <input
          id="bf-casesPerMonth"
          name="casesPerMonth"
          type="text"
          placeholder="e.g. 10"
          required
          value={form.casesPerMonth}
          onChange={update('casesPerMonth')}
        />
      </div>
      {error && <p className="bf-field-error">{error}</p>}
      <button type="submit" className="bf-btn-gold-lg bf-booking-submit" disabled={submitting}>
        {submitting ? 'Submitting…' : 'Continue'}
      </button>
    </form>
  );
}
