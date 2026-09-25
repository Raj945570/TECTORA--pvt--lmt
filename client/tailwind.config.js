/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        page: '#FAFAF8',
        navy: {
          DEFAULT: '#0B1F3A',
          hover: '#071527',
          muted: '#1A3152',
        },
        gold: {
          DEFAULT: '#C8A45D',
          hover: '#B7934C',
          light: '#F4EFE6',
          btn: '#F5B82E',
          btnHover: '#E5A71D',
          border: 'rgba(200, 164, 93, 0.4)',
        },
        borderLight: '#E8E8E4',
        borderCard: '#E5E7EB',
        textPrimary: '#1A1A1A',
        textSecondary: '#4A5568',
        textMuted: '#64748B',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      maxWidth: {
        container: '1320px',
      },
      boxShadow: {
        subtle: '0 2px 8px rgba(11, 31, 58, 0.04)',
        card: '0 6px 24px rgba(11, 31, 58, 0.06)',
        elevated: '0 16px 40px -10px rgba(11, 31, 58, 0.1)',
        floating: '0 20px 48px -12px rgba(11, 31, 58, 0.14)',
      }
    },
  },
  plugins: [],
}
