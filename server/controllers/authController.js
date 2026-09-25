const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = process.env.JWT_SECRET || 'tectora_secure_jwt_token_secret_key_prod_2026_x89f';
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '7d';

// Helper to generate JWT token
const generateToken = (user) => {
  return jwt.sign(
    {
      id: user._id,
      email: user.email,
      role: user.role
    },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

// Helper to set HTTP-only authentication cookie
const setAuthCookie = (res, token) => {
  res.cookie('tectora_jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
  });
};

// @desc    Register a new user in MongoDB
// @route   POST /api/auth/signup
// @access  Public
exports.signup = async (req, res) => {
  try {
    const { fullName, email, phone, password, role } = req.body;

    // 1. Validation
    if (!fullName || fullName.trim().length < 2) {
      return res.status(400).json({
        success: false,
        field: 'fullName',
        message: 'Please provide a valid full name (minimum 2 characters).'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        field: 'email',
        message: 'Please provide a valid email address.'
      });
    }

    const cleanedPhone = phone ? phone.replace(/\D/g, '') : '';
    if (!phone || cleanedPhone.length < 7) {
      return res.status(400).json({
        success: false,
        field: 'phone',
        message: 'Please provide a valid phone number (minimum 7 digits).'
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        success: false,
        field: 'password',
        message: 'Password must be at least 6 characters long.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 2. Prevent duplicate email registration
    const existingUser = await User.findOne({ email: normalizedEmail });
    if (existingUser) {
      return res.status(409).json({
        success: false,
        field: 'email',
        message: 'An account with this email address already exists.'
      });
    }

    // 3. Create user in MongoDB
    const validRoles = ['client', 'seller', 'consultant'];
    const userRole = validRoles.includes(role) ? role : 'client';

    const user = await User.create({
      fullName: fullName.trim(),
      email: normalizedEmail,
      phone: phone.trim(),
      password,
      role: userRole,
      authProvider: 'local'
    });

    // 4. Generate JWT & set cookie
    const token = generateToken(user);
    setAuthCookie(res, token);

    return res.status(201).json({
      success: true,
      message: 'Account created successfully.',
      token,
      user: user.toSafeObject()
    });
  } catch (error) {
    console.error('[TECTORA Auth] Signup error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during registration. Please try again.'
    });
  }
};

// @desc    Authenticate user with Email or Phone & Password
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Please enter both your email/phone and password.'
      });
    }

    const identifier = email.trim();

    // Find user by Email or Phone
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(identifier);
    let user;

    if (isEmail) {
      user = await User.findOne({ email: identifier.toLowerCase() });
    } else {
      user = await User.findOne({
        $or: [
          { phone: identifier },
          { email: identifier.toLowerCase() }
        ]
      });
    }

    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email/phone or password.'
      });
    }

    // If registered via Google with no local password
    if (user.authProvider === 'google' && !user.password) {
      return res.status(400).json({
        success: false,
        message: 'This account was created using Google. Please click "Login with Google".'
      });
    }

    // Verify password hash
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: 'Invalid email/phone or password.'
      });
    }

    // Generate token & set cookie
    const token = generateToken(user);
    setAuthCookie(res, token);

    return res.status(200).json({
      success: true,
      message: 'Logged in successfully.',
      token,
      user: user.toSafeObject()
    });
  } catch (error) {
    console.error('[TECTORA Auth] Login error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during login. Please try again.'
    });
  }
};

// @desc    Google OAuth Callback handler
// @route   GET /api/auth/google/callback
// @access  Public
exports.googleCallback = (req, res) => {
  if (!req.user) {
    return res.redirect('/login?error=no_user');
  }
  const token = generateToken(req.user);
  setAuthCookie(res, token);
  return res.redirect('/');
};

// @desc    Full-stack Google Login & Signup Handler
// @route   POST /api/auth/google
// @access  Public
exports.googleAuth = async (req, res) => {
  try {
    const { email, fullName, googleId, avatar, role } = req.body;

    if (!email) {
      return res.status(400).json({
        success: false,
        message: 'Valid Google email is required.'
      });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // 1. Check if user already exists in MongoDB
    let user = await User.findOne({
      $or: [
        ...(googleId ? [{ googleId }] : []),
        { email: normalizedEmail }
      ]
    });

    if (user) {
      let modified = false;
      if (!user.googleId && googleId) {
        user.googleId = googleId;
        modified = true;
      }
      if (!user.avatar && avatar) {
        user.avatar = avatar;
        modified = true;
      }
      if (modified) {
        await user.save();
      }
    } else {
      const validRoles = ['client', 'seller', 'consultant'];
      const userRole = validRoles.includes(role) ? role : 'client';

      user = await User.create({
        fullName: fullName ? fullName.trim() : normalizedEmail.split('@')[0],
        email: normalizedEmail,
        phone: req.body.phone ? req.body.phone.trim() : '',
        googleId: googleId || `google_${Date.now()}`,
        avatar: avatar || '',
        role: userRole,
        authProvider: 'google'
      });
    }

    const token = generateToken(user);
    setAuthCookie(res, token);

    return res.status(200).json({
      success: true,
      message: 'Authenticated with Google successfully.',
      token,
      user: user.toSafeObject()
    });
  } catch (error) {
    console.error('[TECTORA Auth] Google authentication error:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error during Google authentication.'
    });
  }
};

// @desc    Clear auth cookie & session
// @route   POST /api/auth/logout
// @access  Public
exports.logout = (req, res) => {
  res.clearCookie('tectora_jwt');
  return res.status(200).json({
    success: true,
    message: 'Logged out successfully.'
  });
};

// @desc    Get currently authenticated user
// @route   GET /api/auth/me
// @access  Private (JWT)
exports.getMe = (req, res) => {
  return res.status(200).json({
    success: true,
    user: req.user.toSafeObject()
  });
};
