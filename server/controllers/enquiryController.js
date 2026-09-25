const Enquiry = require('../models/Enquiry');

/**
 * @desc    Submit a new enquiry
 * @route   POST /api/enquiry
 * @access  Public
 */
exports.createEnquiry = async (req, res) => {
  try {
    const { fullName, email, phone, projectType, location, message, source, inquiryId } = req.body;

    // 1. Validate required fields
    if (!fullName || !fullName.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Full Name is required'
      });
    }

    if (!email || !email.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Email Address is required'
      });
    }

    // 2. Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // 3. Validate phone number (10 digits)
    if (!phone || !phone.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Phone Number is required'
      });
    }

    const digits = phone.replace(/\D/g, '');
    let isValidPhone = false;
    let standardizedPhone = digits;

    if (digits.length === 10) {
      isValidPhone = true;
    } else if (digits.length === 11 && digits.startsWith('0')) {
      isValidPhone = true;
      standardizedPhone = digits.slice(1);
    } else if (digits.length === 12 && digits.startsWith('91')) {
      isValidPhone = true;
      standardizedPhone = digits.slice(2);
    }

    if (!isValidPhone || standardizedPhone.length !== 10) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid 10-digit phone number'
      });
    }

    // 4. Validate project type & message
    if (!projectType || !projectType.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Project Type is required'
      });
    }

    if (!message || !message.trim()) {
      return res.status(400).json({
        success: false,
        message: 'Message / Requirements are required'
      });
    }

    // 5. Create new enquiry in the database
    const enquiry = await Enquiry.create({
      inquiryId: inquiryId || undefined,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: standardizedPhone,
      projectType: projectType.trim(),
      location: (location && location.trim()) || 'Not Specified',
      message: message.trim(),
      source: source || 'Website Enquiry',
      status: 'new'
    });

    return res.status(201).json({
      success: true,
      message: 'Your inquiry has been successfully registered.',
      data: {
        id: enquiry._id,
        inquiryId: enquiry.inquiryId,
        fullName: enquiry.fullName,
        email: enquiry.email,
        phone: enquiry.phone,
        projectType: enquiry.projectType,
        location: enquiry.location,
        createdAt: enquiry.createdAt
      }
    });

  } catch (error) {
    console.error('[TECTORA] Error creating enquiry:', error);

    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(val => val.message);
      return res.status(400).json({
        success: false,
        message: messages.join(', ')
      });
    }

    return res.status(500).json({
      success: false,
      message: 'Server error while submitting inquiry. Please try again.'
    });
  }
};

/**
 * @desc    Get all enquiries
 * @route   GET /api/enquiry
 * @access  Private / Admin
 */
exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: enquiries.length,
      data: enquiries
    });
  } catch (error) {
    console.error('[TECTORA] Error fetching enquiries:', error);
    return res.status(500).json({
      success: false,
      message: 'Server error fetching enquiries'
    });
  }
};
