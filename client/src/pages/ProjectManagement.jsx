import { Link } from 'react-router-dom';
import { FadeIn, MotionCard } from '../components/motion/MotionVariants';
import Contact from '../sections/Contact';
import '../styles/sections.css';

export default function ProjectManagement() {
  const modules = [
    {
      num: 'Module 01',
      title: 'Milestone & Schedule Tracking',
      desc: 'Gantt-integrated site progress tracking linking civil, structural, and finishing work packages with critical-path delay alerts.'
    },
    {
      num: 'Module 02',
      title: 'Material Dispatch Telemetry',
      desc: 'Real-time transit visibility from mill weighbridge to on-site rebar yard with automated digital delivery receipts and inventory consumption logs.'
    },
    {
      num: 'Module 03',
      title: 'Quality & Audit Governance',
      desc: 'Automated upload of cube test results, rebar tensile certificates, and third-party structural audit approvals before progress billings.'
    }
  ];

  const bulletPoints = [
    'Automated progress escrow milestones tied to structural sign-offs',
    'Unified dashboard for developers, general contractors, and PMCs',
    'Predictive material inventory burn-rate alerts to prevent stockouts',
    'Mobile site inspection app with geo-tagged photographic punch lists',
    'Daily digital labor and machinery deployment logs',
    'Seamless export into Primavera P6, Microsoft Project, and ERP systems'
  ];

  return (
    <main className="project-mgmt-page">
      {/* 1. Hero Section */}
      <section className="service-page-hero">
        <div className="container">
          <FadeIn direction="up" duration={0.8} amount={0.2}>
            <div className="service-breadcrumb">
              <Link to="/">Platform</Link> &nbsp;/&nbsp; <span>Project Management</span>
            </div>
            <h1 className="service-hero-title">Project Management</h1>
            <p className="service-hero-desc">
              Milestone-driven telemetry, automated material dispatch tracking, and third-party technical quality inspections to guarantee on-time structural execution.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Details Section */}
      <section className="service-details-section">
        <div className="container">
          <FadeIn direction="up" duration={0.8} amount={0.2}>
            <div className="section-tag">Platform Telemetry</div>
            <h2 className="section-title">Digital Execution Governance</h2>
            <p className="section-subtitle">
              Eliminate site delays, material inventory loss, and communication silos with a single unified telemetry dashboard.
            </p>
          </FadeIn>

          {/* Offerings Grid */}
          <div className="service-offerings-grid">
            {modules.map((m, idx) => (
              <MotionCard 
                key={m.num} 
                delay={idx * 0.12} 
                duration={0.75}
                hoverScale={1.03}
                hoverY={-4}
                className="service-offering-card cursor-default"
              >
                <span className="service-offering-num">{m.num}</span>
                <h3 className="service-offering-title">{m.title}</h3>
                <p className="service-offering-desc">{m.desc}</p>
              </MotionCard>
            ))}
          </div>

          {/* Operational Features */}
          <FadeIn direction="up" duration={0.8} delay={0.2} amount={0.2} className="service-bullets-wrap">
            <h3 className="service-bullets-title">Operational Features &amp; Platform Controls</h3>
            <ul className="service-bullets-list">
              {bulletPoints.map((bullet, idx) => (
                <li key={idx} className="service-bullet-item">
                  <svg
                    className="service-bullet-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>

      {/* 3. CTA Section */}
      <section className="service-cta-banner" id="quote">
        <div className="container">
          <FadeIn direction="up" duration={0.8} amount={0.2} className="service-cta-inner">
            <div className="section-tag">Enterprise Deployment</div>
            <h2 className="service-cta-title">Deploy Project Management Telemetry</h2>
            <p className="service-cta-sub">
              Schedule an executive platform demonstration or request project onboarding terms for your active developments.
            </p>
            <div className="service-cta-btns">
              <Link to="/enquiry" className="btn btn-primary premium-btn-hover" style={{ height: '48px', padding: '0 32px' }}>
                Request a Quote &rarr;
              </Link>
              <Link to="/services" className="btn btn-secondary premium-btn-hover" style={{ height: '48px', padding: '0 28px' }}>
                Explore All Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* 4. Contact Footer */}
      <Contact />
    </main>
  );
}
