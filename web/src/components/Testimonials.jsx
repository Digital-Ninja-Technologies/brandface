import { useRef } from 'react';
import Reveal from './Reveal.jsx';

const TESTIMONIALS = [
  {
    initials: 'DM',
    quote:
      '"Placeholder testimonial: a client describing the case volume and pipeline the system created for their firm. Replace with the real quote."',
    name: 'Client Name',
    meta: 'Firm name · Personal Injury',
  },
  {
    initials: 'JD',
    quote:
      '"Placeholder testimonial: a client speaking to how hands-off the process was while results kept compounding. Replace with the real quote."',
    name: 'Client Name',
    meta: 'Firm name · Real Estate',
  },
  {
    initials: 'AB',
    quote:
      '"Placeholder testimonial: a client describing the automation layer and how no lead goes cold anymore. Replace with the real quote."',
    name: 'Client Name',
    meta: 'Firm name · Medical Practice',
  },
];

function scrollByAmount(ref, dir) {
  const el = ref.current;
  if (!el) return;
  const amount = Math.min(el.clientWidth * 0.8, 400) * dir;
  el.scrollBy({ left: amount, behavior: 'smooth' });
}

export default function Testimonials() {
  const sliderRef = useRef(null);

  return (
    <section id="proof" className="bf-section bf-testimonials">
      <div className="bf-testimonials-glow" />
      <div className="bf-container-mid" style={{ position: 'relative' }}>
        <div className="bf-center">
          <Reveal className="bf-testimonials-badge">
            Testimonials &amp; additional proof
            <span className="tag">Placeholder</span>
          </Reveal>
          <Reveal as="h2" delay={80}>
            What our clients say.
          </Reveal>
          <Reveal as="p" delay={140}>
            Dummy content for now. Real testimonial quotes, headshots, and client screenshots will drop in here.
          </Reveal>
        </div>

        <div className="bf-testimonial-grid">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name + t.meta} delay={i * 120} className="bf-testimonial-card">
              <div className="bf-testimonial-stars">★★★★★</div>
              <p className="bf-testimonial-quote">{t.quote}</p>
              <div className="bf-testimonial-person">
                <div className="bf-testimonial-avatar">{t.initials}</div>
                <div>
                  <div className="name">{t.name}</div>
                  <div className="meta">{t.meta}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="bf-proof-slider-wrap">
          <button
            type="button"
            className="bf-proof-slider-arrow left"
            aria-label="Scroll screenshots left"
            onClick={() => scrollByAmount(sliderRef, -1)}
          >
            ‹
          </button>
          <div className="bf-proof-slider" ref={sliderRef}>
            {[0, 1, 2, 3].map((i) => (
              <div key={i} className="bf-proof-slide" tabIndex={0}>
                <div>
                  <div className="glyph">▦</div>
                  <div className="caption">
                    Client screenshot
                    <br />
                    placeholder
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="bf-proof-slider-arrow right"
            aria-label="Scroll screenshots right"
            onClick={() => scrollByAmount(sliderRef, 1)}
          >
            ›
          </button>
        </Reveal>
      </div>
    </section>
  );
}
