import type { H3Event } from 'h3';
import type { FetchOptions, FetchRequest } from 'ofetch';
import { ofetch } from 'ofetch';
import { useLessonBuddyCookie } from './use-lesson-buddy-cookie';

// Types pulled from ofetch
interface ResponseMap {
  blob: Blob;
  text: string;
  arrayBuffer: ArrayBuffer;
  stream: ReadableStream<Uint8Array>;
}
type ResponseType = keyof ResponseMap | 'json';
type MappedType<R extends ResponseType, JsonType = any> = R extends keyof ResponseMap
  ? ResponseMap[R]
  : JsonType;

export function useNest<T = any, R extends ResponseType = 'json'>(
  event: H3Event,
  request: FetchRequest,
  options?: FetchOptions<R>,
): Promise<MappedType<R, T>> {
  const token = useLessonBuddyCookie(event).get();
  const baseURL = 'https://develop.api.lessonbuddy.com'; // grab out of config

  const baseOptions: FetchOptions<R> = {
    baseURL,
    headers: {
      'client-platform-id': '1',
      ...(token && { Authorization: `Bearer ${token}` }),
    },
  };

  return ofetch<T, R>(request, {
    ...baseOptions,
    ...options,
  });
}
