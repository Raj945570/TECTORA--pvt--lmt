import { Link } from 'react-router-dom';
import heroSkyline from '../assets/images/hero-skyline.jpg';

export default function Hero() {
  return (
    <section 
      className="relative w-full min-h-[calc(100vh-78px)] flex items-center bg-[#FAFAF8] bg-cover bg-center bg-no-repeat overflow-visible animate-fade-in"
      style={{
        backgroundImage: `linear-gradient(90deg, rgba(250, 250, 248, 0.96) 0%, rgba(250, 250, 248, 0.88) 42%, rgba(250, 250, 248, 0.45) 70%, rgba(250, 250, 248, 0.15) 100%), url(${heroSkyline})`
      }}
      id="home"
    >
      <div className="container-custom relative z-10 py-16 md:py-24">
        <div className="flex flex-col items-start max-w-[820px]">
          
          {/* Tagline */}
          <div className="inline-flex items-center gap-2.5 text-[0.78rem] font-bold tracking-[0.14em] uppercase text-[#C8A45D] mb-5">
            <span className="w-6 h-[2px] bg-[#C8A45D] inline-block" />
            <span>Digital Infrastructure Platform</span>
          </div>

          {/* Heading: Premium Serif Style */}
          <h1 className="font-serif text-[2.5rem] sm:text-[3.2rem] md:text-[3.8rem] lg:text-[4.1rem] font-bold leading-[1.14] tracking-[-0.02em] text-[#0B1F3A] mb-5">
            Everything You Need<br />to Build — In One Place
          </h1>

          {/* Subheading below */}
          <p className="font-sans text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-[#4A5568] mb-8 max-w-[620px]">
            Materials, land, experts, and execution — seamlessly connected through a unified digital infrastructure platform.
          </p>

          {/* Two Buttons */}
          <div className="flex items-center gap-4 flex-wrap mb-10">
            {/* Button 1: Start Your Project */}
            <Link 
              to="/contact" 
              className="inline-flex items-center justify-center gap-2.5 h-[48px] px-8 bg-[#F5B82E] text-[#111827] font-bold text-[0.95rem] rounded-md shadow-sm hover:bg-[#E5A71D] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Start Your Project</span>
              <span aria-hidden="true" className="text-lg leading-none">&rarr;</span>
            </Link>

            {/* Button 2: Explore Marketplace */}
            <Link 
              to="/services" 
              className="inline-flex items-center justify-center gap-2.5 h-[48px] px-7 bg-[#0B1F3A] text-white font-semibold text-[0.95rem] rounded-md border border-[rgba(200,164,93,0.4)] shadow-sm hover:bg-[#071527] hover:-translate-y-0.5 transition-all duration-200"
            >
              <span>Explore Marketplace</span>
            </Link>
          </div>

          {/* Real Highlight Tags (No Fake Stats) */}
          <div className="flex items-center gap-4 sm:gap-5 flex-wrap pt-2">
            <div className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-[#0B1F3A]">
              <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <span>Verified Suppliers &amp; Materials</span>
            </div>

            <span className="hidden sm:inline-block w-[1px] h-4 bg-[#64748B]/35" aria-hidden="true" />

            <div className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-[#0B1F3A]">
              <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="4" y="2" width="16" height="20" rx="2"></rect>
                <line x1="9" y1="6" x2="9" y2="6.01"></line>
                <line x1="15" y1="6" x2="15" y2="6.01"></line>
                <line x1="9" y1="10" x2="9" y2="10.01"></line>
                <line x1="15" y1="10" x2="15" y2="10.01"></line>
              </svg>
              <span>Institutional Developers</span>
            </div>

            <span className="hidden sm:inline-block w-[1px] h-4 bg-[#64748B]/35" aria-hidden="true" />

            <div className="inline-flex items-center gap-2 text-[0.88rem] font-semibold text-[#0B1F3A]">
              <svg className="w-4 h-4 text-[#D97706]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
              </svg>
              <span>Turnkey EPC Execution</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
