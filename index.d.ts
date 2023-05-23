import { AbilityMeta } from './schemas/Ability';
import { FormatType } from './utils/formatters';

declare module '#app' {
  interface NuxtApp {
    $formatValue(value: unknown, format: FormatType, scale: number): string;
  }

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

declare module 'vue' {
  interface ComponentCustomProperties {
    $formatValue(value: unknown, format: FormatType, scale: number): string;
  }
}

export {};
