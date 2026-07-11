import { useRef } from 'react';
import Reveal from './Reveal.jsx';
import { useBooking } from '../BookingContext.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS, DRIVE_VIDEO_EMBED_URL } from '../siteConfig.js';

function requestFullscreen(el) {
  if (!el) return;
  const request = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
  if (request) request.call(el);
}

export default function Hero() {
  const { openModal } = useBooking();
  const videoBoxRef = useRef(null);

  return (
    <header id="top" className="bf-hero">
      <div className="bf-hero-inner">
        <Reveal className="bf-badge">
          <span className="bf-badge-dot" />
          Content · Paid Ads · Automation for law firms
        </Reveal>

        <Reveal as="h1" delay={80}>
          {GUARANTEE_CONSULTS} qualified consultations in your first {GUARANTEE_DAYS} days.
          <span className="bf-italic-gold">Guaranteed.</span>
        </Reveal>

        <Reveal as="p" delay={160} className="bf-hero-sub">
          A done-for-you growth engine built exclusively for ambitious law firms. We handle the content, the ads,
          and the automation that most agencies never touch. You show up and sign cases.
        </Reveal>

        <Reveal delay={220} className="bf-hero-ctas">
          <a
            href="#book"
            className="bf-btn-gold-lg"
            onClick={(e) => {
              e.preventDefault();
              openModal();
            }}
          >
            Book your strategy call →
          </a>
          <a
            href="#video"
            className="bf-btn-outline"
            onClick={(e) => {
              e.preventDefault();
              requestFullscreen(videoBoxRef.current);
            }}
          >
            <span className="bf-btn-outline-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" width="10" height="10">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </span>
            Watch the breakdown
          </a>
        </Reveal>

        <Reveal delay={300} className="bf-video-frame">
          <div className="bf-video-box" ref={videoBoxRef}>
            <button
              type="button"
              className="bf-video-fullscreen-btn"
              aria-label="Watch full screen"
              title="Watch full screen"
              onClick={() => requestFullscreen(videoBoxRef.current)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 3 21 3 21 9" />
                <polyline points="9 21 3 21 3 15" />
                <line x1="21" y1="3" x2="14" y2="10" />
                <line x1="3" y1="21" x2="10" y2="14" />
              </svg>
            </button>
            <iframe src={DRIVE_VIDEO_EMBED_URL} allow="autoplay" allowFullScreen title="BrandFace Media breakdown" />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
