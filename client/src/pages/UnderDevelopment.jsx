import { Link, useLocation } from 'react-router-dom';

export default function UnderDevelopment() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const serviceParam = searchParams.get('service');

  // Derive service name if arriving from direct routes
  let displayService = serviceParam;
  if (!displayService) {
    if (location.pathname === '/materials') displayService = 'Raw Materials';
    else if (location.pathname === '/real-estate') displayService = 'Real Estate';
    else if (location.pathname === '/experts') displayService = 'Experts';
  }

  return (
    <main className="bg-[#FAFAF8] min-h-[75vh] flex items-center justify-center py-24 px-4">
      <div className="max-w-lg w-full text-center bg-white p-10 sm:p-12 rounded-2xl border border-[#E8E8E4] shadow-sm">
        {/* Luxury Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#F4EFE6] border border-[#C8A45D]/50 rounded-full text-xs font-bold uppercase tracking-widest text-[#0B1F3A] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#C8A45D] animate-pulse"></span>
          <span>{displayService ? `${displayService} Module` : 'Platform Module'}</span>
        </div>

        {/* Heading */}
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#0B1F3A] mb-3">
          Under Development
        </h1>

        {/* Subtext */}
        <p className="text-base text-[#4A5568] mb-8 leading-relaxed max-w-sm mx-auto">
          This feature will be available soon.
        </p>

        {/* Button */}
        <Link
          to="/"
          className="inline-flex items-center justify-center px-7 py-3.5 bg-[#0B1F3A] text-white text-sm font-semibold rounded-md hover:bg-[#071527] transition-all duration-200 shadow-sm hover:shadow-md"
        >
          Back to Home
        </Link>
      </div>
    </main>
  );
}
