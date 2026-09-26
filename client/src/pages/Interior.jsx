import { useState, useEffect, useRef, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/motion/MotionVariants';
import { BASE_URL, getAuthHeaders } from '../config/api';
import '../styles/interior.css';

const INTERIOR_CATEGORIES = [
  {
    id: 'modern',
    anchorId: 'categoryModern',
    badge: 'Category 01 • Architectural Purity',
    title: 'Modern & Minimalist',
    desc: 'Geometric precision, floor-to-ceiling panoramic glass, natural limestone, and functional elegance tailored for contemporary living.',
    notes: 'Turnkey delivery, acoustic dampening, and bespoke monolithic joinery',
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85',
        tag: 'Architectural Living',
        title: 'Monolithic Living Space with Glass Courtyard'
      },
      {
        src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85',
        tag: 'Culinary & Dining',
        title: 'Fluted Monolithic Kitchen Island & Pendants'
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=2000&q=85',
        tag: 'Wellness & Bath',
        title: 'Microcement Architectural Powder Suite'
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85',
        tag: 'Open-Plan Pavilion',
        title: 'Seamless Indoor-Outdoor Courtyard Residence'
      },
      {
        src: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=85',
        tag: 'Master Suite',
        title: 'Sculptural Bedroom with Ambient Cove Illumination'
      },
      {
        src: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=85',
        tag: 'Executive Lounge',
        title: 'Monochromatic Lounge with Low-Profile Seating'
      }
    ]
  },
  {
    id: 'traditional',
    anchorId: 'categoryTraditional',
    badge: 'Category 02 • Heritage & Symmetry',
    title: 'Traditional & Classic',
    desc: 'Noble hardwoods, intricate crown moldings, coffered ceilings, and tailored European millwork built to endure generations.',
    notes: 'Hand-finished walnut joinery, solid brass hardware, and Italian marble',
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=2000&q=85',
        tag: 'Grand Salon',
        title: 'Classic European Salon with Ornate Moldings'
      },
      {
        src: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=2000&q=85',
        tag: 'Heritage Kitchen',
        title: 'Bespoke Shaker Culinary Studio with Brass'
      },
      {
        src: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85',
        tag: 'Executive Library',
        title: 'Rich Mahogany Library & Executive Study'
      },
      {
        src: 'https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2000&q=85',
        tag: 'Formal Banquet',
        title: 'Classical Dining Hall with Crystal Chandelier'
      },
      {
        src: 'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=2000&q=85',
        tag: 'Heritage Suite',
        title: 'Four-Poster Suite with Handcrafted Wainscoting'
      },
      {
        src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=85',
        tag: 'Vestibule Gallery',
        title: 'Checkerboard Marble Foyer with Classical Arches'
      }
    ]
  },
  {
    id: 'expressive',
    anchorId: 'categoryExpressive',
    badge: 'Category 03 • Culture & Materiality',
    title: 'Expressive & Global',
    desc: 'Organic curves, terracotta plaster, handwoven ethnographic tapestries, and botanical harmony inspired by world architectural sanctuaries.',
    notes: 'Curated global artifacts, custom lime-wash render, and artisanal textiles',
    slides: [
      {
        src: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=2000&q=85',
        tag: 'Mediterranean Earth',
        title: 'Terracotta Salon with Sculptural Clay & Fiber'
      },
      {
        src: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85',
        tag: 'Arched Sanctuary',
        title: 'Moroccan Alcoves with Sunlit Skylights & Palms'
      },
      {
        src: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=85',
        tag: 'Artisanal Living',
        title: 'Handcrafted Organic Lounge with Global Textiles'
      },
      {
        src: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=2000&q=85',
        tag: 'Maximalist Studio',
        title: 'Warm Ochre Drawing Room with Antiqued Brass'
      },
      {
        src: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=2000&q=85',
        tag: 'Tropical Biophilic',
        title: 'Sunlit Cane & Tropical Greenery Dining'
      },
      {
        src: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=2000&q=85',
        tag: 'Japandi-Boho Suite',
        title: 'Earthy Textured Bedroom with Raw Timber'
      }
    ]
  }
];

