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

const PROOF_SCREENSHOTS = [
  { src: '/assets/IMG_1874.png', alt: 'Instagram professional dashboard: 230.7K views, 7.0K interactions, 452 new followers over 30 days' },
  { src: '/assets/IMG_1875.jpeg', alt: 'Key metrics: 205K post views, up 9269% month over month' },
  { src: '/assets/IMG_2623.jpeg', alt: 'Analytics overview: 583K post views over a 28-day period' },
  { src: '/assets/IMG_3422.PNG', alt: 'Views breakdown: 3,590,854 views over the last 90 days' },
  { src: '/assets/IMG_3423.PNG', alt: 'Insights overview: 3,839,148 views and 11,357 net new followers' },
  { src: '/assets/IMG_3488.PNG', alt: "Demetrius McCloud's Instagram profile, The Legal Sniper, 23K followers" },
  { src: '/assets/IMG_3490.PNG', alt: "Attorney's social profile with 13K followers and 299.1K likes" },
  { src: '/assets/IMG_3491.PNG', alt: "Demetrius McCloud's verified Instagram profile" },
  { src: '/assets/IMG_3492.PNG', alt: 'All-content overview: 3,742,020 views and 10,808 net new followers' },
  { src: '/assets/IMG_3493.PNG', alt: "Demetrius McCloud's Instagram profile, dark mode, 7,972 followers" },
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
            <span className="tag">Quotes are placeholder</span>
          </Reveal>
          <Reveal as="h2" delay={80}>
            What our clients say.
          </Reveal>
          <Reveal as="p" delay={140}>
            Real results below. Testimonial quotes and headshots are still placeholder copy, send those over
            whenever you're ready.
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
            {PROOF_SCREENSHOTS.map((shot) => (
              <div key={shot.src} className="bf-proof-slide" tabIndex={0}>
                <img src={shot.src} alt={shot.alt} loading="lazy" />
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
