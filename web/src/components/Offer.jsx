import Reveal from './Reveal.jsx';
import { useBooking } from '../BookingContext.jsx';

export default function Offer() {
  const { openModal } = useBooking();
  const handleBook = (e) => {
    e.preventDefault();
    openModal();
  };

  return (
    <section id="offer" className="bf-section-tight bf-section-alt">
      <div className="bf-container-mid">
        <div className="bf-center bf-offer-head">
          <Reveal className="bf-eyebrow bf-section-tight-inner">The offer</Reveal>
          <Reveal as="h2" delay={80}>
            Two tiers. Both fully managed.
          </Reveal>
        </div>

        <div className="bf-offer-grid">
          <Reveal className="bf-tier">
            <div className="bf-tier-label">Authority Engine</div>
            <div className="bf-tier-price">
              <span className="amount">$3,000</span>
              <span className="period">/ month</span>
            </div>
            <p className="bf-tier-desc">The content-only tier. The complete authority-building machine.</p>
            <div className="bf-tier-divider" />
            <ul className="bf-tier-list">
              <li>
                <span className="check">✓</span> 15 short-form videos per month
              </li>
              <li>
                <span className="check">✓</span> Scripted, filmed, edited &amp; published
              </li>
              <li>
                <span className="check">✓</span> Managed across every platform
              </li>
            </ul>
            <div className="bf-tier-cta">
              <a href="#book" className="bf-tier-cta-outline" onClick={handleBook}>
                Start with Authority
              </a>
            </div>
          </Reveal>

          <Reveal delay={120} className="bf-tier bf-tier-featured">
            <div className="bf-tier-featured-badge">Includes the guarantee</div>
            <div className="bf-tier-label" style={{ color: 'var(--gold-text)' }}>
              Growth Engine
            </div>
            <div className="bf-tier-price">
              <span className="amount">$5,000</span>
              <span className="period">/ month</span>
            </div>
            <p className="bf-tier-desc">Everything in Authority, plus the full ads + automation suite.</p>
            <div className="bf-tier-divider" />
            <ul className="bf-tier-list">
              <li>
                <span className="check">✓</span> Everything in Authority Engine
              </li>
              <li>
                <span className="check">✓</span> Managed paid lead campaigns
              </li>
              <li>
                <span className="check">✓</span> Full speed-to-lead automation suite
              </li>
              <li>
                <span className="check">✓</span> 90-day qualified-consultation guarantee
              </li>
            </ul>
            <div className="bf-tier-cta">
              <a href="#book" className="bf-tier-cta-gold" onClick={handleBook}>
                Book your strategy call →
              </a>
            </div>
          </Reveal>
        </div>
        <Reveal as="p" className="bf-offer-note">
          Ad spend is separate, controlled by you, and prescribed by us. Most firms start around $1,000/month.
        </Reveal>
      </div>
    </section>
  );
}
