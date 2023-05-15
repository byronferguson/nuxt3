import type { H3Event } from 'h3';

export function useLessonBuddyCookie(event: H3Event) {
  const COOKIE_NAME = 'authToken';
  const domain = event.node.req.headers.host?.split(':')[0] ?? 'lessonbuddy.local';

  return {
    get() {
      return getCookie(event, 'authToken') ?? '';
    },

    set(value: string, expires: Date) {
      setCookie(event, COOKIE_NAME, value, { domain, expires });
    },

    remove() {
      setCookie(event, COOKIE_NAME, '');
    },
  };
}
