import { useNest } from '~/composables/use-nest';

export default defineEventHandler(async event => {
  const { emailAddress } = await readBody(event);

  return useNest(event, '/v2/auth/forgot ', {
    method: 'POST',
    body: {
      emailAddress,
    },
  });
});
