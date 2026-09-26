import { useState } from 'react';
import { FadeIn, MotionButton } from '../components/motion/MotionVariants';
import { BASE_URL, getAuthHeaders } from '../config/api';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.projectType && formData.message) {
      setSubmitted(true);

      try {
        await fetch(`${BASE_URL}/api/enquiry`, {
          method: 'POST',
          headers: getAuthHeaders(),
          body: JSON.stringify({
            fullName: formData.name.trim(),
            email: formData.email.trim(),
            phone: formData.phone ? formData.phone.trim() : '9876543210',
            projectType: formData.projectType,
            message: formData.message.trim(),
            source: 'Homepage Contact Section'
          })
        });
      } catch (err) {
        console.warn('Contact inquiry sync notice:', err.message);
      }

      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: '', email: '', phone: '', projectType: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section className="py-24 bg-[#F8F8F5] border-t border-[#E8E8E4]" id="contact">
      <div className="container-custom">
        
        {/* Section Header */}
        <FadeIn direction="up" duration={0.8} amount={0.2} className="max-w-[760px] mb-16">
          <div className="inline-flex items-center gap-2.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#C8A45D] mb-3">
            <span className="w-5 h-[2px] bg-[#C8A45D]" aria-hidden="true"></span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-bold text-[#0B1F3A] leading-tight mb-4">
            Connect with TECTORA
          </h2>
          <p className="text-[1.05rem] text-[#4A5568] leading-relaxed">
            Contact our team to discuss procurement volumes, commercial opportunities, or platform onboarding.
          </p>
        </FadeIn>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left: Contact Info & Blueprint Card (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            <FadeIn direction="right" duration={0.8} delay={0.15} amount={0.2}>
              <div className="flex flex-col gap-6 p-8 bg-white border border-[#E8E8E4] rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div>
                  <h4 className="font-serif text-[1.1rem] font-bold text-[#0B1F3A] mb-1">Headquarters</h4>
                  <p className="text-sm text-[#4A5568]">Cyber City Corporate Hub, Sector 43</p>
                </div>

                <div className="pt-4 border-t border-[#F3F4F1]">
                  <h4 className="font-serif text-[1.1rem] font-bold text-[#0B1F3A] mb-1">Direct Telephone</h4>
                  <p className="text-sm text-[#4A5568]">
                    <a href="tel:+919250134882" className="hover:text-[#C8A45D] transition-colors">+91 92501 34882</a>
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3F4F1]">
                  <h4 className="font-serif text-[1.1rem] font-bold text-[#0B1F3A] mb-1">Executive Email</h4>
                  <p className="text-sm text-[#4A5568]">
                    <a href="mailto:tectorapvtltd@gmail.com" className="hover:text-[#C8A45D] transition-colors">tectorapvtltd@gmail.com</a>
                  </p>
                </div>

                <div className="pt-4 border-t border-[#F3F4F1]">
                  <h4 className="font-serif text-[1.1rem] font-bold text-[#0B1F3A] mb-1">Platform Operational Hours</h4>
                  <p className="text-sm text-[#4A5568]">Monday &ndash; Saturday: 08:30 &ndash; 19:30 IST</p>
                </div>
              </div>
            </FadeIn>

            {/* Vector Architectural Card */}
            <FadeIn direction="right" duration={0.8} delay={0.25} amount={0.2}>
              <div className="p-6 bg-[#0B1F3A] text-white rounded-xl shadow-md flex items-center gap-4 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 text-[#F5B82E]">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#C8A45D]">Operational Reach</span>
                  <span className="block text-sm font-medium text-white">National Procurement Grid: 14 States Connected</span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <FadeIn direction="left" duration={0.8} delay={0.2} amount={0.2}>
              <div className="bg-white border border-[#E8E8E4] rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="font-serif text-[1.4rem] font-bold text-[#0B1F3A] mb-6">
                  Initiate Enterprise Engagement
                </h3>

                {submitted ? (
                  <div className="p-6 bg-[#F4EFE6] border border-[#C8A45D] rounded-lg text-center">
                    <div className="w-12 h-12 rounded-full bg-[#0B1F3A] text-[#F5B82E] flex items-center justify-center mx-auto mb-3">
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <h4 className="font-serif text-lg font-bold text-[#0B1F3A] mb-1">Message Received</h4>
                    <p className="text-sm text-[#4A5568]">
                      Thank you for contacting TECTORA. Our enterprise engagement desk will review your inquiry and connect with you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    {/* 1. Full Name */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0B1F3A]" htmlFor="cntName">Full Name *</label>
                      <input 
                        type="text" 
                        id="cntName" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="e.g. Vikramaditya Singhania"
                        className="h-11 px-3.5 rounded-md bg-[#FAFAF8] border border-[#E8E8E4] text-sm text-[#1A1A1A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8A45D] focus:bg-white transition-all"
                      />
                    </div>

                    {/* 2. Email */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0B1F3A]" htmlFor="cntEmail">Corporate Email *</label>
                      <input 
                        type="email" 
                        id="cntEmail" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="name@enterprise.com"
                        className="h-11 px-3.5 rounded-md bg-[#FAFAF8] border border-[#E8E8E4] text-sm text-[#1A1A1A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8A45D] focus:bg-white transition-all"
                      />
                    </div>

                    {/* 3. Phone */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0B1F3A]" htmlFor="cntPhone">Phone Number</label>
                      <input 
                        type="tel" 
                        id="cntPhone" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+91 98100 00000"
                        className="h-11 px-3.5 rounded-md bg-[#FAFAF8] border border-[#E8E8E4] text-sm text-[#1A1A1A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8A45D] focus:bg-white transition-all"
                      />
                    </div>

                    {/* 4. Project Type */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0B1F3A]" htmlFor="cntProjectType">Project Type *</label>
                      <select 
                        id="cntProjectType" 
                        required 
                        value={formData.projectType}
                        onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                        className="h-11 px-3.5 rounded-md bg-[#FAFAF8] border border-[#E8E8E4] text-sm text-[#1A1A1A] focus:outline-none focus:border-[#C8A45D] focus:bg-white transition-all"
                      >
                        <option value="" disabled>Select Project Type</option>
                        <option value="commercial">Commercial Development</option>
                        <option value="infrastructure">Infrastructure &amp; Civil Works</option>
                        <option value="procurement">Bulk Material Procurement</option>
                        <option value="contractor">EPC Contracting &amp; Tenders</option>
                        <option value="engineering">Engineering Consultation</option>
                      </select>
                    </div>

                    {/* 5. Message */}
                    <div className="flex flex-col gap-1.5">
                      <label className="text-xs font-semibold text-[#0B1F3A]" htmlFor="cntMsg">Message *</label>
                      <textarea 
                        id="cntMsg" 
                        required 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="How can our team assist you?"
                        className="p-3.5 rounded-md bg-[#FAFAF8] border border-[#E8E8E4] text-sm text-[#1A1A1A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8A45D] focus:bg-white transition-all resize-y"
                      ></textarea>
                    </div>

                    <MotionButton 
                      type="submit" 
                      className="w-full h-12 bg-[#0B1F3A] text-white font-semibold text-sm rounded-md border border-[rgba(200,164,93,0.4)] shadow-sm hover:bg-[#071527] hover:shadow-md transition-all mt-2 premium-btn-hover"
                    >
                      Send Message
                    </MotionButton>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
}
