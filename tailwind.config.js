/***** tailwind.config.js *****/
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Poppins"', 'ui-sans-serif', 'system-ui']
      },
      colors: {
        primary: '#0f766e',
        secondary: '#111827',
        accent: '#f59e0b'
      },
      boxShadow: {
        soft: '0 10px 40px rgba(15, 118, 110, 0.12)'
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(15, 118, 110, 0.35)' },
          '50%': { boxShadow: '0 0 0 12px rgba(15, 118, 110, 0)' }
        }
      },
      animation: {
        pulseGlow: 'pulseGlow 2.4s infinite'
      }
    }
  },
  plugins: []
};
