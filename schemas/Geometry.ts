import { z } from 'zod';

export const geometrySchema = z.object({
  // Lat, Lng
  coordinates: z.tuple([z.number().min(-90).max(90), z.number().min(-180).max(180)]),
  type: z.string(),
});

export type Geometry = z.infer<typeof geometrySchema>;
