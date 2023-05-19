import { AbilityMeta } from './schemas/Ability';

declare module '#app' {
  interface PageMeta {
    meta?: {
      abilities?: AbilityMeta;
    };
  }
}

declare module 'vue-router' {
  interface RouteMeta {
    abilities?: AbilityMeta;
  }
}
