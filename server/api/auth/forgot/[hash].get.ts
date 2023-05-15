import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  const hash = event.context.params?.hash;

  if (!hash) {
    throw new Error('No hash provided');
  }

  return useNest(event, `/v2/auth/forgot/${hash}`);
});
