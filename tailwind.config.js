/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'arabic': ['Amiri', 'Traditional Arabic', 'serif'],
        'bengali': ['Kalpurush', 'SolaimanLipi', 'sans-serif'],
        'urdu': ['Noto Nastaliq Urdu', 'Jameel Noori Nastaleeq', 'serif'],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#059669',
        accent: '#d97706',
      }
    }
  },
  plugins: []
}
