import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';

export const departmentSchema = z
  .record(z.any())
  .transform(obj => camelcaseKeys(obj, { deep: true }))
  .pipe(
    z.object({
      id: z.number(),
      organizationId: z.number(),
      name: z.string(),
      code: z.number().nullable(),
    }),
  );

export type Department = z.infer<typeof departmentSchema>;
