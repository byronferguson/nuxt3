import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  const { familyId } = event.context.params as { familyId: string };

  return useNest(event, '/v2/legal/agreements', {
    query: {
      filter: `familyId||$eq||${familyId}`,
      join: 'document||title',
    },
  });
});
