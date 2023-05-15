import { z } from 'zod';

export const positionSchema = z
  .record(z.any())
  .transform(obj => camelcaseKeys(obj, { deep: true }))
  .pipe(
    z.object({
      id: z.number(),
      name: z.string().default(''),
      abbreviation: z.string().default(''),
      code: z.string().default(''),
      rateModifier: z.number().default(0),
      wet: z.boolean().default(false),
      required: z.boolean().default(false),
      trackConsistency: z.boolean().default(false),
      canHaveTrialsAssigned: z.boolean().default(false),
      createdAt: z.date(),
      updatedAt: z.date(),
    }),
  );

export type Position = z.infer<typeof positionSchema>;
