import { z } from 'zod';

export const skillSchema = z.object({
  id: z.number(),
  levelId: z.number(),
  description: z.string(),
  displayable: z.boolean(),
  name: z.string(),
  parentId: z.number(),
  sort: z.number(),
});

export type Skill = z.infer<typeof skillSchema>;
