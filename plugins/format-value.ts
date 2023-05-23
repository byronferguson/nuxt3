import { formatValue } from '~/utils/formatters';

export default defineNuxtPlugin(() => {
  return {
    provide: { formatValue },
  };
});
