/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Inter'],
    },
    extend: {
      colors: {
        sjgreen: '#00AA3A',
      },
    },
  },
};
