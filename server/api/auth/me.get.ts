import { useNest } from '~/composables/use-nest';
import { userSchema } from '~/schemas/User';

export default defineEventHandler(async event => {
  const data = await useNest(event, '/v1/accounts/me?include=employee');

  const user = userSchema.safeParse(data);

  if (!user.success) {
    console.error(user.error);

    throw new Error(user.error.message);
  }

  return user.data;
});
