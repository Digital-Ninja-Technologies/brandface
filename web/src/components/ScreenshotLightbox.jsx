import { useEffect } from 'react';

export default function ScreenshotLightbox({ images, index, onClose, onNavigate }) {
  const open = index !== null && index !== undefined;

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((index + 1) % images.length);
      if (e.key === 'ArrowLeft') onNavigate((index - 1 + images.length) % images.length);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, index, images.length, onClose, onNavigate]);

  if (!open) return null;
  const shot = images[index];

  return (
    <div className="bf-lightbox-backdrop" onClick={onClose}>
      <button type="button" className="bf-lightbox-close" aria-label="Close" onClick={onClose}>
        ✕
      </button>
      {images.length > 1 && (
        <button
          type="button"
          className="bf-lightbox-nav left"
          aria-label="Previous screenshot"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index - 1 + images.length) % images.length);
          }}
        >
          ‹
        </button>
      )}
      <div className="bf-lightbox-img-wrap" onClick={(e) => e.stopPropagation()}>
        <img src={shot.src} alt={shot.alt} />
      </div>
      {images.length > 1 && (
        <button
          type="button"
          className="bf-lightbox-nav right"
          aria-label="Next screenshot"
          onClick={(e) => {
            e.stopPropagation();
            onNavigate((index + 1) % images.length);
          }}
        >
          ›
        </button>
      )}
    </div>
  );
}
