import { Link } from 'react-router-dom';

export default function CoreOfferings() {
  return (
    <section className="section-wrapper tools-resource-section" id="offerings">
      {/* Background curved shapes matching reference design */}
      <svg className="tools-bg-shapes" aria-hidden="true" viewBox="0 0 1600 700" fill="none" preserveAspectRatio="none">
        <path d="M750 -40 C980 120, 1240 340, 1650 200 L1650 -40 Z" fill="rgba(245, 230, 190, 0.35)" />
        <path d="M860 -60 C1080 140, 1340 380, 1680 260" stroke="rgba(243, 215, 150, 0.50)" strokeWidth="60" strokeLinecap="round" />
        <path d="M1020 -80 C1220 160, 1420 420, 1720 320" stroke="rgba(245, 225, 170, 0.35)" strokeWidth="90" strokeLinecap="round" />
      </svg>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        {/* Header Row */}
        <div className="tools-header-row">
          <div className="tools-header-left">
            <div className="tools-tagline-cluster">
              <span className="tools-tagline-text">CORE OFFERINGS</span>
              <span className="tools-tagline-dash" aria-hidden="true"></span>
            </div>
            <h2 className="tools-main-title">Everything You Need to Build</h2>
            <p className="tools-main-subtitle">
              Designed to streamline supply pipelines, verify quality benchmarks, and connect institutional builders with proven execution partners.
            </p>
          </div>

          <div className="tools-header-right">
            <div className="tools-brand-badge">
              <span className="tools-badge-bar" aria-hidden="true"></span>
              <div className="tools-badge-copy">
                <span className="tools-badge-line1">SMART TOOLS</span>
                <span className="tools-badge-line2">STRONGER SPACES</span>
              </div>
            </div>
          </div>
        </div>

        {/* 5 Minimal UltraTech-Style Service Cards */}
        <div className="ultratech-cards-grid">
          
          {/* Card 1: Raw Materials */}
          <Link to="/materials" className="ultratech-card" id="cardOfferingMaterials" aria-label="Explore Raw Materials">
            <div className="ultratech-card-top">
              <div className="ultratech-icon-wrapper">
                <svg className="ultratech-icon-svg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="26" fill="#F4EFE6" className="icon-circle-bg"/>
                  <polygon points="28,12 37,17 37,21 28,16" fill="#FFE680" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="19,17 28,12 28,16 19,21" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="19,21 28,26 28,31 19,26" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="28,26 37,21 37,26 28,31" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="11,24 20,20 29,24 20,28" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="11,24 20,28 20,35 11,31" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="20,28 29,24 29,31 20,35" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="27,24 36,20 45,24 36,28" fill="#FFE680" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="27,24 36,28 36,35 27,31" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <polygon points="36,28 45,24 45,31 36,35" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="ultratech-card-title">Raw Materials</h3>
              <p className="ultratech-card-desc">
                Explore quality construction materials, land, or resources for your next project.
              </p>
            </div>
            <div className="ultratech-card-bottom">
              <span className="ultratech-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </Link>

          {/* Card 2: Real Estate */}
          <Link to="/real-estate" className="ultratech-card" id="cardOfferingCommercial" aria-label="Explore Real Estate">
            <div className="ultratech-card-top">
              <div className="ultratech-icon-wrapper">
                <svg className="ultratech-icon-svg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="26" fill="#F4EFE6" className="icon-circle-bg"/>
                  <ellipse cx="28" cy="40" rx="11" ry="4" fill="#FFE680" stroke="#1E293B" strokeWidth="2"/>
                  <path d="M28 12C22.477 12 18 16.477 18 22C18 29 28 38 28 38C28 38 38 29 38 22C38 16.477 33.523 12 28 12Z" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <circle cx="28" cy="21.5" r="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8"/>
                </svg>
              </div>
              <h3 className="ultratech-card-title">Real Estate</h3>
              <p className="ultratech-card-desc">
                Discover verified commercial land opportunities in prime locations.
              </p>
            </div>
            <div className="ultratech-card-bottom">
              <span className="ultratech-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </Link>

          {/* Card 3: Experts */}
          <Link to="/experts" className="ultratech-card" id="cardOfferingContractors" aria-label="Explore Experts">
            <div className="ultratech-card-top">
              <div className="ultratech-icon-wrapper">
                <svg className="ultratech-icon-svg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="26" fill="#F4EFE6" className="icon-circle-bg"/>
                  <path d="M28 14C23 14 18 17 17 22H39C38 17 33 14 28 14Z" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M14 22H42V25C42 26.1 41.1 27 40 27H16C14.9 27 14 26.1 14 25V22Z" fill="#FFE680" stroke="#1E293B" strokeWidth="2"/>
                  <circle cx="28" cy="32" r="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2"/>
                  <path d="M20 42C20 37.5 23.5 35 28 35C32.5 35 36 37.5 36 42" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2"/>
                </svg>
              </div>
              <h3 className="ultratech-card-title">Experts</h3>
              <p className="ultratech-card-desc">
                Connect with trusted experts, consultants, and turnkey execution partners.
              </p>
            </div>
            <div className="ultratech-card-bottom">
              <span className="ultratech-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </Link>

          {/* Card 4: Interior Design */}
          <Link to="/interior" className="ultratech-card" id="cardOfferingInteriors" aria-label="Explore Interior Design">
            <div className="ultratech-card-top">
              <div className="ultratech-icon-wrapper">
                <svg className="ultratech-icon-svg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="26" fill="#F4EFE6" className="icon-circle-bg"/>
                  <path d="M16 28C16 24 19 22 22 22H34C37 22 40 24 40 28V36H16V28Z" fill="#FFE680" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <rect x="18" y="27" width="20" height="9" rx="2" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8"/>
                  <path d="M14 27C14 25.5 15 25 16.5 25C18 25 18.5 26 18.5 27V36H14V27Z" fill="#FFD439" stroke="#1E293B" strokeWidth="1.8"/>
                  <path d="M37.5 27C37.5 26 38 25 39.5 25C41 25 42 25.5 42 27V36H37.5V27Z" fill="#FFD439" stroke="#1E293B" strokeWidth="1.8"/>
                  <line x1="20" y1="36" x2="20" y2="40" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
                  <line x1="36" y1="36" x2="36" y2="40" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="ultratech-card-title">Interior Design</h3>
              <p className="ultratech-card-desc">
                Explore signature styles and expert interior design solutions to transform your space.
              </p>
            </div>
            <div className="ultratech-card-bottom">
              <span className="ultratech-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </Link>

          {/* Card 5: Eco Friendly Solutions */}
          <Link to="/eco-solutions" className="ultratech-card" id="cardOfferingEco" aria-label="Explore Eco Friendly Solutions">
            <div className="ultratech-card-top">
              <div className="ultratech-icon-wrapper">
                <svg className="ultratech-icon-svg" width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="28" cy="28" r="26" fill="#F4EFE6" className="icon-circle-bg"/>
                  <path d="M21 34C18 32 15 28 17 23C20 22 25 24 26 28C26 31 23 34 21 34Z" fill="#C8E6C9" stroke="#1E293B" strokeWidth="1.8" strokeLinejoin="round"/>
                  <path d="M19 28C21 28 23 29 24 31" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
                  <path d="M23 37C23 37 25 26 33 17C38 16 41 18 41 20C42 27 34 36 23 37Z" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M23 37C27 32 32 26 38 19" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round"/>
                  <path d="M23 37C21 40 18 41 15 41" stroke="#1E293B" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <h3 className="ultratech-card-title">Eco Friendly<br />Solutions</h3>
              <p className="ultratech-card-desc">
                Explore sustainable and eco-friendly construction alternatives.
              </p>
            </div>
            <div className="ultratech-card-bottom">
              <span className="ultratech-arrow-btn" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </span>
            </div>
          </Link>

        </div>

        {/* Bottom Tagline Divider */}
        <div className="tools-bottom-divider" aria-hidden="true">
          <span className="tools-divider-line"></span>
          <span className="tools-divider-text">BUILD A BETTER TOMORROW</span>
          <span className="tools-divider-line"></span>
        </div>

      </div>
    </section>
  );
}
