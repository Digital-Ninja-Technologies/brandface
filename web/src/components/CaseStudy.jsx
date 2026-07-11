import Reveal from './Reveal.jsx';
import Count from './Count.jsx';
import { DRIVE_VIDEO_EMBED_URL } from '../siteConfig.js';

export default function CaseStudy() {
  return (
    <section id="video" className="bf-section bf-section-alt bf-border-bottom">
      <div className="bf-container">
        <div className="bf-casestudy-grid">
          <div>
            <Reveal className="bf-eyebrow">Flagship case study</Reveal>
            <Reveal as="h2" delay={80}>
              Demetrius McCloud
            </Reveal>
            <Reveal delay={120} className="bf-casestudy-alias">
              "The Legal Sniper"
            </Reveal>
            <Reveal as="p" delay={180} className="desc">
              A personal injury attorney and our longest-running lawyer partnership. When we started, he had a small
              following and was known mostly within his professional network. Today the brand runs a second lead
              channel that has nothing to do with a lead form. A referral network so large he refers out the cases
              he can't take, and those attorneys refer back.
            </Reveal>
            <Reveal delay={240} className="bf-casestudy-stats">
              <div>
                <div className="num">
                  <Count value={7} suffix="M+" />
                </div>
                <div className="label">Views produced</div>
              </div>
              <div>
                <div className="num">
                  <Count value={30} suffix="K+" />
                </div>
                <div className="label">New Instagram followers</div>
              </div>
              <div>
                <div className="num">1,000s</div>
                <div className="label">Inbound DMs on his services</div>
              </div>
              <div>
                <div className="num">2</div>
                <div className="label">New verticals opened</div>
              </div>
            </Reveal>
          </div>
          <Reveal delay={120} style={{ position: 'relative' }}>
            <div className="bf-video-frame-glow" />
            <div className="bf-video-box">
              <iframe
                src={DRIVE_VIDEO_EMBED_URL}
                allow="autoplay"
                allowFullScreen
                title="How the BrandFace Media system works"
              />
            </div>
            <div className="bf-casestudy-caption">▶ Watch how the system works</div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
