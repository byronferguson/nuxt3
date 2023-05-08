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
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'dark-primary': {
          DEFAULT: '#1F145D',
          50: '#E9E6FA',
          100: '#DBD6F6',
          200: '#BDB4EF',
          300: '#9F93E8',
          400: '#8271E0',
          500: '#644FD9',
          600: '#472ED2',
          700: '#3B26B1',
          800: '#301F8F',
          900: '#25186E',
          950: '#1F145D', // default
        },
        'medium-primary': {
          DEFAULT: '#2157D6',
          50: '#DEE6FA',
          100: '#CCD9F7',
          200: '#A9BEF2',
          300: '#85A4EC',
          400: '#6289E7',
          500: '#3E6FE1',
          600: '#2157D6', // default
          700: '#1A43A5',
          800: '#122F75',
          900: '#0B1C44',
          950: '#07122C',
        },
        'light-primary': {
          DEFAULT: '#99E3FA',
          50: '#FAFEFF',
          100: '#E7F8FE',
          200: '#C0EEFC',
          300: '#99E3FA', // default
          400: '#64D4F7',
          500: '#2EC6F5',
          600: '#0BADE0',
          700: '#0884AA',
          800: '#065A75',
          900: '#03313F',
          950: '#021C25',
        },
        secondary: {
          DEFAULT: '#F8564B',
          50: '#FFFCFC',
          100: '#FEE9E8',
          200: '#FDC5C1',
          300: '#FBA09A',
          400: '#FA7B72',
          500: '#F8564B', // default
          600: '#F62315',
          700: '#CB1408',
          800: '#950F06',
          900: '#5F0904',
          950: '#440703',
        },
        blush: {
          DEFAULT: '#FFD0D3',
          50: '#FFFFFF',
          100: '#FFF9F9',
          200: '#FFD0D3', // default
          300: '#FF989E',
          400: '#FF606A',
          500: '#FF2835',
          600: '#EF000F',
          700: '#B6000C',
          800: '#7E0008',
          900: '#460004',
          950: '#2A0003',
        },
        gold: {
          DEFAULT: '#FFCF34',
          50: '#FFFAEC',
          100: '#FFF6D7',
          200: '#FFECAE',
          300: '#FFE286',
          400: '#FFD95D',
          500: '#FFCF34', // default
          600: '#FBC000',
          700: '#C39500',
          800: '#8B6A00',
          900: '#533F00',
          950: '#372A00',
        },
      },
      // Consider reducing breakpoints to align with expected iPads and iMacs, and rename them to match
      // https://tailwindcss.com/docs/screens#using-custom-screen-names
      screens: {
        'ipad-v': { raw: '(min-width: 768px) and (max-width: 1024px) and (orientation: portrait)' },
        'ipad-h': '1024px',
        imac: '1280px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@headlessui/tailwindcss')({ prefix: 'ui' })],
};
