## dev dependencies

    npm i -D autoprefixer concurrently cross-env daisyui postcss-cli svelte-chartjs tailwindcss

## scripts

### package.json

    "dev": "concurrently \"npm run dev:only\" \"npm run tailwind:watch\"",
    "dev:only": "svelte-kit dev",
    "tailwind:watch": "cross-env TAILWIND_MODE=watch cross-env NODE_ENV=development postcss src/styles/tailwind.css -o src/styles/tailwind-output.css -w",
    "tailwind:build": "cross-env TAILWIND_MODE=build cross-env NODE_ENV=production postcss src/styles/tailwind.css -o src/styles/tailwind-output.css",

## init tailwind

    npx tailwindcss init

rename tailwind.config.js -> tailwind.config.cjs

## tailwind.config.cjs

    module.exports = {
      mode: 'jit',
      content: ['./src/**/*.{html,js,svelte,ts}'],
      theme: {
        extend: {}
      },
      plugins: [require('daisyui')]
    };

## postcss.config.cjs

    module.exports = {
      plugins: {
        tailwindcss: {},
        autoprefixer: {}
      }
    };

## src/styles/tailwind.css

    @tailwind base;
    @tailwind components;
    @tailwind utilities;

also create src/styles/tailwind-output.css
