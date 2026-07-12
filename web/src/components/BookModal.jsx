import { useBooking } from '../BookingContext.jsx';
import { GUARANTEE_CONSULTS, GUARANTEE_DAYS, CALENDLY_URL } from '../siteConfig.js';

export default function BookModal() {
  const { modalOpen, closeModal } = useBooking();

  if (!modalOpen) return null;

  return (
    <div className="bf-modal-backdrop" onClick={closeModal}>
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
