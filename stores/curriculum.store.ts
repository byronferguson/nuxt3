import { acceptHMRUpdate, defineStore } from 'pinia';
import { Curriculum } from '~/schemas/Curriculum';

type CurriculumState = {
  curriculums: Curriculum[];
  curriculumsById: Record<number, Curriculum>;
};

export const useCurriculumStore = defineStore('curriculum', {
  state: () =>
    ({
      curriculums: [],
      curriculumsById: {},
    } as CurriculumState),
  getters: {},
  actions: {
    async init() {
      if (this.curriculums.length > 0) return;

      const curriculums = await $fetch('/api/level/curriculums');
      const curriculumsById = curriculums.reduce((acc, level) => {
        acc[level.id] = level;
        return acc;
      }, {} as Record<number, Curriculum>);

      this.curriculums = curriculums;
      this.curriculumsById = curriculumsById;
    },
  },
  persist: {
    storage: persistedState.localStorage,
    // afterRestore({ store }) {},
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useCurriculumStore, import.meta.hot));
}
