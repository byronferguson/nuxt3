import { PureAbility } from '@casl/ability';
import { abilitiesPlugin } from '@casl/vue';

export const ability = new PureAbility();

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.use(abilitiesPlugin, ability, {
    useGlobalProperties: true,
  });
});
