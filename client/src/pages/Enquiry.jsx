import EnquiryForm from '../components/EnquiryForm';
import { FadeIn } from '../components/motion/MotionVariants';
import backdropImg from '../assets/images/enquiry-hero-backdrop@2x.jpg';
import '../styles/enquiry.css';

export default function Enquiry() {
  return (
    <main className="enquiry-hero-section" id="enquiry-section" style={{ '--enquiry-bg': `url(${backdropImg})` }}>
      <div className="enquiry-hero-container">
        
        {/* Left-Aligned Form Column */}
        <div className="enquiry-form-column">
          
          <FadeIn direction="up" duration={0.8} amount={0.15}>
            {/* Kicker Tagline */}
            <p className="enquiry-kicker">LET'S BUILD TOGETHER</p>

            {/* Main Title: Gold ENQUIRE + Navy NOW */}
            <h1 className="enquiry-main-title">
              <span className="title-gold">ENQUIRE</span> <span className="title-navy">NOW</span>
            </h1>

            {/* Subtitle */}
            <p className="enquiry-subtitle">
              Share your requirements and our team will get back to you soon.
            </p>

            {/* Floating White Card with Form */}
            <div className="enquiry-card">
              <EnquiryForm />
            </div>

            {/* Trust Badges Row (4 Items with Subtle Dividers) */}
            <div className="enquiry-trust-row">
              
              {/* 1. Expert Guidance */}
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 18v-6a9 9 0 0 1 18 0v6"></path>
                  <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path>
                </svg>
                <span className="trust-label">Expert<br/>Guidance</span>
              </div>

              <div className="trust-divider" aria-hidden="true"></div>

              {/* 2. Quality Solutions */}
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  <polyline points="9 12 11 14 15 10"></polyline>
                </svg>
                <span className="trust-label">Quality<br/>Solutions</span>
              </div>

              <div className="trust-divider" aria-hidden="true"></div>

              {/* 3. Dedicated Support */}
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
                <span className="trust-label">Dedicated<br/>Support</span>
              </div>

              <div className="trust-divider" aria-hidden="true"></div>

              {/* 4. Concept to Completion */}
              <div className="trust-item">
                <svg className="trust-icon" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="3"></circle>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                </svg>
                <span className="trust-label">From Concept<br/>to Completion</span>
              </div>

            </div>

            {/* Bottom Left Mark: Gold Rule + WWW.TECTORA.COM */}
            <div className="enquiry-web-mark">
              <span className="web-mark-line" aria-hidden="true"></span>
              <span className="web-mark-text">WWW.TECTORA.COM</span>
            </div>
          </FadeIn>

        </div>

      </div>
    </main>
  );
}
