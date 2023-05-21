import { z } from 'zod';
import { skillSchema } from './Skill';

export const studentLevelSchema = z.object({
  id: z.number(),
  groupId: z.number().nullable(),
  name: z.string(),
  maxAge: z.number().nullable(),
  minAge: z.number().nullable(),
  sort: z.number(),
  abbreviation: z.string().nullable(),
  color: z.string().nullable(),
  canRegister: z.boolean().nullable(),
  skills: z.array(skillSchema).optional(),
});

export type StudentLevel = z.infer<typeof studentLevelSchema>;
