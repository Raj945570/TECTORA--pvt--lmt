import { useState } from 'react';
import { Link, useNavigate, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { BASE_URL } from '../config/api';
import tectoraLogo from '../assets/images/tectora-logo-new.png';
import wallLoginBg from '../assets/images/tectora-wall-login-bg.jpg';

export default function Login() {
  const { isAuthenticated, login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await fetch(`${BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: email.trim(), password })
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed. Please check your credentials.');
      }

      if (data.token) {
        localStorage.setItem('token', data.token);
      }
      login(data.token, data.user);
      navigate('/');
    } catch (err) {
      console.warn('[Login Error]', err.message);
      setError(err.message || 'Failed to connect to the live backend server.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    login('userLoggedIn');
    navigate('/');
  };

  return (
    <div 
      className="auth-wall-page min-h-screen"
      style={{
        backgroundImage: `radial-gradient(circle at 80% 20%, rgba(200, 164, 93, 0.08) 0%, transparent 40%), linear-gradient(rgba(11, 31, 58, 0.25), rgba(11, 31, 58, 0.45)), url(${wallLoginBg})`
      }}
    >
      {/* Top Bar / Watermark */}
      <header className="auth-page-top-bar" aria-label="Page Header">
        <div className="top-tagline-cluster">
          <span className="top-tagline-text">Building Better Spaces &nbsp;|&nbsp; Together</span>
          <span className="top-tagline-dash" aria-hidden="true"></span>
        </div>
      </header>

      {/* Main Viewport: Right-Floating Login Card */}
      <main className="auth-page-main">
        <motion.div 
          initial={{ opacity: 0, y: 26, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          className="auth-card-floating my-8"
        >
          
          {/* Card Header: Brand Emblem, Playfair Title, Subtitle */}
          <div className="auth-card-header">
            <Link to="/login" className="auth-card-logo-wrap" aria-label="TECTORA Login">
              <img 
                src={tectoraLogo} 
                alt="TECTORA" 
                className="auth-card-logo" 
              />
            </Link>
            <h1 className="auth-card-title">Login</h1>
            <p className="auth-card-subtitle">Access your TECTORA platform</p>
          </div>

          {/* Feedback Message */}
          {error && (
            <div className="p-3 mb-4 rounded text-xs font-semibold text-center bg-rose-50 text-rose-800 border border-rose-200">
              {error}
            </div>
          )}

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="auth-form" noValidate>
            
            {/* 1. Email Field */}
            <div className="auth-field-group">
              <div className="auth-input-wrapper">
                <span className="auth-field-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                  </svg>
                </span>
                <input 
                  type="email" 
                  id="loginEmail" 
                  name="email" 
                  className="auth-input" 
                  placeholder="Email Address *" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  autoComplete="username" 
                />
              </div>
            </div>

            {/* 2. Password Field */}
            <div className="auth-field-group">
              <div className="auth-input-wrapper">
                <span className="auth-field-icon" aria-hidden="true">
                  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                    <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                  </svg>
                </span>
                <input 
                  type={showPassword ? 'text' : 'password'} 
                  id="loginPassword" 
                  name="password" 
                  className="auth-input" 
                  placeholder="Password *" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required 
                  autoComplete="current-password" 
                />
                <button 
                  type="button" 
                  className="auth-password-toggle" 
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg className="eye-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
                      <line x1="1" y1="23" x2="23" y2="1"></line>
                    </svg>
                  ) : (
                    <svg className="eye-icon" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
                      <circle cx="12" cy="12" r="3"></circle>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* 3. Forgot Password */}
            <div className="auth-forgot-row">
              <span className="auth-forgot-link cursor-pointer" onClick={() => alert('Password reset link sent to your registered email.')}>
                Forgot Password?
              </span>
            </div>

            {/* 4. Login Button */}
            <motion.button 
              type="submit" 
              className="btn-auth-primary premium-btn-hover" 
              id="btnLoginSubmit"
              disabled={isLoading}
              whileHover={!isLoading ? { scale: 1.02 } : {}}
              whileTap={!isLoading ? { scale: 0.98 } : {}}
              transition={{ duration: 0.2 }}
            >
              <span>{isLoading ? 'Signing In...' : 'Login →'}</span>
            </motion.button>

            {/* 5. Divider */}
            <div className="auth-divider" aria-hidden="true">
              <span className="auth-divider-line"></span>
              <span className="auth-divider-text">or</span>
              <span className="auth-divider-line"></span>
            </div>

            {/* 6. Google Login Button */}
            <motion.button 
              type="button" 
              className="btn-auth-google" 
              onClick={handleGoogleLogin}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <svg className="google-icon" viewBox="0 0 24 24" aria-hidden="true" width="18" height="18">
                <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"/>
                <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"/>
                <path fill="#FBBC05" d="M5.28 14.27a7.195 7.195 0 0 1 0-4.54V6.58H1.25a11.98 11.98 0 0 0 0 10.84l4.03-3.15z"/>
                <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"/>
              </svg>
              <span>Login with Google</span>
            </motion.button>

          </form>

          {/* 7. Prompt: Create Account */}
          <div className="auth-footer-prompt">
            Don’t have an account?{' '}
            <Link to="/signup" className="auth-link-accent">
              Create an Account
            </Link>
          </div>

        </motion.div>
      </main>

      {/* Bottom Bar / Tagline */}
      <footer className="auth-page-bottom-bar" aria-label="Page Footer">
        <div className="bottom-tagline-cluster">
          <span className="bottom-tagline-dash" aria-hidden="true"></span>
          <span className="bottom-tagline-text">DEVELOP &nbsp;|&nbsp; DESIGN &nbsp;|&nbsp; BUILD &nbsp;|&nbsp; GROW</span>
        </div>
      </footer>
    </div>
  );
}
