import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FadeIn } from '../components/motion/MotionVariants';
import webStaticImg from '../assets/images/digital-services/web-static.jpg';
import appCrossplatformImg from '../assets/images/digital-services/app-crossplatform.jpg';
import uiuxDesignImg from '../assets/images/digital-services/uiux-design.jpg';
import marketingAnalyticsImg from '../assets/images/digital-services/marketing-analytics.jpg';
import socialContentImg from '../assets/images/digital-services/social-content.jpg';

export default function DigitalServicesSection() {

  const digitalServices = [
    {
      id: 'website-development',
      title: 'Website Development',
      desc: 'High-performance, secure web applications engineered for speed, conversion, and architectural scale.',
      img: webStaticImg
    },
    {
      id: 'app-development',
      title: 'App Design & Development',
      desc: 'Native and cross-platform mobile experiences combining fluid animations with resilient cloud backends.',
      img: appCrossplatformImg
    },
    {
      id: 'uiux-design',
      title: 'UI/UX Design',
      desc: 'World-class digital interface design, design systems, and user journeys crafted for clarity and scale.',
      img: uiuxDesignImg
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing & Growth',
      desc: 'High-intent customer acquisition, search authority, and data-driven performance campaigns.',
      img: marketingAnalyticsImg
    },
    {
      id: 'content-social',
      title: 'Content & Social Media',
      desc: 'Strategic brand narratives, multimedia production, and social channel management that build authority.',
      img: socialContentImg
    }
  ];

  return (
    <section 
      className="digital-services-premium-section" 
      id="digitalServicesSection"
    >
      <div className="digital-services-container">
        
        {/* Minimal Premium Header above Cards */}
        <FadeIn direction="down" duration={0.8} amount={0.2} className="digital-header-minimal">
          <div className="digital-badge-kicker">
            TECTORA DIGITAL SERVICES
          </div>
          <h1 className="digital-clean-heading">
            Our Digital Services
          </h1>
          <p className="digital-clean-subtitle">
            We help businesses grow with modern web, app, and digital solutions.
          </p>
          <div className="digital-clean-divider" aria-hidden="true" />
        </FadeIn>

        {/* 5 Cards Grid: Centered flex layout, no empty gaps */}
        <div className="digital-cards-grid">
          {digitalServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.09,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="digital-service-card"
              id={`cardDigital-${service.id}`}
            >
              {/* Image (top) */}
              <div className="digital-card-image-wrap">
                <img 
                  src={service.img} 
                  alt={service.title} 
                  className="digital-card-img" 
                  loading="lazy" 
                />
              </div>

              {/* Title & Short description (max 2 lines) */}
              <div className="digital-card-body">
                <h3 className="digital-card-title">
                  {service.title}
                </h3>
                <p className="digital-card-desc">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Full-Width CTA Button: Navigates to dedicated Enquiry Page */}
        <FadeIn direction="up" duration={0.8} amount={0.2} className="digital-bottom-cta-wrap">
          <motion.div
            whileHover={{ scale: 1.025, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link 
              to="/enquiry"
              className="digital-btn-full-cta premium-btn-hover"
              id="btnStartDigitalJourney"
            >
              <span>Start Your Digital Journey</span>
              <span className="digital-cta-btn-arrow" aria-hidden="true">&rarr;</span>
            </Link>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}
