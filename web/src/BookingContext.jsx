import { createContext, useCallback, useContext, useEffect, useState } from 'react';

const BookingContext = createContext(null);

export function BookingProvider({ children }) {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalStep, setModalStep] = useState('form');
  const [leadInfo, setLeadInfo] = useState(null);

  // opts: { step: 'form' | 'success' | 'calendly', leadInfo: { fullName, firmName } }
  // Regular "Book a call" CTAs call this with no args and get the full form flow.
  // The on-page form calls it with { step: 'success', leadInfo } after it submits, so the
  // rest of the flow (success + schedule) continues in the popup instead of inline.
  const openModal = useCallback((opts) => {
    setModalStep(opts?.step || 'form');
    setLeadInfo(opts?.leadInfo || null);
    setModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setModalOpen(false);
    setModalStep('form');
    setLeadInfo(null);
  }, []);

  useEffect(() => {
    document.body.style.overflow = modalOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, closeModal]);

  return (
    <BookingContext.Provider value={{ modalOpen, modalStep, leadInfo, openModal, closeModal, setModalStep }}>
      {children}
    </BookingContext.Provider>
  );
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking must be used within a BookingProvider');
  return ctx;
}
