/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        stromboli: '#355f51',
        viridian: '#458f79',
        gray: '#7f7f7f',
        alabaster: '#f8f8f8',
      },
      borderRadius: {
        classic: '6px',
      },
    },
  },
  plugins: [],
};
