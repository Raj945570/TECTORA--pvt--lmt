import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FadeIn, MotionCard } from '../components/motion/MotionVariants';
import Contact from '../sections/Contact';

export default function EcoSolutions() {
  const [activeTab, setActiveTab] = useState('All Solutions');
  const [searchTerm, setSearchTerm] = useState('');

  const filterTabs = [
    'All Solutions',
    'Solar Rooftop EPC',
    'Low-Carbon Concrete',
    'Smart IBMS Energy',
    'Water Circularity'
  ];

  const ecoProviders = [
    {
      id: 'sungrid',
      name: 'SunGrid Commercial Solar EPC',
      location: 'Renewable Utility & Rooftop Division',
      category: 'Solar Rooftop EPC',
      badge: '✓ Tier-1 EPC',
      desc: 'Turnkey engineering for commercial rooftop solar, bi-facial monocrystalline panels, grid-tie central string inverters, and net metering execution.',
      tags: ['Tier-1 Bifacial', 'CAPEX / OPEX RESCO', '25-Yr Performance'],
      specs: [
        { label: 'Commissioned Capacity', val: '120+ MW' },
        { label: 'Estimated Tariff', val: '₹3.60 / kWh' }
      ]
    },
    {
      id: 'ecocrete',
      name: 'EcoCrete Geopolymer Solutions',
      location: 'Low-Carbon Structural Plant Hub',
      category: 'Low-Carbon Concrete',
      badge: '✓ EPD Certified',
      desc: 'Zero-clinker and slag-activated geopolymer concrete reducing embodied carbon by up to 60% compared to standard Portland mixes.',
      tags: ['60% Low Carbon', 'IS 16714 Compliant', 'Structural M35-M50'],
      specs: [
        { label: 'Embodied Carbon', val: '138 kg CO₂/m³' },
        { label: 'Supply Benchmark', val: '₹4,450 / m³' }
      ]
    },
    {
      id: 'enersense',
      name: 'EnerSense Smart IBMS Dynamics',
      location: 'AI Energy Management Enclave',
      category: 'Smart IBMS Energy',
      badge: '✓ BEE 5-Star',
      desc: 'Cloud IoT building management system providing dynamic HVAC thermal control, daylight-harvesting occupancy sensors, and real-time ESG metrics.',
      tags: ['AI Chiller Control', 'IoT Sub-Metering', 'ESG Reporting'],
      specs: [
        { label: 'Energy Reduction', val: '22% - 31% Verified' },
        { label: 'Payback Period', val: '14 Months Avg' }
      ]
    },
    {
      id: 'terracycle',
      name: 'TerraCycle Water & Zero Discharge',
      location: 'Environmental Engineering Facility',
      category: 'Water Circularity',
      badge: '✓ ZLD Audited',
      desc: 'Decentralized biological sewage treatment plants (MBBR/MBR), rainwater retention aquifer recharge pits, and dual-plumbing reuse frameworks.',
      tags: ['MBR Technology', 'Zero Liquid Discharge', 'Rain Recharge Pits'],
      specs: [
        { label: 'Plant Scale', val: '50 KLD – 2 MLD' },
        { label: 'Water Recycled', val: '94% Reusable' }
      ]
    }
  ];

  const filteredProviders = ecoProviders.filter((provider) => {
    const matchesTab = activeTab === 'All Solutions' || provider.category === activeTab;
    const matchesSearch = 
      provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.desc.toLowerCase().includes(searchTerm.toLowerCase()) ||
      provider.tags.some(t => t.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <main className="bg-[#FAFAF8] min-h-screen">
      {/* Hero Section */}
      <section className="bg-white border-b border-[#E8E8E4] py-16 md:py-20">
        <div className="container-custom">
          <FadeIn direction="up" duration={0.8} amount={0.2}>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#64748B] mb-3">
              <Link to="/" className="hover:text-[#C8A45D] transition-colors">Platform</Link>
              <span>/</span>
              <span className="text-[#0B1F3A]">Eco Friendly Solutions</span>
            </div>
            
            <h1 className="font-serif text-[2.4rem] sm:text-[3.2rem] font-bold text-[#0B1F3A] mb-4">
              Eco Friendly &amp; Sustainable Solutions
            </h1>
            
            <p className="text-[1.08rem] text-[#4A5568] max-w-[780px] leading-relaxed mb-8">
              Commercial solar rooftop EPC, certified low-carbon building materials, and smart energy optimization systems built for net-zero infrastructure.
            </p>

            <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4EFE6] border border-[#C8A45D]/40 rounded-md text-xs font-bold text-[#0B1F3A]">
                <svg className="w-4 h-4 text-[#C8A45D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>IGBC &amp; LEED Accredited</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4EFE6] border border-[#C8A45D]/40 rounded-md text-xs font-bold text-[#0B1F3A]">
                <svg className="w-4 h-4 text-[#C8A45D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Tier-1 Solar Photovoltaic</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F4EFE6] border border-[#C8A45D]/40 rounded-md text-xs font-bold text-[#0B1F3A]">
                <svg className="w-4 h-4 text-[#C8A45D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>Certified Carbon Offsets</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Filter and Search Controls */}
      <section className="py-14">
        <div className="container-custom">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            {/* Filter Tabs */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
              {filterTabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition-all duration-200 ${
                    activeTab === tab
                      ? 'bg-[#0B1F3A] text-white shadow-sm'
                      : 'bg-white text-[#4A5568] border border-[#E8E8E4] hover:border-[#C8A45D] hover:text-[#0B1F3A]'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Search Box */}
            <div className="relative flex items-center min-w-[260px]">
              <svg className="absolute left-3 w-4 h-4 text-[#64748B]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search solar, concrete, ratings..."
                className="w-full h-10 pl-9 pr-3 rounded-lg bg-white border border-[#E8E8E4] text-xs text-[#1A1A1A] placeholder-[#94A3B8] focus:outline-none focus:border-[#C8A45D]"
              />
            </div>
          </div>

          {/* Eco Listing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProviders.map((provider, idx) => (
              <MotionCard
                key={provider.id}
                delay={idx * 0.1}
                duration={0.75}
                hoverScale={1.03}
                hoverY={-4}
                className="p-8 bg-white border border-[#E8E8E4] rounded-xl shadow-sm hover:shadow-md hover:border-[#C8A45D]/60 transition-colors flex flex-col justify-between cursor-default"
              >
                <div>
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="font-serif text-[1.3rem] font-bold text-[#0B1F3A] mb-1">
                        {provider.name}
                      </h3>
                      <div className="flex items-center gap-1.5 text-xs text-[#64748B]">
                        <svg className="w-3.5 h-3.5 text-[#C8A45D]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        <span>{provider.location}</span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 bg-[#F4EFE6] text-[#0B1F3A] text-xs font-bold rounded-md whitespace-nowrap">
                      {provider.badge}
                    </span>
                  </div>

                  <p className="text-sm text-[#4A5568] leading-relaxed mb-6">
                    {provider.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {provider.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-[#FAFAF8] border border-[#E8E8E4] text-xs font-medium text-[#0B1F3A] rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="grid grid-cols-2 gap-4 p-4 bg-[#FAFAF8] border border-[#E8E8E4] rounded-lg mb-6">
                    {provider.specs.map((spec) => (
                      <div key={spec.label}>
                        <span className="block text-[0.7rem] uppercase font-bold text-[#94A3B8]">{spec.label}</span>
                        <span className="block font-serif text-sm font-bold text-[#0B1F3A]">{spec.val}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-[#F3F4F1]">
                  <a
                    href="#contact"
                    className="flex-1 py-2.5 px-4 bg-[#0B1F3A] text-white text-xs font-semibold rounded-md text-center hover:bg-[#071527] transition-colors premium-btn-hover"
                  >
                    Request Proposal
                  </a>
                  <a
                    href="#contact"
                    className="flex-1 py-2.5 px-4 bg-white border border-[#E8E8E4] text-[#0B1F3A] text-xs font-semibold rounded-md text-center hover:border-[#C8A45D] transition-colors"
                  >
                    Yield Report
                  </a>
                </div>
              </MotionCard>
            ))}
          </div>

        </div>
      </section>

      {/* Inquiries */}
      <Contact />
    </main>
  );
}
