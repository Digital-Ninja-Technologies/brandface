import { useRef, useState } from 'react';
import Reveal from './Reveal.jsx';
import ScreenshotLightbox from './ScreenshotLightbox.jsx';

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
  const [lightboxIndex, setLightboxIndex] = useState(null);

  return (
    <section id="proof" className="bf-section bf-testimonials">
      <div className="bf-testimonials-glow" />
      <div className="bf-container-mid" style={{ position: 'relative' }}>
        <div className="bf-center">
          <Reveal className="bf-testimonials-badge">Testimonials and additional proof</Reveal>
          <Reveal as="h2" delay={80}>
            Here's the kind of reach we generate for our clients.
          </Reveal>
          <Reveal as="p" delay={140}>
            Screenshots straight from the client's own accounts.
          </Reveal>
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
            {PROOF_SCREENSHOTS.map((shot, i) => (
              <div
                key={shot.src}
                className="bf-proof-slide"
                tabIndex={0}
                onClick={() => setLightboxIndex(i)}
              >
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

        <Reveal delay={100} className="bf-proof-view-all">
          <button type="button" className="bf-proof-view-btn" onClick={() => setLightboxIndex(0)}>
            Click to view screenshots
          </button>
        </Reveal>
      </div>

      <ScreenshotLightbox
        images={PROOF_SCREENSHOTS}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={setLightboxIndex}
      />
    </section>
  );
}
