/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff4d4f', // Red for highlights
        background: '#1c1c1e', // Dark background color
        lightgray: '#2c2c2e',  // Lighter shade of black for content areas
      },
    },
  },
  plugins: [],
};
