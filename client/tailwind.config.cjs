/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'almost-black': '#0F0F0F',
        blue: '#456FF6',
      },
    },
  },
  plugins: [],
};
