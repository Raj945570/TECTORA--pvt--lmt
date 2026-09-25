import { Link } from 'react-router-dom';
import { FadeIn } from './motion/MotionVariants';
import tectoraLogo from '../assets/images/tectora-logo-new.png';
import instagramQr from '../assets/images/instagram-qr.png';

export default function Footer() {
  return (
    <>
      <footer className="tectora-footer-light" id="siteFooter">
        <div className="container">
          <FadeIn direction="up" duration={0.8} amount={0.15}>
            <div className="footer-contact-wrapper">
              {/* Left: Brand & Direct Contact */}
              <div className="footer-contact-details">
                <Link to="/" className="footer-brand-wrap" aria-label="TECTORA Home">
                  <img 
                    src={tectoraLogo} 
                    alt="TECTORA" 
                    className="footer-brand-logo" 
                  />
                </Link>
                <p className="footer-brand-tagline">
                  Smart Infrastructure Procurement, Verified Commercial Land &amp; Turnkey Engineering Execution.
                </p>

                <div className="footer-contact-heading">Contact</div>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <div className="footer-contact-icon" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <span className="footer-contact-label">Email:</span>
                    <a href="mailto:tectorapvtltd@gmail.com" className="footer-contact-link">
                      tectorapvtltd@gmail.com
                    </a>
                  </li>

                  <li className="footer-contact-item">
                    <div className="footer-contact-icon" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <span className="footer-contact-label">Phone:</span>
                    <a href="tel:+919250134882" className="footer-contact-link">
                      +91 92501 34882
                    </a>
                  </li>

                  <li className="footer-contact-item">
                    <div className="footer-contact-icon" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </div>
                    <span className="footer-contact-label">Facebook:</span>
                    <a href="https://www.facebook.com/share/1DHtPNFAA8/" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                      https://www.facebook.com/share/1DHtPNFAA8/
                    </a>
                  </li>

                  <li className="footer-contact-item">
                    <div className="footer-contact-icon" aria-hidden="true">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                      </svg>
                    </div>
                    <span className="footer-contact-label">Instagram:</span>
                    <a href="https://www.instagram.com/tectora.official/" target="_blank" rel="noopener noreferrer" className="footer-contact-link">
                      @tectora.official
                    </a>
                  </li>
                </ul>
              </div>

              {/* Right: Instagram QR Code Card */}
              <div className="footer-qr-card">
                <div className="footer-qr-frame">
                  <img 
                    src={instagramQr} 
                    alt="Instagram QR Code for @tectora.official" 
                    className="footer-qr-image" 
                    width="140" 
                    height="140" 
                  />
                </div>
                <div className="footer-qr-meta">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="footer-qr-insta-icon">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                  <span>Scan to Connect</span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Legal Bar */}
          <div className="footer-legal-bar">
            <div>&copy; 2026 TECTORA Technologies Ltd. All rights reserved.</div>
            <div className="footer-legal-tagline">Spaces for a Better Tomorrow</div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/919250134882?text=Hello%20I%20want%20to%20enquire%20about%20your%20services" 
        className="floating-whatsapp-btn" 
        target="_blank" 
        rel="noopener noreferrer" 
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>
    </>
  );
}
