import Reveal from './Reveal.jsx';

export default function WhoDifferentiator() {
  return (
    <section className="bf-section-tight bf-section-alt">
      <div className="bf-container-mid bf-whodiff-grid">
        <Reveal>
          <div className="bf-eyebrow">Who this is built for</div>
          <h3>Ambitious lawyers ready to scale beyond themselves.</h3>
          <ul className="bf-whodiff-list">
            <li>
              <span>→</span> Most business currently comes through referrals or word of mouth
            </li>
            <li>
              <span>→</span> Has tried an agency or software before, and been burned
            </li>
            <li>
              <span>→</span> Is the bottleneck in their own practice
            </li>
            <li>
              <span>→</span> Wants seven or eight figures without the big-law hours
            </li>
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <div className="bf-eyebrow">What separates us</div>
          <h3>Focus, plus the layer no one else builds.</h3>
          <p>
            Most content agencies stop at posting. Most ad agencies stop at leads. We connect content, ads, and
            back-end operations into one system, which is what actually changes case volume.
          </p>
          <p>
            And because we work only with law firms, we know how a firm signs cases, where the money leaks, and what
            drives volume. We don't learn on your dime.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
