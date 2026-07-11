import Reveal from './Reveal.jsx';

export default function Roi() {
  return (
    <section className="bf-section">
      <div className="bf-container-mid">
        <div className="bf-roi-head">
          <Reveal className="bf-eyebrow">The ROI math: personal injury</Reveal>
          <Reveal as="h2" delay={80}>
            You don't need volume to break even. You need one signed case.
          </Reveal>
          <Reveal as="p" delay={140}>
            Personal injury runs on a standard one-third contingency fee. Here's what a single sign is worth against
            the $5,000/mo service.
          </Reveal>
        </div>

        <div className="bf-roi-grid">
          <Reveal className="bf-roi-card">
            <div className="tag">Modest settlement</div>
            <div className="settlement">$25K–$30K</div>
            <div className="divider" />
            <div className="fee-label">Firm fee</div>
            <div className="fee">~$8K–10K</div>
            <p className="note">
              Covers about <strong>two months</strong> of service.
            </p>
          </Reveal>
          <Reveal delay={120} className="bf-roi-card featured">
            <div className="tag">National average sign</div>
            <div className="settlement">$77,600</div>
            <div className="divider" />
            <div className="fee-label">Firm fee</div>
            <div className="fee">~$25K</div>
            <p className="note">
              Roughly <strong>five months</strong>. One sign more than covers the full 90 days.
            </p>
          </Reveal>
          <Reveal delay={240} className="bf-roi-card">
            <div className="tag">Stronger case</div>
            <div className="settlement">~$100K</div>
            <div className="divider" />
            <div className="fee-label">Firm fee</div>
            <div className="fee">~$33K</div>
            <p className="note">
              About <strong>six to seven months</strong> of service.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
