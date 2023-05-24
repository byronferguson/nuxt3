import { z } from 'zod';

export const splashZoneSchema = z.object({
  id: z.number(),
  name: z.string(),
  curriculumId: z.number(),
  levelId: z.number(),
  distance: z.number(),
  increment: z.number(),
});

export type SplashZone = z.infer<typeof splashZoneSchema>;
