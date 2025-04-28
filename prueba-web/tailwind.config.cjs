/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,js,jsx,ts,tsx}', './public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#F43F5E',
        surface: {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#111827'
        },
        accent: '#FACC15'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          lg: '2rem',
          xl: '4rem'
        }
      },
      boxShadow: {
        card: '0 4px 14px rgba(0,0,0,0.10)'
      }
    }
  },
  plugins: []
};