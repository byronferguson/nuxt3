import { useLessonBuddyCookie } from '~/composables/use-lesson-buddy-cookie';
import { useNest } from '~/composables/use-nest';
import { Auth, authSchema } from '~/schemas/Auth';

export default defineEventHandler(async event => {
  const { username, password } = await readBody(event);

  const data = await useNest<Auth>(event, '/v2/auth/login', {
    method: 'POST',
    body: {
      username,
      password,
    },
  });

  const { expires, token } = authSchema.parse(data);

  useLessonBuddyCookie(event).set(token, expires);

  return {
    token,
    expires,
  };
});
