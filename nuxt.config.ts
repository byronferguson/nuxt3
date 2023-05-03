// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Lessonbuddy',
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1',
      meta: [{ name: 'description', content: 'Lessonbuddy - Big Blue Swim School' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss', '@pinia/nuxt'],
});
