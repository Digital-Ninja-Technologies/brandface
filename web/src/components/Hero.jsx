import { useRef } from 'react';
import Reveal from './Reveal.jsx';
import FullscreenIcon from './FullscreenIcon.jsx';
import { useBooking } from '../BookingContext.jsx';
import requestFullscreen from '../hooks/requestFullscreen.js';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS, DRIVE_VIDEO_EMBED_URL, DRIVE_VIDEO_VIEW_URL } from '../siteConfig.js';

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
        </Reveal>

        <Reveal delay={300} className="bf-video-frame">
          <div className="bf-video-box" ref={videoBoxRef}>
            <button
              type="button"
              className="bf-video-fullscreen-btn"
              aria-label="Watch full screen"
              title="Watch full screen"
              onClick={() => requestFullscreen(videoBoxRef.current, DRIVE_VIDEO_VIEW_URL)}
            >
              <FullscreenIcon size={16} />
            </button>
            <iframe src={DRIVE_VIDEO_EMBED_URL} allow="autoplay" allowFullScreen title="BrandFace Media breakdown" />
          </div>
        </Reveal>
      </div>
    </header>
  );
}
