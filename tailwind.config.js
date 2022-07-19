/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './assets/**/*.css',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './layouts/*.{vue,js}',
    './layouts/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        primary: '#197AD9',
        secondary: '#24EEF8',
        neutral: '#23354D',
        highlight: '#182332',
        background: '#F4F5FC',
      },
    },
  },
  plugins: [],
};
