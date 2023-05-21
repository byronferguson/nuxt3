import { acceptHMRUpdate, defineStore } from 'pinia';
import { Family } from '~/schemas/Family';

type FamilyState = {
  family: Family | null;
  families: Family[];
};

export const useFamilyStore = defineStore('family', {
  state: () =>
    ({
      family: null,
      families: [],
    } as FamilyState),
  getters: {},
  actions: {
    async search(term: string, includeDuplicates = false) {
      try {
        this.families = await $fetch(`/api/families/search`, {
          query: {
            term,
            includeDuplicates,
          },
        });
      } catch (err) {
        // if (err.status && err.status === 401) {
        //   ctx.dispatch('auth/logout');
        // } else {
        console.error(err);
        // }
      }
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useFamilyStore, import.meta.hot));
}
