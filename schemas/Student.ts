import { z } from 'zod';

export const studentSchema = z.object({
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  age: z.number(),
  // vaccinated: z.boolean().optional(),
  birthday: z.string().optional(),
  familyId: z.number().optional(),
  // levelId: z.number().optional(),
  // lessonsAtLevel: z.number().optional(),
  // attendedLessons: z.number().optional(),
  notes: z.string().optional().nullable(),
  // orientation: z.boolean().optional(),
  // progress: z.boolean().optional(),
  // waiver: z.boolean().optional(),
  // progressCycle: z.number().optional(),
  // waiverDate: z.string().optional(),
});

export type Student = z.infer<typeof studentSchema>;
