import { useLessonBuddyCookie } from '~/composables/use-lesson-buddy-cookie';
import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  const { remove } = useLessonBuddyCookie(event);

  remove();

  return useNest(event, '/v2/auth/logout', {
    method: 'POST',
  });
});
