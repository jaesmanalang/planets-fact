/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1.5rem',
        md: '2rem',
      },
      center: true,
    },
    fontFamily: {
      heading: ['Antonio'],
      body: ["'League Spartan'"],
    },
    extend: {
      colors: {
        mercury: '#419EBB',
        venus: '#EDA249',
        earth: '#6D2ED5',
        mars: '#D14C32',
        jupiter: '#D83A34',
        saturn: '#CD5120',
        uranus: '#1EC1A2',
        neptune: '#2D68F0',
      },
    },
  },
  plugins: [],
};
