const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    // Consider reducing breakpoints to align with expected iPads and iMacs, and rename them to match
    // https://tailwindcss.com/docs/screens#using-custom-screen-names
    // screens: {
    //   'ipad-v': '768px',
    //   'ipad-h': '1024px',
    //   imac: '1280px',
    // },
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-primary': '#1f145d',
        'medium-primary': '#2157d6',
        'light-primary': '#99e3fa',
        secondary: '#f8564b',
        blush: '#ffd0d3',
        gold: '#ffcf34',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
