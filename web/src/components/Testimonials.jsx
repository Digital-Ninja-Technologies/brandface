import { useState } from 'react';
import Reveal from './Reveal.jsx';
import ScreenshotLightbox from './ScreenshotLightbox.jsx';

const PROOF_SCREENSHOTS = [
  
  { src: '/assets/IMG_3488.PNG', alt: "Demetrius McCloud's Instagram profile, The Legal Sniper, 23K followers" },
  { src: '/assets/IMG_3490.PNG', alt: "Attorney's social profile with 13K followers and 299.1K likes" },
  { src: '/assets/IMG_3493.PNG', alt: "Demetrius McCloud's Instagram profile, dark mode, 7,972 followers" },
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
