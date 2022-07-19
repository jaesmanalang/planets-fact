/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    container: {
      padding: '2rem',
      center: true,
    },
    fontFamily: {
      heading: ['Antonio'],
      body: ["'League Spartan'"],
    },
    extend: {},
  },
  plugins: [],
};
