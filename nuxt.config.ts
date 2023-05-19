import vuetify from 'vite-plugin-vuetify';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require('./package.json');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false, // Disable Server Side rendering

  app: {
    head: {
      title: 'LessonBuddy',
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: process.env.npm_package_description || '',
        },
      ],
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'manifest', href: '/site.webmanifest' },
      ],
    },
  },

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  modules: [
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-typed-router',
    'nuxt-vitest',
    (_options, nuxt) => {
      // @ts-ignore
      nuxt.hooks.hook('vite:extendConfig', config => config.plugins.push(vuetify()));
    },
  ],

  imports: {
    dirs: ['stores'],
  },

  runtimeConfig: {
    public: {
      VERSION: version,
    },
  },

  build: {
    transpile: ['@fortawesome/vue-fontawesome', '@vuepic/vue-datepicker'],
  },

  devtools: {
    enabled: true,
  },

  devServer: {
    host: 'lessonbuddy.local',
    port: 3000,
  },

  pinia: {
    autoImports: [
      // automatically imports `defineStore`
      'defineStore', // import { defineStore } from 'pinia'
    ],
  },

  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
});
