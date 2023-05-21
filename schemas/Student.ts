import { z } from 'zod';
import { skillSchema } from './Skill';
import { studentLevelSchema } from './StudentLevel';

export const studentSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  vaccinated: z.boolean().optional(),
  birthday: z.string().optional(),
  familyId: z.number().optional(),
  levelId: z.number().optional(),
  lessonsAtLevel: z.number().optional(),
  attendedLessons: z.number().optional(),
  notes: z.string().optional(),
  startDate: z.string().optional(),
  startLocationId: z.number().optional(),
  couponId: z.number().optional(),
  orientation: z.boolean().optional(),
  progress: z.boolean().optional(),
  waiver: z.boolean().optional(),
  photoFilename: z.string().optional(),
  progressCycle: z.number().optional(),
  waiverDate: z.string().optional(),
  level: studentLevelSchema.optional(),
  skills: z.array(skillSchema).optional(),
  // family: familySchema.optional(),
});

export type Student = z.infer<typeof studentSchema>;
