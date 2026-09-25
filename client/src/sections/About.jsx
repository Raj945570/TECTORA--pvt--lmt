import ownerImage from '../assets/images/owner-raj-mishra.png';
import { FadeIn, MotionCard } from '../components/motion/MotionVariants';

export default function About() {
  const pillars = [
    { title: 'Quality First', desc: 'Audited materials & execution' },
    { title: 'Transparency', desc: '100% open accounting' },
    { title: 'Reliability', desc: 'Certified site engineering' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white border-t border-[#E8E8E4]" id="about">
      <div className="container-custom">
        
        {/* Section Header */}
        <FadeIn direction="up" duration={0.8} amount={0.2} className="max-w-[760px] mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#C8A45D] mb-3">
            <span className="w-5 h-[2px] bg-[#C8A45D]" aria-hidden="true"></span>
            <span>Leadership &amp; Vision</span>
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-[2.8rem] font-bold text-[#0B1F3A] leading-tight mb-4">
            About TECTORA
          </h2>
          <p className="text-base sm:text-[1.05rem] text-[#4A5568] leading-relaxed">
            Built on an unwavering commitment to transparency, engineering precision, and long-term asset value in modern infrastructure development.
          </p>
        </FadeIn>

        {/* Split Grid: Founder image on left, text on right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12 items-center">
          
          {/* Left: Founder Image Card (5 cols) */}
          <div className="lg:col-span-5">
            <FadeIn direction="right" duration={0.85} delay={0.15} amount={0.2}>
              <div className="bg-[#FAFAF8] border border-[#E8E8E4] rounded-2xl p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="relative rounded-xl overflow-hidden mb-6 bg-[#E2E4DE] shadow-inner">
                  <img 
                    src={ownerImage} 
                    alt="Shaibya Chitravanshi — Founder & Managing Director, TECTORA" 
                    className="w-full h-auto object-cover max-h-[480px]"
                    loading="eager"
                  />
                  <div className="absolute top-4 right-4 px-3.5 py-1.5 bg-[#0B1F3A]/90 backdrop-blur-sm text-[#F5B82E] text-xs font-semibold rounded-full flex items-center gap-1.5 shadow-md">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                    <span>Founder &amp; MD</span>
                  </div>
                </div>

                <div className="text-center sm:text-left">
                  <h3 className="font-serif text-[1.45rem] font-bold text-[#0B1F3A] mb-1">
                    Shaibya Chitravanshi
                  </h3>
                  <p className="text-xs font-bold text-[#C8A45D] uppercase tracking-wider mb-1">
                    Founder &amp; Managing Director
                  </p>
                  <span className="text-xs text-[#64748B]">
                    TECTORA Infrastructure Technologies
                  </span>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Right: Company Introduction & Vision (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            <FadeIn direction="left" duration={0.85} delay={0.2} amount={0.2}>
              <div className="p-5 sm:p-8 md:p-10 bg-[#FAFAF8] border border-[#E8E8E4] rounded-2xl relative shadow-sm hover:shadow-md transition-shadow">
                <div className="text-[#C8A45D]/40 mb-4" aria-hidden="true">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>

                <h4 className="font-serif text-[1.35rem] font-bold text-[#0B1F3A] mb-4 leading-snug">
                  Modernizing Infrastructure with Transparency and Precision
                </h4>

                <blockquote className="font-serif italic text-[1.12rem] text-[#1A1A1A] leading-relaxed mb-6">
                  “Tectora was built with a vision to simplify and modernize infrastructure development. From verified land to execution and interiors, the goal is to create a transparent and reliable ecosystem where quality, trust, and long-term value come first. Every project reflects our commitment to precision, sustainability, and client satisfaction.”
                </blockquote>

                <div className="pt-5 border-t border-[#E8E8E4]">
                  <div className="font-serif font-bold text-[#0B1F3A] text-base">Shaibya Chitravanshi</div>
                  <div className="text-xs text-[#64748B]">Founder &amp; Managing Director, TECTORA</div>
                </div>
              </div>
            </FadeIn>

            {/* Core Pillars Summary */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {pillars.map((pillar, idx) => (
                <MotionCard 
                  key={pillar.title} 
                  delay={0.3 + idx * 0.12}
                  duration={0.7}
                  hoverScale={1.03}
                  hoverY={-3}
                  className="p-4 bg-white border border-[#E8E8E4] rounded-xl text-center shadow-sm cursor-default"
                >
                  <span className="block font-serif text-lg font-bold text-[#0B1F3A] mb-1">{pillar.title}</span>
                  <span className="text-xs text-[#64748B]">{pillar.desc}</span>
                </MotionCard>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
