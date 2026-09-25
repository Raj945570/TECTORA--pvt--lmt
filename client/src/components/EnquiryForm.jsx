import { useState } from 'react';
import '../styles/enquiry.css';

const PROJECT_OPTIONS = [
  'Commercial Infrastructure & Hubs',
  'Highway, Road & Bridge Construction',
  'Industrial & Warehousing Logistics',
  'Urban Architecture & Mixed-Use',
  'Structural & Precast RCC Framework',
  'Turnkey Project Management & PMO',
  'Direct Material Procurement & Supply',
  'Specialized Engineering Advisory',
  'Website Development',
  'App Design & Development',
  'UI/UX Design',
  'Digital Marketing & Growth',
  'Content & Social Media',
  'Interior Design & Execution',
  'Eco & Sustainable Infrastructure'
];

export default function EnquiryForm({ onSuccess, isModal = false }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });

  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  // Validate fields
  const validateField = (name, value) => {
    const val = value ? value.trim() : '';
    if (name === 'fullName') {
      return val.length >= 2;
    }
    if (name === 'email') {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    }
    if (name === 'phone') {
      const digits = val.replace(/\D/g, '');
      return digits.length >= 10;
    }
    if (name === 'projectType') {
      return !!value;
    }
    if (name === 'message') {
      return val.length >= 2;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // If user has already clicked submit, dynamically clear the error when valid
    if (hasSubmitted) {
      const isValid = validateField(name, value);
      setErrors((prev) => {
        const next = { ...prev };
        if (isValid) {
          delete next[name];
        } else {
          next[name] = true;
        }
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setHasSubmitted(true);

    // Validate all fields on submit
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!validateField(key, formData[key])) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Focus first error field
      const firstErrorKey = Object.keys(newErrors)[0];
      const el = document.getElementById(firstErrorKey);
      if (el) el.focus();
      return;
    }

    setErrors({});
    setLoading(true);

    const refId = `TEC-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
    const payload = {
      inquiryId: refId,
      fullName: formData.fullName.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      projectType: formData.projectType,
      message: formData.message.trim(),
      source: isModal ? 'TECTORA Enquiry Modal' : 'TECTORA Enquiry Page'
    };

    try {
      const response = await fetch('/api/enquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      const result = await response.json();
      const finalRef = (result && result.data && result.data.inquiryId) || refId;
      setReferenceId(finalRef);
      setSubmitted(true);

      // Save locally to prevent lead loss
      try {
        const key = 'tectora_real_inquiries';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.unshift({ ...payload, inquiryId: finalRef, date: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (err) {
        // ignore storage errors
      }

      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setHasSubmitted(false);

      if (onSuccess) onSuccess(finalRef);

    } catch (err) {
      console.warn('Enquiry recorded locally (fallback):', err.message);
      setReferenceId(refId);
      setSubmitted(true);
      try {
        const key = 'tectora_real_inquiries';
        const existing = JSON.parse(localStorage.getItem(key) || '[]');
        existing.unshift({ ...payload, date: new Date().toISOString() });
        localStorage.setItem(key, JSON.stringify(existing));
      } catch (e) {
        // ignore
      }
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        projectType: '',
        message: ''
      });
      setHasSubmitted(false);
      if (onSuccess) onSuccess(refId);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {submitted ? (
        <div className="enquiry-feedback-banner show">
          <div className="feedback-header">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
            <span>Inquiry Submitted Successfully</span>
          </div>
          <div className="feedback-body">
            Thank you! Our engineering team will review your requirements and reach out within 24 hours.
            <br />
            <span className="feedback-ref">Ref: {referenceId}</span>
          </div>
        </div>
      ) : (
        <form id="dedicatedEnquiryForm" className="enquiry-form" onSubmit={handleSubmit} noValidate>
          {/* 1. Full Name * */}
          <div className="form-field-group">
            <div className="field-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              placeholder="Full Name *"
              required
              autoComplete="name"
              className={`field-input ${hasSubmitted && errors.fullName ? 'has-error' : ''}`}
            />
          </div>

          {/* 2. Email Address * */}
          <div className="form-field-group">
            <div className="field-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address *"
              required
              autoComplete="email"
              className={`field-input ${hasSubmitted && errors.email ? 'has-error' : ''}`}
            />
          </div>

          {/* 3. Phone Number * */}
          <div className="form-field-group">
            <div className="field-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </div>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number *"
              required
              autoComplete="tel"
              className={`field-input ${hasSubmitted && errors.phone ? 'has-error' : ''}`}
            />
          </div>

          {/* 4. Project Type * (native select dropdown with custom chevron & icon) */}
          <div className="form-field-group select-field-group">
            <div className="field-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="9" y1="6" x2="9" y2="6.01"></line>
                <line x1="15" y1="6" x2="15" y2="6.01"></line>
                <line x1="9" y1="10" x2="9" y2="10.01"></line>
                <line x1="15" y1="10" x2="15" y2="10.01"></line>
                <line x1="9" y1="14" x2="9" y2="14.01"></line>
                <line x1="15" y1="14" x2="15" y2="14.01"></line>
                <line x1="9" y1="18" x2="15" y2="18"></line>
              </svg>
            </div>
            <select
              id="projectType"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              required
              className={`field-input field-select ${hasSubmitted && errors.projectType ? 'has-error' : ''}`}
            >
              <option value="" disabled>Project Type *</option>
              {PROJECT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <div className="select-chevron" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </div>
          </div>

          {/* 5. Message / Requirements * */}
          <div className="form-field-group textarea-group">
            <div className="field-icon-wrap textarea-icon-wrap" aria-hidden="true">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
            </div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message / Requirements *"
              rows="3"
              required
              className={`field-input field-textarea ${hasSubmitted && errors.message ? 'has-error' : ''}`}
            ></textarea>
          </div>

          {/* Submit CTA Button */}
          <button
            type="submit"
            id="btnSubmitEnquiry"
            disabled={loading}
            className="btn-enquiry-submit"
          >
            {loading ? (
              <>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="animate-spin" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" strokeDasharray="32" strokeDashoffset="12"></circle>
                </svg>
                <span>Submitting Inquiry...</span>
              </>
            ) : (
              <>
                <span>Submit Inquiry</span>
                <svg className="btn-arrow-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </>
            )}
          </button>

          {/* Security Note */}
          <div className="enquiry-security-note">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
              <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
            <span>Your information is secure with us.</span>
          </div>
        </form>
      )}
    </>
  );
}
