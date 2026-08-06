import { useBooking } from '../BookingContext.jsx';
import { CALENDLY_URL, GUARANTEE_CONSULTS, GUARANTEE_DAYS } from '../siteConfig.js';

// Stays mounted at all times (rather than unmounting when closed) so the Calendly
// iframe loads in the background from page load - it's instant by the time someone
// actually opens the modal, instead of loading from scratch on every open.
export default function BookModal() {
  const { modalOpen, closeModal } = useBooking();

  return (
    <div
      className={`bf-modal-backdrop ${modalOpen ? 'open' : ''}`}
      onClick={closeModal}
      aria-hidden={!modalOpen}
      inert={!modalOpen ? '' : undefined}
    >
      <div className="bf-modal" role="dialog" aria-modal="true" onClick={(e) => e.stopPropagation()}>
        <div className="bf-modal-topbar" />
        <button type="button" className="bf-modal-close" aria-label="Close" onClick={closeModal}>
          ✕
        </button>

        <div className="bf-modal-head">
          <div className="bf-eyebrow">Book a strategy call</div>
          <h3>Pick a time that works for you.</h3>
          <p>
            A 30-minute call, no obligation and no pressure. Backed by the {GUARANTEE_CONSULTS} consultation,{' '}
            {GUARANTEE_DAYS}-day guarantee on the Growth Engine.
          </p>
        </div>
        <div className="bf-modal-body">
          <div className="bf-modal-calendly">
            <iframe src={CALENDLY_URL} title="Schedule a call with BrandFace Media" />
          </div>
        </div>
      </div>
    </div>
  );
}
