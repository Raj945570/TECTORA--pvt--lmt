const mongoose = require('mongoose');

const enquirySchema = new mongoose.Schema(
  {
    inquiryId: {
      type: String,
      trim: true,
      default: function () {
        return `TEC-${Date.now().toString(36).toUpperCase()}-${Math.floor(1000 + Math.random() * 9000)}`;
      }
    },
    fullName: {
      type: String,
      required: [true, 'Full name is required'],
      trim: true,
      minlength: [2, 'Full name must be at least 2 characters']
    },
    email: {
      type: String,
      required: [true, 'Email address is required'],
      lowercase: true,
      trim: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        'Please enter a valid email address'
      ]
    },
    phone: {
      type: String,
      required: [true, 'Phone number is required'],
      trim: true,
      validate: {
        validator: function (val) {
          const digits = val.replace(/\D/g, '');
          // Allow 10 digits, or 11/12 if starts with 0 or 91 country code
          if (digits.length === 10) return true;
          if (digits.length === 11 && digits.startsWith('0')) return true;
          if (digits.length === 12 && digits.startsWith('91')) return true;
          return false;
        },
        message: 'Phone number must be a valid 10-digit number'
      }
    },
    projectType: {
      type: String,
      required: [true, 'Project type is required'],
      trim: true
    },
    location: {
      type: String,
      trim: true,
      default: 'Not Specified'
    },
    message: {
      type: String,
      required: [true, 'Message / Requirements are required'],
      trim: true
    },
    source: {
      type: String,
      trim: true,
      default: 'Website Enquiry'
    },
    status: {
      type: String,
      enum: ['new', 'in_review', 'contacted', 'closed'],
      default: 'new'
    }
  },
  {
    timestamps: true
  }
);

// Explicitly bind to 'enquiries' collection as requested
const Enquiry = mongoose.model('Enquiry', enquirySchema, 'enquiries');

module.exports = Enquiry;
