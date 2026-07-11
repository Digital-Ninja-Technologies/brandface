import Reveal from './Reveal.jsx';
import { useBooking } from '../BookingContext.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS, DRIVE_VIDEO_EMBED_URL } from '../siteConfig.js';

function scrollToVideo(e) {
  e.preventDefault();
  const el = document.querySelector('#video');
  if (!el) return;
  const y = el.getBoundingClientRect().top + window.pageYOffset - 62;
  window.scrollTo({ top: y, behavior: 'smooth' });
}

export default function Hero() {
  const { openModal } = useBooking();

  return (
    <header id="top" className="bf-hero">
      <div className="bf-hero-glow bf-hero-glow-main" />

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
          <a href="#video" className="bf-btn-outline" onClick={scrollToVideo}>
            <span className="bf-btn-outline-icon">▶</span>
            Watch the breakdown
          </a>
        </Reveal>

        <Reveal delay={300} className="bf-video-frame">
          <div className="bf-video-frame-glow" />
          <div className="bf-video-box">
            <iframe src={DRIVE_VIDEO_EMBED_URL} allow="autoplay" allowFullScreen title="BrandFace Media breakdown" />
          </div>
        </Reveal>

        <div className="bf-hero-glow bf-hero-glow-side right" />
        <div className="bf-hero-glow bf-hero-glow-side left" />
      </div>
    </header>
  );
}
