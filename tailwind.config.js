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
        'dark-primary': '#1F145D',
        'medium-primary': '#2157D6',
        'light-primary': '#99E3FA',
        secondary: '#F8564B',
        blush: '#FFD0D3',
        gold: '#FFCF34',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
