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
        primary: 'var(--color-primary)',
        secondary: 'var(--color-secondary)',
        accent: 'var(--color-accent)',
      }
    }
  },
  plugins: []
}
