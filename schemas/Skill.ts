import { z } from 'zod';

export const skillFeedbackSchema = z.object({
  createdAt: z.string(),
  createdById: z.number(),
  longFeedback: z.string(),
  createdBy: z.object({
    id: z.number(),
    firstName: z.string(),
    lastName: z.string(),
    fullName: z.string(),
    partialFullName: z.string(),
  }),
});

export const skillSchema = z.object({
  id: z.number(),
  parentId: z.coerce.number().nullable().optional(),
  levelId: z.number().optional(),
  name: z.string(),
  abbreviation: z.string().nullable().optional(),
  description: z.string().nullable(),
  distance: z.number().nullable().optional(),
  displayable: z.boolean(),
  sort: z.number().optional(),
  videoUrl: z.string().nullable().optional(),
  feedback: skillFeedbackSchema.partial(),
  completed: z.boolean().optional(),
});

export const skillWithChildrenSchema = skillSchema.extend({
  children: z.array(skillSchema),
});

export type Skill = z.infer<typeof skillSchema>;
export type SkillWithChildren = z.infer<typeof skillWithChildrenSchema>;
