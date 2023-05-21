import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';
import { useNest } from '~/composables/use-nest';

const familySearchResult = z.array(
  z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    cellPhone: z.string().nullable(),
    emailAddress: z.string().nullable(),
    locationId: z.number().nullable(),
    location: z
      .object({
        id: z.number(),
        name: z.string(),
      })
      .nullable(),
    students: z.array(
      z.object({
        firstNamePlural: z.string(),
        age: z.number().nullable(),
        id: z.number(),
        firstName: z.string(),
        lastName: z.string(),
        birthday: z.string().nullable(),
      }),
    ),
    duplicateOfId: z.number().nullable().optional(),
  }),
);

export type FamilySearchResult = z.infer<typeof familySearchResult>;

export default defineEventHandler<FamilySearchResult>(event => {
  const { term, includeDuplicates } = getQuery(event);

  if (!term) return [];

  return useNest(event, `/v1/families/search/${term}?duplicates=${includeDuplicates}`, {
    onResponse({ response }) {
      response._data = familySearchResult.parse(camelcaseKeys(response._data, { deep: true }));
    },
  });
});
