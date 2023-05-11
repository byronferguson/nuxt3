import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  return useNest(event, '/v1/accounts/me?include=employee');
});
