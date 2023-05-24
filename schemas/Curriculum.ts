import { z } from 'zod';

export const curriculumSchema = z.object({
  id: z.number(),
  name: z.string(),
  description: z.string(),
  sort: z.number(),
  minAge: z.coerce.number(),
  maxAge: z.coerce.number(),
  ratio: z.number(),
  duration: z.number(),
});

export type Curriculum = z.infer<typeof curriculumSchema>;
