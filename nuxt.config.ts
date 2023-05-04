// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
        { rel: 'stylesheet', href: 'https://rsms.me/inter/inter.css' },
      ],
    },
  },

  modules: [
    '@sidebase/nuxt-auth',
    '@vueuse/nuxt',
    '@pinia/nuxt',
    '@pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-vitest',
  ],

  devtools: {
    enabled: true,
  },
});
