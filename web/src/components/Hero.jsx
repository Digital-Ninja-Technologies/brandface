import Reveal from './Reveal.jsx';
import VideoBox from './VideoBox.jsx';
import { useBooking } from '../BookingContext.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

export default function Hero() {
  const { openModal } = useBooking();

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

        <Reveal delay={160} className="bf-video-frame bf-video-frame-hero">
          <VideoBox title="BrandFace Media breakdown" />
        </Reveal>

        <Reveal as="p" delay={200} className="bf-hero-watch-note">
          Watch this before booking — it explains exactly how the program works and whether you're a fit. 3 minutes
          now saves you the wrong call later.
        </Reveal>

        <Reveal as="p" delay={240} className="bf-hero-sub">
          A done-for-you growth engine built exclusively for ambitious law firms, handling the content, ads, and
          automation most agencies never touch.
        </Reveal>

        <Reveal delay={300} className="bf-hero-ctas">
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
      </div>
    </header>
  );
}
