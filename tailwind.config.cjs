/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require('daisyui')],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        sjgreen: '#00AA3A',
        sjgreenLight: '#e8f7e4',
        sjmoss: '#E8F7F6',
      },
    },
  },
};
