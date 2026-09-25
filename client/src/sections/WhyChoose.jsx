import { FadeIn, MotionCard } from '../components/motion/MotionVariants';

export default function WhyChoose() {
  const valuePropositions = [
    {
      num: '01',
      title: 'Certified & Experienced Team of Experts',
      desc: 'Licensed civil engineers, certified architects, and senior site supervisors ensure precision engineering and adherence to rigorous codes.',
      pill: 'Licensed Professionals',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
        </svg>
      )
    },
    {
      num: '02',
      title: 'Best Quality Materials',
      desc: 'Procured directly from audited Tier-1 manufacturers with strict lab certification for enduring structural strength and premium finish.',
      pill: 'Grade-A Certified',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2"></polygon>
          <polyline points="2 17 12 22 22 17"></polyline>
          <polyline points="2 12 12 17 22 12"></polyline>
        </svg>
      )
    },
    {
      num: '03',
      title: 'Daily/Weekly Project Updates',
      desc: 'Real-time digital logs detailing material consumption, on-site labor metrics, and high-definition photo/video milestone reports.',
      pill: 'HD Video & Photo Logs',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
          <circle cx="12" cy="10" r="3"></circle>
        </svg>
      )
    },
    {
      num: '04',
      title: 'Complete Transparency Between Client & Company',
      desc: 'Itemized bills of quantities, clear contractual timelines, and open financial tracking with zero hidden charges or surprises.',
      pill: '100% Open Accounting',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      )
    },
    {
      num: '05',
      title: '1 Year Free Maintenance After Project Completion',
      desc: 'Comprehensive 365-day warranty package with scheduled inspections, preventative servicing, and priority on-call support.',
      pill: '365 Days Warranty',
      icon: (
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          <polyline points="9 12 11 14 15 10"></polyline>
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-[#FAFAF8]" id="why-choose">
      <div className="container-custom">
        
        {/* Section Header */}
        <FadeIn direction="up" duration={0.8} amount={0.2} className="max-w-[760px] mb-16">
          <div className="inline-flex items-center gap-2.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#C8A45D] mb-3">
            <span className="w-5 h-[2px] bg-[#C8A45D]" aria-hidden="true"></span>
            <span>What TECTORA Offers</span>
          </div>
          <h2 className="font-serif text-[2.2rem] sm:text-[2.8rem] font-bold text-[#0B1F3A] leading-tight mb-4">
            Why Choose TECTORA
          </h2>
          <p className="text-[1.05rem] text-[#4A5568] leading-relaxed">
            Built for clients who prioritize craftsmanship, uncompromising material integrity, transparent operations, and long-term asset value.
          </p>
        </FadeIn>

        {/* 5 Key Value Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {valuePropositions.map((item, idx) => (
            <MotionCard
              key={item.num}
              delay={idx * 0.1}
              duration={0.75}
              hoverScale={1.03}
              hoverY={-4}
              className={`flex flex-col justify-between p-8 bg-white border border-[#E8E8E4] rounded-xl shadow-[0_2px_8px_rgba(11,31,58,0.04)] hover:shadow-[0_16px_36px_rgba(11,31,58,0.1)] hover:border-[#C8A45D]/60 transition-colors duration-200 cursor-default ${
                idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-[#F4EFE6] text-[#C8A45D] flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="font-serif text-[1.4rem] font-bold text-[#94A3B8]/50">
                    {item.num}
                  </span>
                </div>

                <h3 className="font-serif text-[1.25rem] font-bold text-[#0B1F3A] leading-snug mb-3">
                  {item.title}
                </h3>
                <p className="text-[0.92rem] text-[#64748B] leading-relaxed mb-6">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-[#F3F4F1]">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAFAF8] border border-[#E8E8E4] rounded-full text-xs font-semibold text-[#0B1F3A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C8A45D]" aria-hidden="true"></span>
                  <span>{item.pill}</span>
                </div>
              </div>
            </MotionCard>
          ))}
        </div>

      </div>
    </section>
  );
}
