import { useState } from 'react';
import Reveal from './Reveal.jsx';
import BookingFlow from './BookingFlow.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

const SUBTEXT = {
  form: "Tell us about your firm. We'll map out exactly how the engine would work for you, with no obligation and no pressure.",
  success: "You're a great fit. One more step and you're on the calendar.",
  calendly: 'Pick a time that works for you, no obligation and no pressure.',
};

export default function BookCta() {
  const [step, setStep] = useState('form');

  return (
    <section id="book" className="bf-section bf-book">
      <div className="bf-book-glow" />
      <div className="bf-book-inner">
        <Reveal className="bf-eyebrow">Book a strategy call</Reveal>
        <Reveal as="h2" delay={80}>
          Let's find out what one signed case is worth to you.
        </Reveal>
        <Reveal as="p" delay={140} className="sub">
          {SUBTEXT[step]}
        </Reveal>

        <Reveal delay={200} className="bf-calendly-wrap">
          <BookingFlow
            step={step}
            onSubmitSuccess={() => setStep('success')}
            onScheduleClick={() => setStep('calendly')}
            calendlyClassName="bf-calendly-frame"
          />
          <p className="bf-book-note">
            Backed by the {GUARANTEE_CONSULTS} consultation, {GUARANTEE_DAYS}-day guarantee on the Growth Engine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
