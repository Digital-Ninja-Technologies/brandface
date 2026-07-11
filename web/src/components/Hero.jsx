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
          <VideoBox title="BrandFace Media breakdown" />
        </Reveal>
      </div>
    </header>
  );
}
