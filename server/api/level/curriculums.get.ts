import { z } from 'zod';
import { useNest } from '~/composables/use-nest';
import { curriculumSchema } from '~/schemas/Curriculum';

const curriculumsSchema = z.array(curriculumSchema);

export default defineEventHandler(async event => {
  const data = await useNest(event, '/v2/level/curriculums', {
    query: {
      sort: 'sort,ASC',
    },
  });

  return curriculumsSchema.parse(data);
});
