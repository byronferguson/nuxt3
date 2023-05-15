import { useNest } from '~/composables/use-nest';

export default defineEventHandler(async event => {
  const hash = event.context.params?.hash;
  const { newPassword } = await readBody(event);

  if (!hash) {
    throw new Error('No hash provided');
  }

  if (!newPassword) {
    throw new Error('No new password provided');
  }

  return useNest(event, `/v2/auth/forgot/${hash}`, {
    method: 'PATCH',
    body: {
      newPassword,
    },
  });
});
