import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import EnquiryForm from './EnquiryForm';
import '../styles/enquiry.css';

export default function EnquiryModal({ 
  isOpen, 
  onClose, 
  tag = "LET'S BUILD TOGETHER", 
  title = "Enquire Now" 
}) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isEnquireNow = !title || title.toLowerCase() === 'enquire now';

  return createPortal(
    <div
      className="enquiry-modal-overlay"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="enquiry-modal-card">
        <button
          type="button"
          onClick={onClose}
          className="enquiry-modal-close"
          aria-label="Close Enquiry Modal"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        <div className="enquiry-modal-header">
          <p className="enquiry-kicker">{tag || "LET'S BUILD TOGETHER"}</p>
          <h2 className="enquiry-main-title">
            {isEnquireNow ? (
              <>
                <span className="title-gold">ENQUIRE</span> <span className="title-navy">NOW</span>
              </>
            ) : (
              <span className="title-navy">{title}</span>
            )}
          </h2>
          <p className="enquiry-subtitle">
            Share your requirements and our team will get back to you soon.
          </p>
        </div>

        <EnquiryForm isModal={true} onSuccess={() => {}} />
      </div>
    </div>,
    document.body
  );
}

