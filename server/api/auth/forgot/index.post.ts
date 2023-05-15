import { z } from 'zod';
import { useNest } from '~/composables/use-nest';

export default defineEventHandler(async event => {
  const { emailAddress } = await readBody(event);

  const email = z.string().email().safeParse(emailAddress);

  if (!email.success) {
    throw new Error(email.error.message);
  }

  return useNest(event, '/v2/auth/forgot ', {
    body: {
      emailAddress: email.data,
    },
  });
});
