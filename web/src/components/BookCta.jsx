import Reveal from './Reveal.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS, CALENDLY_URL } from '../siteConfig.js';

export default function BookCta() {
  return (
    <section id="book" className="bf-section bf-book">
      <div className="bf-book-glow" />
      <div className="bf-book-inner">
        <Reveal className="bf-eyebrow">Book a strategy call</Reveal>
        <Reveal as="h2" delay={80}>
          Let's find out what one signed case is worth to you.
        </Reveal>
        <Reveal as="p" delay={140} className="sub">
          Tell us about your firm. We'll map out exactly how the engine would work for you, with no obligation and
          no pressure.
        </Reveal>

        <Reveal delay={200} className="bf-calendly-wrap">
          <div className="bf-calendly-frame">
            <iframe src={CALENDLY_URL} title="Schedule a call with BrandFace Media" />
          </div>
          <p className="bf-book-note">
            Backed by the {GUARANTEE_CONSULTS}-consultation, {GUARANTEE_DAYS}-day guarantee on the Growth Engine.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
