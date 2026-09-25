import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from './motion/MotionVariants';
import heroSkyline from '../assets/images/hero-skyline.jpg';

export default function Hero() {
  return (
    <section 
      className="hero-section-light" 
      id="home"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(250, 250, 248, 0.98) 0%, rgba(250, 250, 248, 0.94) 38%, rgba(250, 250, 248, 0.70) 65%, rgba(250, 250, 248, 0.30) 100%), url(${heroSkyline})`
      }}
    >
      {/* Light overlay for readability */}
      <div className="hero-light-overlay"></div>

      <div className="container">
        <div className="hero-grid-split">
          
          {/* Left Side Content */}
          <div className="hero-text-col">
            <FadeIn direction="down" duration={0.75} delay={0.05}>
              <div className="hero-tagline">
                Digital Infrastructure Platform
              </div>
            </FadeIn>

            {/* Requested Headline */}
            <FadeIn direction="up" duration={0.8} delay={0.15}>
              <h1 className="hero-heading-main">
                Everything You Need<br />to Build — In One Place
              </h1>
            </FadeIn>

            {/* Requested Subtext */}
            <FadeIn direction="up" duration={0.8} delay={0.28}>
              <p className="hero-subtext-main">
                Materials, land, experts, and execution — seamlessly connected<br className="hero-sub-br" />through a unified digital infrastructure platform.
              </p>
            </FadeIn>

            {/* Two Action Buttons */}
            <FadeIn direction="up" duration={0.8} delay={0.4}>
              <div className="hero-actions-row flex flex-col sm:flex-row w-full sm:w-auto gap-3 sm:gap-4">
                <motion.div 
                  whileHover={{ scale: 1.025, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full sm:w-auto"
                >
                  <Link to="/contact" className="hero-btn-primary premium-btn-hover w-full sm:w-auto justify-center" id="btnHeroStartProject">
                    <span>Start Your Project</span>
                    <span className="btn-arrow" aria-hidden="true">&rarr;</span>
                  </Link>
                </motion.div>

                <motion.div 
                  whileHover={{ scale: 1.025, y: -2 }} 
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full sm:w-auto"
                >
                  <Link 
                    to="/services" 
                    className="hero-btn-secondary premium-btn-hover w-full sm:w-auto justify-center" 
                    id="btnHeroExploreMarketplace"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      height: '48px',
                      padding: '0 28px',
                      backgroundColor: 'var(--navy-primary)',
                      color: '#FFFFFF',
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 600,
                      fontSize: '0.95rem',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid rgba(200, 164, 93, 0.4)',
                      textDecoration: 'none',
                      transition: 'var(--transition)'
                    }}
                  >
                    <span>Explore Marketplace</span>
                  </Link>
                </motion.div>
              </div>
            </FadeIn>

            {/* Platform Highlights Row */}
            <FadeIn direction="up" duration={0.85} delay={0.52}>
              <div className="hero-highlights-row">
                <div className="hero-highlight-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                  </svg>
                  <span>Verified Suppliers &amp; Materials</span>
                </div>
                <span className="hero-highlight-divider" aria-hidden="true"></span>
                <div className="hero-highlight-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                    <line x1="9" y1="6" x2="9" y2="6.01"></line>
                    <line x1="15" y1="6" x2="15" y2="6.01"></line>
                    <line x1="9" y1="10" x2="9" y2="10.01"></line>
                    <line x1="15" y1="10" x2="15" y2="10.01"></line>
                    <line x1="9" y1="14" x2="9" y2="14.01"></line>
                    <line x1="15" y1="14" x2="15" y2="14.01"></line>
                    <line x1="9" y1="18" x2="15" y2="18"></line>
                  </svg>
                  <span>Institutional Developers</span>
                </div>
                <span className="hero-highlight-divider" aria-hidden="true"></span>
                <div className="hero-highlight-item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                  </svg>
                  <span>Turnkey EPC Execution</span>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </section>
  );
}
