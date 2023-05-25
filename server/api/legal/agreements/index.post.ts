import { useNest } from '~/composables/use-nest';

export default defineEventHandler(async event => {
  const body = await readBody(event);

  return useNest(event, '/v2/legal/agreements', {
    method: 'POST',
    body,
  });
});
