import { z } from 'zod';

export const skillSchema = z.object({
  id: z.number(),
  parentId: z.coerce.number().nullable(),
  levelId: z.number(),
  name: z.string(),
  abbreviation: z.string().nullable(),
  description: z.string().nullable(),
  distance: z.number().nullable(),
  displayable: z.boolean(),
  sort: z.number(),
  videoUrl: z.string().nullable(),
});

export type Skill = z.infer<typeof skillSchema>;
