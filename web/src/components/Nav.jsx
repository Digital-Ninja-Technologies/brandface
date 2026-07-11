import { useState } from 'react';
import useScrollY from '../hooks/useScrollY';
import { useBooking } from '../BookingContext.jsx';

const LINKS = [
  { href: '#work', label: 'What we do' },
  { href: '#results', label: 'Results' },
  { href: '#offer', label: 'Offer' },
  { href: '#guarantee', label: 'Guarantee' },
];

export default function Nav() {
  const y = useScrollY();
  const { openModal } = useBooking();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrolled = y > 24;

  const handleBook = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    openModal();
  };

  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={`bf-nav${scrolled ? ' bf-nav-scrolled' : ''}`}>
      <div className="bf-nav-row">
        <a href="#top" className="bf-nav-logo">
          <img src="/assets/brandface-logo.png" alt="BrandFace Media" />
          <span>BrandFace</span>
        </a>
        <div className="bf-nav-right">
          <div className="bf-nav-links">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </div>
          <a href="#book" className="bf-btn-gold bf-nav-book-desktop" onClick={handleBook}>
            Book a call
          </a>
          <button
            type="button"
            className="bf-nav-burger"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="bf-nav-mobile-panel">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href} onClick={handleLinkClick}>
              {l.label}
            </a>
          ))}
          <a href="#book" className="bf-btn-gold" onClick={handleBook}>
            Book a call
          </a>
        </div>
      )}
    </nav>
  );
}
