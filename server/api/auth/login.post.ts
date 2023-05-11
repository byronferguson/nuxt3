import { parse } from 'date-fns';
import { useNest } from '~/composables/use-nest';

interface Auth {
  token: string;
  expires: string;
}

interface Location {
  id: number;
  name: string;
  slug: string;
}

interface Organization {
  id: number;
  name: string;
  slug: string;
}

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  locations: Location[];
  organization: Organization | null;
}

export default defineEventHandler(async event => {
  const { username, password } = await readBody(event);

  const { token, expires } = await useNest<Auth>(event, '/v2/auth/login', {
    method: 'POST',
    body: {
      username,
      password,
    },
  });

  const domain =
    window.location.hostname === 'lessonbuddy.local' ? 'lessonbuddy.local' : 'lessonbuddy.com';

  setCookie(event, 'authToken', token, {
    domain,
    expires: parse(expires, 'yyyy-MM-dd HH:mm:ss', new Date()),
  });

  return {
    token,
    expires,
  };

  // return $fetch<User>('/v2/auth/login', {
  //   method: 'POST',
  //   baseURL: BASE_URL,
  //   body: {
  //     username,
  //     password,
  //   },
  // });
});
