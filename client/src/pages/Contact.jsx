import { motion } from 'framer-motion';
import { FadeIn } from '../components/motion/MotionVariants';

export default function Contact() {
  const contactOptions = [
    {
      id: 'phone',
      label: 'Phone Number',
      detail: '+91 92501 34882',
      href: 'tel:+919250134882',
      actionText: 'Call Directly',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      )
    },
    {
      id: 'email',
      label: 'Email',
      detail: 'tectorapvtltd@gmail.com',
      href: 'mailto:tectorapvtltd@gmail.com',
      actionText: 'Send Email',
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
          <polyline points="22,6 12,13 2,6" />
        </svg>
      )
    },
    {
      id: 'instagram',
      label: 'Instagram',
      detail: '@tectora.official',
      href: 'https://www.instagram.com/tectora.official/',
      actionText: 'Follow on Instagram',
      isExternal: true,
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      )
    },
    {
      id: 'facebook',
      label: 'Facebook',
      detail: 'TECTORA Official',
      href: 'https://www.facebook.com/share/1DHtPNFAA8/',
      actionText: 'Connect on Facebook',
      isExternal: true,
      icon: (
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0B1F3A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      )
    }
  ];

  return (
    <main className="bg-[#FAFAF8] min-h-screen pt-28 pb-20 md:pt-36 md:pb-28">
      <div className="max-w-[880px] mx-auto px-6">
        
        {/* Header */}
        <FadeIn direction="down" duration={0.8} amount={0.2} className="text-center max-w-[680px] mx-auto mb-14 md:mb-16">
          <div className="inline-flex items-center justify-center gap-2 text-[0.8rem] font-bold tracking-[0.2em] uppercase text-[#C8A45D] mb-3">
            <span>GET IN TOUCH</span>
          </div>
          <h1 className="font-serif text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] font-bold text-[#0B1F3A] leading-tight mb-4">
            Connect with TECTORA
          </h1>
          <p className="text-[1rem] sm:text-[1.05rem] text-[#555] leading-relaxed mb-6">
            Reach out directly through our verified business communication channels for project inquiries, turnkey partnerships, or consultation.
          </p>
          <div className="w-12 h-[2px] bg-[#C8A45D] mx-auto" aria-hidden="true" />
        </FadeIn>

        {/* 2x2 Grid on Desktop, Stacked on Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
          {contactOptions.map((item, index) => (
            <motion.a
              key={item.id}
              href={item.href}
              target={item.isExternal ? '_blank' : undefined}
              rel={item.isExternal ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 34, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.15 }}
              whileHover={{ 
                scale: 1.03, 
                y: -5,
                transition: { duration: 0.25, ease: 'easeOut' }
              }}
              transition={{
                duration: 0.75,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1]
              }}
              className="group p-8 sm:p-10 bg-white border border-[#EAE6DF] rounded-[16px] shadow-[0_4px_20px_rgba(11,31,58,0.04)] hover:shadow-[0_16px_36px_rgba(11,31,58,0.1)] hover:border-[#C8A45D]/60 transition-colors duration-300 flex flex-col items-center text-center no-underline"
              id={`contactCard-${item.id}`}
            >
              {/* Icon on top inside soft circular gold background */}
              <div className="w-16 h-16 rounded-full bg-[#C8A45D]/12 group-hover:bg-[#C8A45D]/22 flex items-center justify-center mb-5 transition-all duration-300">
                {item.icon}
              </div>

              {/* Label */}
              <span className="text-[0.78rem] font-bold uppercase tracking-widest text-[#C8A45D] mb-2">
                {item.label}
              </span>

              {/* Actual Detail */}
              <span className="font-serif text-[1.2rem] sm:text-[1.32rem] font-bold text-[#0B1F3A] group-hover:text-[#C8A45D] transition-colors break-words max-w-full">
                {item.detail}
              </span>

              {/* Action hint */}
              <span className="text-xs text-[#94A3B8] font-medium mt-3.5 inline-flex items-center gap-1.5 group-hover:text-[#0B1F3A] transition-colors">
                <span>{item.actionText}</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
              </span>
            </motion.a>
          ))}
        </div>

      </div>
    </main>
  );
}
