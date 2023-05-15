import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';

export const permissionSchema = z
  .record(z.any())
  .transform(obj => camelcaseKeys(obj, { deep: true }))
  .pipe(
    z.object({
      id: z.number(),
      key: z.string(),
      name: z.string(),
      supervisorOnly: z.boolean(),
    }),
  );

export type Permission = z.infer<typeof permissionSchema>;
