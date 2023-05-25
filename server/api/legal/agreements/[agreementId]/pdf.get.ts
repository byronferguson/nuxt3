import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  const { agreementId } = event.context.params as { agreementId: string };

  return useNest(event, `/v2/legal/agreements/${agreementId}/pdf`, {
    responseType: 'arrayBuffer',
  });
});
