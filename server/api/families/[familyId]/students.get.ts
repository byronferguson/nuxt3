import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';
import { useNest } from '~/composables/use-nest';
import { studentSchema } from '~/schemas/Student';

const studentsSchema = z.array(studentSchema);

export default defineEventHandler(event => {
  const { familyId } = event.context.params;

  return useNest(event, `/v1/families/${familyId}/students`, {
    onResponse({ response }) {
      response._data = studentsSchema
        .parse(camelcaseKeys(response._data, { deep: true }))
        .sort((a, b) => a.firstName.localeCompare(b.firstName));
    },
  });
});
