import { acceptHMRUpdate, defineStore } from 'pinia';
import { Level } from '~/schemas/Level';

type LevelState = {
  levels: Level[];
  levelsById: Record<number, Level>;
};

export const useLevelStore = defineStore('level', {
  state: () =>
    ({
      levels: [],
      levelsById: {},
    } as LevelState),
  getters: {},
  actions: {
    async init() {
      if (this.levels.length > 0) return;

      const levels = await $fetch('/api/level/levels');
      const levelsById = levels.reduce((acc, level) => {
        acc[level.id] = level;
        return acc;
      }, {} as Record<number, Level>);

      this.levels = levels;
      this.levelsById = levelsById;
    },
  },
  persist: {
    storage: persistedState.localStorage,
    // afterRestore({ store }) {},
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useLevelStore, import.meta.hot));
}
