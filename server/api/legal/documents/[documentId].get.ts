import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  const { documentId } = event.context.params as { documentId: string };

  return useNest(event, `/v2/legal/documents/${documentId}`);
});
