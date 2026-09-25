require('dotenv').config();
const path = require('path');
const fs = require('fs');
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const connectDB = require('./config/db');
const passport = require('./config/passport');
const authRoutes = require('./routes/auth');
const enquiryRoutes = require('./routes/enquiry');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB Database
connectDB();

// Core Middleware
app.use(cors({
  origin: true,
  credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

// 1. Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'ok',
    service: 'TECTORA MERN REST API',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString()
  });
});

// 2. REST API Routes
app.use('/api/auth', authRoutes);
app.use('/api/enquiry', enquiryRoutes);

// 3. Production Static Serving (When built client exists)
const CLIENT_DIST = path.join(__dirname, '..', 'client', 'dist');
if (process.env.NODE_ENV === 'production' && fs.existsSync(CLIENT_DIST)) {
  app.use(express.static(CLIENT_DIST));
  app.get('*', (req, res) => {
    res.sendFile(path.join(CLIENT_DIST, 'index.html'));
  });
}

// 4. API 404 Handler
app.use('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    message: `API endpoint '${req.originalUrl}' does not exist.`
  });
});

// 5. Global Error Handler
app.use((err, req, res, next) => {
  console.error('[TECTORA Server Error]', err.stack || err.message);
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error'
  });
});

// Start Server
app.listen(PORT, () => {
  console.log(`[TECTORA] REST API Server running on port ${PORT}`);
  console.log(`[TECTORA] API Health: http://localhost:${PORT}/api/health`);
  console.log(`[TECTORA] Auth Endpoints: /api/auth/login, /api/auth/signup, /api/auth/google`);
  console.log(`[TECTORA] Enquiry Endpoints: /api/enquiry`);
});

module.exports = app;
