import Reveal from './Reveal.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

export default function Guarantee() {
  return (
    <section id="guarantee" className="bf-guarantee">
      <div className="bf-guarantee-radial" />
      <div className="bf-guarantee-inner">
        <Reveal className="bf-eyebrow">The guarantee</Reveal>
        <Reveal as="h2" delay={80}>
          {GUARANTEE_CONSULTS} qualified consultations in {GUARANTEE_DAYS} days, or we work free until you get them.
        </Reveal>
        <Reveal as="p" delay={150} className="lede">
          On the Growth Engine, we guarantee a minimum of {GUARANTEE_CONSULTS} qualified consultations in your first{' '}
          {GUARANTEE_DAYS} days: real potential cases, booked and tracked inside your own system. Miss it, and we
          keep working, free, until you hit that number.
        </Reveal>
        <Reveal delay={220} className="bf-guarantee-defbox">
          <strong>A qualified consultation</strong> = a booked call with someone describing a real, potentially
          takeable matter. Not a raw form fill.
        </Reveal>
      </div>
    </section>
  );
}
