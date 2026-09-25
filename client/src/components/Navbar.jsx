import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import tectoraLogo from '../assets/images/tectora-logo-new.png';

export default function Navbar() {
  const { isAuthenticated, logout } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleEnquiryClick = (e) => {
    if (e && e.preventDefault) e.preventDefault();
    setMobileMenuOpen(false);
    if (location.pathname === '/enquiry') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      navigate('/enquiry');
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Digital Services', path: '/digital-services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (link) => {
    if (link.path === '/') {
      return location.pathname === '/' && (!location.hash || location.hash === '#home');
    }
    return location.pathname === link.path;
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className={`tectora-header ${isScrolled ? 'is-scrolled' : ''}`} id="tectoraHeader">
      <div className="nav-container">
        
        {/* Left: Logo (TECTORA) */}
        <Link to="/" className="brand-logo-wrap" aria-label="TECTORA Home">
          <img 
            src={tectoraLogo} 
            alt="TECTORA" 
            className="brand-actual-logo" 
          />
        </Link>

        {/* Center/Right: Menu */}
        <nav className="nav-center" id="navCenter" aria-label="Main Navigation">
          <ul className="nav-links-list">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <li key={link.name} className="nav-link-item">
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`nav-link ${active ? 'is-active' : ''}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Side: CTA & Mobile Drawer Toggle */}
        <div className="nav-right">
          {/* Auth Link: "Sign Out" if logged in, "Login" if not */}
          {isAuthenticated ? (
            <button 
              type="button" 
              onClick={logout} 
              className="nav-auth-link"
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px 10px' }}
            >
              Sign Out
            </button>
          ) : (
            <Link to="/login" className="nav-auth-link">
              Login
            </Link>
          )}

          {/* Button: "Enquiry Now" - Navigates directly to dedicated Enquiry page */}
          <Link 
            to="/enquiry" 
            onClick={() => setMobileMenuOpen(false)}
            className="btn-quote" 
            id="btnNavQuote"
          >
            Enquiry Now
          </Link>

          {/* Mobile Drawer Toggle */}
          <button 
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle" 
            id="navMobileToggle" 
            aria-label="Toggle navigation menu" 
            aria-expanded={mobileMenuOpen}
          >
            <span className={`block transition-all duration-200 ${mobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block transition-all duration-200 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block transition-all duration-200 ${mobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-panel p-5 bg-white border-b border-[#E8E8E4] shadow-lg flex flex-col gap-3 lg:hidden">
          <ul className="flex flex-col gap-3 list-none m-0 p-0">
            {navLinks.map((link) => {
              const active = isActive(link);
              return (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    onClick={handleLinkClick}
                    className={`block py-2 text-base font-medium ${active ? 'text-[#C8A45D] font-semibold' : 'text-[#4A5568]'}`}
                  >
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="pt-3 border-t border-[#E8E8E4] flex flex-col gap-2">
            {isAuthenticated ? (
              <button 
                type="button" 
                onClick={() => {
                  setMobileMenuOpen(false);
                  logout();
                }}
                className="nav-auth-link block w-full py-2 text-center text-sm font-semibold text-[#0B1F3A]"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Sign Out
              </button>
            ) : (
              <Link 
                to="/login" 
                onClick={() => setMobileMenuOpen(false)}
                className="nav-auth-link block py-2 text-center text-sm font-semibold text-[#0B1F3A]"
              >
                Login
              </Link>
            )}
            <Link 
              to="/enquiry" 
              onClick={() => setMobileMenuOpen(false)}
              className="btn-quote w-full text-center block"
            >
              Enquiry Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
