import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';
import { employeeSchema } from './Employee';
import { locationSchema } from './Location';
import { organizationSchema } from './Organization';
import { roleSchema } from './Role';

export const userSchema = z
  .record(z.any())
  .transform(obj => camelcaseKeys(obj, { deep: true }))
  .pipe(
    z.object({
      id: z.number(),
      firstName: z.string().nullable(),
      lastName: z.string().nullable(),
      fullName: z.string().nullable(),
      username: z.string(),
      defaultLocationId: z.number().nullable(),
      token: z.string().optional(),
      roles: z.array(roleSchema).optional(),
      locations: z.array(locationSchema),
      organization: organizationSchema,
      employee: employeeSchema.optional(),
    }),
  );

export type User = z.infer<typeof userSchema>;
