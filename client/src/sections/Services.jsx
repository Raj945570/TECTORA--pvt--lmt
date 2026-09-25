import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FadeIn } from '../components/motion/MotionVariants';

export default function Services() {
  const serviceOfferings = [
    {
      id: 'materials',
      title: 'Raw Materials',
      desc: 'Explore quality construction materials, land, or resources for your next project.',
      link: '/under-development?service=Raw+Materials',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#F4EFE6" />
          <polygon points="28,12 37,17 37,21 28,16" fill="#FFE680" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="19,17 28,12 28,16 19,21" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="19,21 28,26 28,31 19,26" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="28,26 37,21 37,26 28,31" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="11,24 20,20 29,24 20,28" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="11,24 20,28 20,35 11,31" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="20,28 29,24 29,31 20,35" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="27,24 36,20 45,24 36,28" fill="#FFE680" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="27,24 36,28 36,35 27,31" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <polygon points="36,28 45,24 45,31 36,35" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      )
    },
    {
      id: 'commercial',
      title: 'Real Estate',
      desc: 'Discover verified commercial land opportunities in prime locations.',
      link: '/under-development?service=Real+Estate',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#F4EFE6" />
          <ellipse cx="28" cy="40" rx="11" ry="4" fill="#FFE680" stroke="#1E293B" strokeWidth="2"/>
          <path d="M28 12C22.477 12 18 16.477 18 22C18 29 28 38 28 38C28 38 38 29 38 22C38 16.477 33.523 12 28 12Z" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <circle cx="28" cy="21.5" r="4" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8"/>
        </svg>
      )
    },
    {
      id: 'contractors',
      title: 'Experts',
      desc: 'Connect with trusted experts, consultants, and turnkey execution partners.',
      link: '/under-development?service=Experts',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#F4EFE6" />
          <path d="M28 14C23 14 18 17 17 22H39C38 17 33 14 28 14Z" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M14 22H42V25C42 26.1 41.1 27 40 27H16C14.9 27 14 26.1 14 25V22Z" fill="#FFE680" stroke="#1E293B" strokeWidth="2"/>
          <circle cx="28" cy="32" r="5" fill="#FFFFFF" stroke="#1E293B" strokeWidth="2"/>
          <path d="M20 42C20 37.5 23.5 35 28 35C32.5 35 36 37.5 36 42" fill="#F1F5F9" stroke="#1E293B" strokeWidth="2"/>
        </svg>
      )
    },
    {
      id: 'interiors',
      title: 'Interior Design',
      desc: 'Explore signature styles and expert interior design solutions to transform your space.',
      link: '/under-development?service=Interior+Design',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#F4EFE6" />
          <path d="M16 28C16 24 19 22 22 22H34C37 22 40 24 40 28V36H16V28Z" fill="#FFE680" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <rect x="18" y="27" width="20" height="9" rx="2" fill="#FFFFFF" stroke="#1E293B" strokeWidth="1.8"/>
          <path d="M14 27C14 25.5 15 25 16.5 25C18 25 18.5 26 18.5 27V36H14V27Z" fill="#FFD439" stroke="#1E293B" strokeWidth="1.8"/>
          <path d="M37.5 27C37.5 26 38 25 39.5 25C41 25 42 25.5 42 27V36H37.5V27Z" fill="#FFD439" stroke="#1E293B" strokeWidth="1.8"/>
          <line x1="20" y1="36" x2="20" y2="40" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
          <line x1="36" y1="36" x2="36" y2="40" stroke="#1E293B" strokeWidth="2.2" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      id: 'eco',
      title: 'Eco Friendly Solutions',
      desc: 'Explore sustainable and eco-friendly construction alternatives.',
      link: '/eco',
      icon: (
        <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="28" cy="28" r="26" fill="#F4EFE6" />
          <path d="M21 34C18 32 15 28 17 23C20 22 25 24 26 28C26 31 23 34 21 34Z" fill="#C8E6C9" stroke="#1E293B" strokeWidth="1.8" strokeLinejoin="round"/>
          <path d="M19 28C21 28 23 29 24 31" stroke="#1E293B" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M23 37C23 37 25 26 33 17C38 16 41 18 41 20C42 27 34 36 23 37Z" fill="#FFD439" stroke="#1E293B" strokeWidth="2" strokeLinejoin="round"/>
          <path d="M23 37C27 32 32 26 38 19" stroke="#1E293B" strokeWidth="1.8" strokeLinecap="round"/>
          <path d="M23 37C21 40 18 41 15 41" stroke="#1E293B" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      )
    }
  ];

  return (
    <section className="relative py-24 bg-[#FAFAF8] overflow-hidden" id="offerings">
      {/* Background curved shapes matching reference design */}
      <svg 
        className="absolute top-0 right-0 w-[1000px] h-[550px] pointer-events-none opacity-40 z-0" 
        aria-hidden="true" 
        viewBox="0 0 1600 700" 
        fill="none" 
        preserveAspectRatio="none"
      >
        <path d="M750 -40 C980 120, 1240 340, 1650 200 L1650 -40 Z" fill="rgba(245, 230, 190, 0.35)" />
        <path d="M860 -60 C1080 140, 1340 380, 1680 260" stroke="rgba(243, 215, 150, 0.50)" strokeWidth="60" strokeLinecap="round" />
        <path d="M1020 -80 C1220 160, 1420 420, 1720 320" stroke="rgba(245, 225, 170, 0.35)" strokeWidth="90" strokeLinecap="round" />
      </svg>

      <div className="container-custom relative z-10">
        
        {/* Header Row */}
        <FadeIn direction="up" duration={0.8} amount={0.2} className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-[700px]">
            <div className="inline-flex items-center gap-2.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#C8A45D] mb-3">
              <span>CORE OFFERINGS</span>
              <span className="w-5 h-[2px] bg-[#C8A45D]" aria-hidden="true"></span>
            </div>
            <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-bold text-[#0B1F3A] leading-tight mb-4">
              Everything You Need to Build
            </h2>
            <p className="text-[1.05rem] text-[#4A5568] leading-relaxed">
              Designed to streamline supply pipelines, verify quality benchmarks, and connect institutional builders with proven execution partners.
            </p>
          </div>

          <div className="hidden lg:flex items-center">
            <div className="flex items-center gap-3 p-3.5 bg-white/80 backdrop-blur-sm border border-[#E8E8E4] rounded-lg shadow-sm">
              <span className="w-1.5 h-10 bg-[#C8A45D] rounded-full" aria-hidden="true"></span>
              <div className="flex flex-col">
                <span className="text-[0.7rem] font-bold tracking-wider uppercase text-[#0B1F3A]">SMART TOOLS</span>
                <span className="text-[0.68rem] font-medium tracking-wider text-[#64748B]">STRONGER SPACES</span>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* 5 Minimal UltraTech-Style Service Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {serviceOfferings.map((card, idx) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{
                duration: 0.75,
                delay: idx * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="flex"
            >
              <Link
                to={card.link}
                className="group flex flex-col justify-between p-6 bg-white border border-[#E8E8E4] rounded-xl shadow-[0_2px_8px_rgba(11,31,58,0.04)] hover:shadow-[0_16px_36px_rgba(11,31,58,0.1)] hover:border-[#C8A45D]/60 transition-colors duration-200 w-full"
                id={`cardOffering-${card.id}`}
              >
                <div>
                  <div className="mb-5 transform group-hover:scale-105 transition-transform duration-200">
                    {card.icon}
                  </div>
                  <h3 className="font-serif text-[1.25rem] font-bold text-[#0B1F3A] mb-2 group-hover:text-[#C8A45D] transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-[0.88rem] text-[#64748B] leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-8 pt-4 border-t border-[#F3F4F1]">
                  <span className="w-8 h-8 rounded-full bg-[#F4EFE6] text-[#0B1F3A] flex items-center justify-center group-hover:bg-[#C8A45D] group-hover:text-white transition-colors duration-200">
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"></line>
                      <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Bottom Tagline Divider */}
        <FadeIn direction="up" duration={0.8} amount={0.3} className="flex items-center justify-center gap-6 mt-20 pt-8" aria-hidden="true">
          <span className="h-[1px] bg-[#E8E8E4] flex-grow max-w-[200px]" />
          <span className="text-[0.72rem] font-bold tracking-[0.2em] text-[#94A3B8] uppercase">
            BUILD A BETTER TOMORROW
          </span>
          <span className="h-[1px] bg-[#E8E8E4] flex-grow max-w-[200px]" />
        </FadeIn>

      </div>
    </section>
  );
}
