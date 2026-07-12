import { useEffect, useState } from 'react';
import { useBooking } from '../BookingContext.jsx';
import BookingFlow from './BookingFlow.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

const HEADERS = {
  form: {
    h3: 'Tell us about your firm.',
    p: "Takes about a minute. We'll use this to make sure the call is worth your time.",
  },
  success: {
    h3: "You're a great fit.",
    p: 'One more step and you\'re on the calendar.',
  },
  calendly: {
    h3: 'Pick a time that works for you.',
    p: `A 30-minute call, no obligation and no pressure. Backed by the ${GUARANTEE_CONSULTS} consultation, ${GUARANTEE_DAYS}-day guarantee on the Growth Engine.`,
  },
};

export default function BookModal() {
  const { modalOpen, closeModal } = useBooking();
  const [step, setStep] = useState('form');

  useEffect(() => {
    if (modalOpen) setStep('form');
  }, [modalOpen]);

  if (!modalOpen) return null;

  const header = HEADERS[step];

  return (
    <div className="bf-modal-backdrop" onClick={closeModal}>
      <div className="bf-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="bf-modal-topbar" />
        <button type="button" className="bf-modal-close" aria-label="Close" onClick={closeModal}>
          ✕
        </button>

        <div className="bf-modal-head">
          <div className="bf-eyebrow">Book a strategy call</div>
          <h3>{header.h3}</h3>
          <p>{header.p}</p>
        </div>
        <div className="bf-modal-body">
          <BookingFlow
            step={step}
            onSubmitSuccess={() => setStep('success')}
            onScheduleClick={() => setStep('calendly')}
            calendlyClassName="bf-modal-calendly"
          />
        </div>
      </div>
    </div>
  );
}
