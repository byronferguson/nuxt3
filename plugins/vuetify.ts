import { createVuetify } from 'vuetify';
import 'vuetify/styles';

export default defineNuxtPlugin(nuxtApp => {
  const vuetify = createVuetify({
    ssr: false,
  });

  nuxtApp.vueApp.use(vuetify);
});
