const express = require('express');
const router = express.Router();
const { createEnquiry, getEnquiries } = require('../controllers/enquiryController');

// @route   POST /api/enquiry
// @desc    Submit new enquiry
router.post('/', createEnquiry);

// @route   GET /api/enquiry
// @desc    Get all enquiries
router.get('/', getEnquiries);

module.exports = router;
