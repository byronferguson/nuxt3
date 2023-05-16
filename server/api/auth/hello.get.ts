import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  return useNest(event, '/v2/auth/hello');
});
