const express = require('express');
const router = express.Router();
const passport = require('../config/passport');
const { protectApi } = require('../middleware/authMiddleware');
const {
  signup,
  login,
  googleCallback,
  googleAuth,
  logout,
  getMe
} = require('../controllers/authController');

// 1. Local Signup & Login
router.post('/signup', signup);
router.post('/login', login);

// 2. Google OAuth
router.get('/google', (req, res, next) => {
  if (process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET) {
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      session: false
    })(req, res, next);
  } else {
    res.redirect('/login?google_simulated=true');
  }
});

router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/login?error=google_failed', session: false }),
  googleCallback
);

router.post('/google', googleAuth);

// 3. Logout & Profile
router.post('/logout', logout);
router.get('/me', protectApi, getMe);

module.exports = router;
