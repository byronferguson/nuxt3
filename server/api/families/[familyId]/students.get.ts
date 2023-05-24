import { useNest } from '~/composables/use-nest';

export default defineEventHandler(event => {
  const { familyId } = event.context.params;

  return useNest(event, `/v1/families/${familyId}/students`);
});