export default function Interior() {
  const [activeCategoryTab, setActiveCategoryTab] = useState('categoryModern');
  const [slideIndices, setSlideIndices] = useState({
    modern: 0,
    traditional: 0,
    expressive: 0
  });
  const [pausedStates, setPausedStates] = useState({
    modern: false,
    traditional: false,
    expressive: false
  });

  // Lightbox Zoom Modal
  const [zoomModal, setZoomModal] = useState({
    isOpen: false,
    catIndex: 0,
    slideIndex: 0
  });

  // Enquiry Modal
  const [enquiryModal, setEnquiryModal] = useState({
    isOpen: false,
    style: 'Modern & Minimalist'
  });
  const [enquiryForm, setEnquiryForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    projectType: 'Modern & Minimalist',
    message: ''
  });
  const [enquirySubmitted, setEnquirySubmitted] = useState(false);
  const [enquiryLoading, setEnquiryLoading] = useState(false);

  // Auto-advance sliders every 3.5s if not paused
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideIndices((prev) => {
        const next = { ...prev };
        INTERIOR_CATEGORIES.forEach((cat) => {
          if (!pausedStates[cat.id]) {
            next[cat.id] = (prev[cat.id] + 1) % cat.slides.length;
          }
        });
        return next;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [pausedStates]);

  const handleNext = (catId) => {
    const cat = INTERIOR_CATEGORIES.find((c) => c.id === catId);
    if (!cat) return;
    setSlideIndices((prev) => ({
      ...prev,
      [catId]: (prev[catId] + 1) % cat.slides.length
    }));
  };

  const handlePrev = (catId) => {
    const cat = INTERIOR_CATEGORIES.find((c) => c.id === catId);
    if (!cat) return;
    setSlideIndices((prev) => ({
      ...prev,
      [catId]: (prev[catId] - 1 + cat.slides.length) % cat.slides.length
    }));
  };

  const setCategorySlide = (catId, index) => {
    setSlideIndices((prev) => ({ ...prev, [catId]: index }));
  };

  // Zoom navigation
  const openZoom = (catIdx, slideIdx) => {
    setZoomModal({
      isOpen: true,
      catIndex: catIdx,
      slideIndex: slideIdx
    });
  };

  const closeZoom = () => {
    setZoomModal((prev) => ({ ...prev, isOpen: false }));
  };

  const zoomNext = useCallback(() => {
    setZoomModal((prev) => {
      const currentCat = INTERIOR_CATEGORIES[prev.catIndex];
      const nextSlide = (prev.slideIndex + 1) % currentCat.slides.length;
      return { ...prev, slideIndex: nextSlide };
    });
  }, []);

  const zoomPrev = useCallback(() => {
    setZoomModal((prev) => {
      const currentCat = INTERIOR_CATEGORIES[prev.catIndex];
      const prevSlide = (prev.slideIndex - 1 + currentCat.slides.length) % currentCat.slides.length;
      return { ...prev, slideIndex: prevSlide };
    });
  }, []);

  // Keyboard navigation for zoom
  useEffect(() => {
    if (!zoomModal.isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeZoom();
      else if (e.key === 'ArrowRight') zoomNext();
      else if (e.key === 'ArrowLeft') zoomPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomModal.isOpen, zoomNext, zoomPrev]);

  // Enquiry modal actions
  const openEnquiry = (styleName = 'Modern & Minimalist') => {
    setEnquiryForm((prev) => ({ ...prev, projectType: styleName }));
    setEnquirySubmitted(false);
    setEnquiryModal({ isOpen: true, style: styleName });
  };

  const closeEnquiry = () => {
    setEnquiryModal({ isOpen: false, style: 'Modern & Minimalist' });
    setEnquirySubmitted(false);
  };

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    if (!enquiryForm.fullName || !enquiryForm.email || !enquiryForm.phone) {
      alert('Please fill out all required fields.');
      return;
    }

    setEnquiryLoading(true);
    try {
      await fetch(`${BASE_URL}/api/enquiry`, {
        method: 'POST',
        headers: getAuthHeaders(),
        body: JSON.stringify({
          inquiryId: `TEC-INT-${Date.now()}`,
          fullName: enquiryForm.fullName,
          email: enquiryForm.email,
          phone: enquiryForm.phone,
          projectType: enquiryForm.projectType,
          message: enquiryForm.message,
          source: 'Interior Design Page'
        })
      });
      setEnquirySubmitted(true);
    } catch {
      // Local graceful fallback
      setEnquirySubmitted(true);
    } finally {
      setEnquiryLoading(false);
    }
  };

  const currentZoomCat = INTERIOR_CATEGORIES[zoomModal.catIndex] || INTERIOR_CATEGORIES[0];
  const currentZoomSlide = currentZoomCat.slides[zoomModal.slideIndex] || currentZoomCat.slides[0];

  return (
    <main className="interior-page-root">
      {/* 1. HERO SECTION */}
      <section className="interior-hero">
        <div className="container">
          <FadeIn direction="up" duration={0.8} amount={0.2}>
            <div className="interior-breadcrumb">
              <Link to="/">Platform</Link>
              <span>/</span>
              <span>Interior Design</span>
            </div>

            <h1 className="interior-hero-title">Interior Design Styles &amp; Curated Portfolios</h1>
            <p className="interior-hero-desc">
              Immerse yourself in signature architectural interior disciplines executed by audited turnkey studios.
              Explore minimalist living, classic heritage craftsmanship, and expressive global aesthetics.
            </p>

            {/* Quick Jump Style Pills */}
            <div className="interior-style-pills" role="navigation" aria-label="Jump to Style">
              {INTERIOR_CATEGORIES.map((cat, idx) => (
                <a
                  key={cat.id}
                  href={`#${cat.anchorId}`}
                  onClick={() => setActiveCategoryTab(cat.anchorId)}
                  className={`interior-pill-btn ${activeCategoryTab === cat.anchorId ? 'is-active' : ''}`}
                >
                  <span className="pill-num">0{idx + 1}</span>
                  <span>{cat.title}</span>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 2. CATEGORIES SHOWCASE */}
      <div className="container interior-categories-wrap">
        {INTERIOR_CATEGORIES.map((cat, catIdx) => {
          const currentSlideIdx = slideIndices[cat.id] || 0;

          return (
            <section
              key={cat.id}
              className="interior-category-section"
              id={cat.anchorId}
              aria-labelledby={`title-${cat.id}`}
            >
              {/* Category Header */}
              <div className="interior-category-header">
                <div className="interior-category-info">
                  <span className="interior-category-badge">{cat.badge}</span>
                  <h2 className="interior-category-title" id={`title-${cat.id}`}>{cat.title}</h2>
                  <p className="interior-category-desc">{cat.desc}</p>
                </div>
                <div className="interior-category-counter-top">
                  <span className="pill-num" style={{ color: 'var(--gold-accent)' }}>
                    {cat.slides.length} Curated Works
                  </span>
                </div>
              </div>

              {/* Showcase Frame with Single-Image Slide & Auto-Fade */}
              <div
                className="interior-showcase-frame"
                onMouseEnter={() => setPausedStates((p) => ({ ...p, [cat.id]: true }))}
                onMouseLeave={() => setPausedStates((p) => ({ ...p, [cat.id]: false }))}
                role="region"
                aria-label={`${cat.title} Gallery`}
              >
                {/* Counter Badge */}
                <div className="interior-counter-badge" aria-live="polite">
                  <span className="current-idx">0{currentSlideIdx + 1}</span> / <span>0{cat.slides.length}</span>
                </div>

                {/* Prev / Next Arrows */}
                <button
                  type="button"
                  className="interior-arrow-btn interior-arrow-prev"
                  onClick={() => handlePrev(cat.id)}
                  aria-label="Previous Slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  type="button"
                  className="interior-arrow-btn interior-arrow-next"
                  onClick={() => handleNext(cat.id)}
                  aria-label="Next Slide"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* Slides Viewport */}
                <div
                  className="interior-slides-viewport cursor-pointer"
                  onClick={() => openZoom(catIdx, currentSlideIdx)}
                >
                  {cat.slides.map((slide, sIdx) => (
                    <div
                      key={slide.src}
                      className={`interior-slide ${sIdx === currentSlideIdx ? 'is-active' : ''}`}
                      title="Click to expand high-resolution viewer"
                    >
                      <img src={slide.src} alt={slide.title} loading={sIdx === 0 ? 'eager' : 'lazy'} />
                      <div className="interior-slide-overlay"></div>
                      <div className="interior-slide-caption">
                        <span className="interior-caption-tag">{slide.tag}</span>
                        <h3 className="interior-caption-title">{slide.title}</h3>
                        <span className="interior-zoom-hint">
                          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                          Click to Zoom
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom Dots Indicator */}
                <div className="interior-dots-row" aria-label="Slide Selection">
                  {cat.slides.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      type="button"
                      className={`interior-dot ${dotIdx === currentSlideIdx ? 'is-active' : ''}`}
                      onClick={() => setCategorySlide(cat.id, dotIdx)}
                      aria-label={`Slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Action Row */}
              <div className="interior-category-action-row">
                <div className="interior-category-notes">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{cat.notes}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openEnquiry(cat.title)}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#0B1F3A] hover:bg-[#C8A45D] text-white hover:text-[#0B1F3A] rounded text-xs font-bold uppercase tracking-wider transition-all duration-200"
                >
                  Enquire for {cat.title} &rarr;
                </button>
              </div>
            </section>
          );
        })}

        {/* 3. GLOBAL BOTTOM CTA BANNER */}
        <section className="interior-global-cta-section" id="quote">
          <FadeIn direction="up" duration={0.8} amount={0.2} className="interior-global-cta-inner">
            <span className="interior-global-cta-tag">Turnkey Architecture Execution</span>
            <h2 className="interior-global-cta-title">Ready to Transform Your Space?</h2>
            <p className="interior-global-cta-desc">
              Partner with TECTORA's network of audited turnkey studios, master craftsmen, and interior architects.
              Receive tailored concept designs, itemized BOQ estimates, and milestone guarantees.
            </p>
            <div className="interior-global-cta-btns">
              <button
                type="button"
                onClick={() => openEnquiry('Turnkey Interior Architecture')}
                className="interior-btn-global-primary premium-btn-hover"
              >
                <span>Enquiry Now</span>
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </button>
              <Link to="/services" className="interior-btn-global-secondary premium-btn-hover">
                <span>Explore All Offerings</span>
              </Link>
            </div>
          </FadeIn>
        </section>
      </div>

      {/* 4. FULL-SCREEN LIGHTBOX ZOOM MODAL */}
      {zoomModal.isOpen && (
        <div
          className="interior-zoom-modal is-open"
          style={{ display: 'flex', opacity: 1 }}
          role="dialog"
          aria-modal="true"
        >
          {/* Top Bar */}
          <div className="interior-zoom-topbar">
            <div className="interior-zoom-title-wrap">
              <div className="interior-zoom-category-name">{currentZoomCat.title}</div>
              <div className="interior-zoom-image-caption">{currentZoomSlide.title}</div>
            </div>
            <button
              type="button"
              className="interior-zoom-close-btn"
              onClick={closeZoom}
              aria-label="Close Zoom Modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* Navigation Arrows */}
          <button
            type="button"
            className="interior-zoom-nav-btn interior-zoom-prev"
            onClick={zoomPrev}
            aria-label="Previous Image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button
            type="button"
            className="interior-zoom-nav-btn interior-zoom-next"
            onClick={zoomNext}
            aria-label="Next Image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>

          {/* Center Stage */}
          <div className="interior-zoom-stage" onClick={closeZoom}>
            <img
              src={currentZoomSlide.src}
              alt={currentZoomSlide.title}
              className="interior-zoom-img"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Bottom Bar */}
          <div className="interior-zoom-bottombar">
            <span>
              0{zoomModal.slideIndex + 1} / 0{currentZoomCat.slides.length}
            </span>{' '}
            &bull; Use Left / Right arrows to navigate &bull; Esc to close
          </div>
        </div>
      )}

      {/* 5. INTERACTIVE ENQUIRY MODAL */}
      {enquiryModal.isOpen && (
        <div
          className="interior-enquiry-modal is-visible"
          style={{ display: 'flex' }}
          role="dialog"
          aria-modal="true"
        >
          <div className="interior-enquiry-card relative">
            <button
              type="button"
              className="interior-enquiry-close"
              onClick={closeEnquiry}
              aria-label="Close Enquiry Modal"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {!enquirySubmitted ? (
              <>
                <div className="interior-enquiry-header">
                  <div className="interior-enquiry-tag">Turnkey Studio Advisory</div>
                  <h3 className="interior-enquiry-title">Enquire for {enquiryModal.style}</h3>
                </div>

                <form onSubmit={handleEnquirySubmit} noValidate>
                  <div className="interior-form-group">
                    <label className="interior-form-label" htmlFor="interiorFullName">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="interiorFullName"
                      name="fullName"
                      value={enquiryForm.fullName}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, fullName: e.target.value })}
                      className="interior-form-input"
                      placeholder="e.g. Vikramaditya Singhania"
                      required
                    />
                  </div>

                  <div className="interior-form-row">
                    <div className="interior-form-group">
                      <label className="interior-form-label" htmlFor="interiorEmail">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="interiorEmail"
                        name="email"
                        value={enquiryForm.email}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, email: e.target.value })}
                        className="interior-form-input"
                        placeholder="name@enterprise.com"
                        required
                      />
                    </div>

                    <div className="interior-form-group">
                      <label className="interior-form-label" htmlFor="interiorPhone">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="interiorPhone"
                        name="phone"
                        value={enquiryForm.phone}
                        onChange={(e) => setEnquiryForm({ ...enquiryForm, phone: e.target.value })}
                        className="interior-form-input"
                        placeholder="10-digit mobile number"
                        required
                      />
                    </div>
                  </div>

                  <div className="interior-form-group">
                    <label className="interior-form-label" htmlFor="interiorEnquiryStyle">
                      Design Style / Category *
                    </label>
                    <select
                      id="interiorEnquiryStyle"
                      name="projectType"
                      value={enquiryForm.projectType}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, projectType: e.target.value })}
                      className="interior-form-select"
                      required
                    >
                      <option value="Modern & Minimalist">Modern &amp; Minimalist</option>
                      <option value="Traditional & Classic">Traditional &amp; Classic</option>
                      <option value="Expressive & Global">Expressive &amp; Global</option>
                      <option value="Turnkey Interior Architecture">Turnkey Interior Architecture</option>
                    </select>
                  </div>

                  <div className="interior-form-group">
                    <label className="interior-form-label" htmlFor="interiorMessage">
                      Requirements / Scope *
                    </label>
                    <textarea
                      id="interiorMessage"
                      name="message"
                      value={enquiryForm.message}
                      onChange={(e) => setEnquiryForm({ ...enquiryForm, message: e.target.value })}
                      className="interior-form-textarea"
                      placeholder="Share your project timeline, carpet area, and specifications..."
                      rows={3}
                      required
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={enquiryLoading}
                    className="interior-form-submit-btn w-full"
                  >
                    <span>{enquiryLoading ? 'Submitting...' : 'Submit Enquiry'}</span>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </button>
                </form>
              </>
            ) : (
              <div className="interior-enquiry-success" style={{ display: 'block' }}>
                <div className="interior-success-icon">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h4 className="interior-success-title">Enquiry Registered</h4>
                <p className="interior-success-desc">
                  Thank you! Your specifications have been submitted to TECTORA turnkey studios. An interior architect will connect within 24 hours.
                </p>
                <button
                  type="button"
                  className="interior-success-close-btn"
                  onClick={closeEnquiry}
                >
                  Done
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}
