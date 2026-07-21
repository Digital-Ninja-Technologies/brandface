import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ScreenshotLightbox from './ScreenshotLightbox.jsx';

const PROOF_SCREENSHOTS = [
  { src: '/assets/IMG_2623.jpeg', alt: 'Analytics overview: 583K post views over a 28-day period' },
  { src: '/assets/IMG_3422.PNG', alt: 'Views breakdown: 3,590,854 views over the last 90 days' },
  { src: '/assets/IMG_3423.PNG', alt: 'Insights overview: 3,839,148 views and 11,357 net new followers' },
  { src: '/assets/IMG_3491.PNG', alt: 'Key metrics: 2M post views, 300.4K likes, and 29.2K shares over 6 months' },
  { src: '/assets/IMG_3492.PNG', alt: 'All-content overview: 3,742,020 views and 10,808 net new followers' },
];

export default function Testimonials() {
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

        <Reveal className="bf-proof-gallery-wrap">
          <div className="bf-proof-gallery">
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
