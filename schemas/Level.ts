import { z } from 'zod';
import { skillSchema } from './Skill';
import { splashZoneSchema } from './SplashZone';

export const levelSchema = z.object({
  id: z.number(),
  curriculumId: z.coerce.number(),
  name: z.string(),
  abbreviation: z.string(),
  color: z.string(),
  canRegister: z.boolean(),
  minAge: z.coerce.number().nullable(),
  maxAge: z.coerce.number().nullable(),
  sort: z.number(),
  attendedDistance: z.number(),
  skills: z.array(skillSchema),
  splashZone: splashZoneSchema,
});

export type Level = z.infer<typeof levelSchema>;
