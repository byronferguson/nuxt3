import { z } from 'zod';
import { useNest } from '~/composables/use-nest';
import { levelSchema } from '~/schemas/Level';

const levelsSchema = z.array(levelSchema);

export default defineEventHandler(async event => {
  const data = await useNest(event, '/v2/level/levels', {
    query: {
      join: 'splashZone',
      sort: 'sort,ASC',
    },
  });

  return levelsSchema.parse(data);
});
