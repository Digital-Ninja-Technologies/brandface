import Reveal from './Reveal.jsx';

export default function Founder() {
  return (
    <section className="bf-section">
      <div className="bf-container-narrow">
        <Reveal className="bf-eyebrow bf-center">The founder</Reveal>
        <Reveal as="h2" delay={80} className="bf-founder-lede">
          Built by a creator who spent years making content that actually got watched.
        </Reveal>
        <Reveal as="p" delay={140} className="bf-founder-body">
          Before the agency, Bdo built a personal following of over 150,000 and generated 300 million+ organic views
          as a creator, with brand partnerships including Red Bull, Apple, and Smart Water. That background is the
          foundation the agency was built on.
        </Reveal>
        <Reveal delay={200} className="bf-founder-callout">
          <div className="bf-eyebrow">The personal injury connection</div>
          <p>
            Bdo was personally a client of a personal injury attorney. He lived the accident, the intake, the case
            management, the resolution. Most agencies pitch PI attorneys without ever having been on the other side
            of that phone call. <span className="accent">We have.</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
