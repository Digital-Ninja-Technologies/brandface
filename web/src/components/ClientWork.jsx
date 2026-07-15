import Reveal from './Reveal.jsx';
import VideoBox from './VideoBox.jsx';

const WORK_ITEMS = [
  {
    label: 'For a Personal Injury Lawyer.',
    embedUrl: 'https://www.youtube.com/embed/EHDfK2Tie-8?rel=0',
    viewUrl: 'https://youtube.com/shorts/EHDfK2Tie-8',
    title: 'Content example for a personal injury lawyer',
  },
  {
    label: 'For a Divorce Lawyer.',
    embedUrl: 'https://www.youtube.com/embed/2lkqtQIj4Oo?rel=0',
    viewUrl: 'https://youtube.com/shorts/2lkqtQIj4Oo',
    title: 'Content example for a divorce lawyer',
  },
];

export default function ClientWork() {
  return (
    <section className="bf-section bf-section-alt">
      <div className="bf-container">
        <div className="bf-clientwork-head bf-center">
          <Reveal className="bf-eyebrow">Our work</Reveal>
          <Reveal as="h2" delay={80}>
            Content we have done for our clients.
          </Reveal>
        </div>

        <div className="bf-grid-2 bf-clientwork-grid">
          {WORK_ITEMS.map((item, i) => (
            <Reveal key={item.embedUrl} delay={i * 120} className="bf-clientwork-item">
              <h3>{item.label}</h3>
              <VideoBox
                title={item.title}
                embedUrl={item.embedUrl}
                viewUrl={item.viewUrl}
                className="bf-video-box-vertical"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
