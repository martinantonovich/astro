/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,css}', './public/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#0EA5E9',
        secondary: '#F43F5E',
        surface: {
          DEFAULT: '#1F2937',
          light: '#374151',
          dark: '#111827',
        },
        accent: '#FACC15',
        gray: defaultTheme.colors.gray, // Ensure the default gray palette is included
      },
    },
  },
  plugins: [],
};