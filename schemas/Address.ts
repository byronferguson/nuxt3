import { z } from 'zod';
import { geometrySchema } from './Geometry';

export const addressSchema = z.object({
  city: z.string(),
  geometry: geometrySchema,
  id: z.number(),
  state: z.string(),
  street: z.string(),
  street2: z.string().nullable(),
  zipcode: z.string(),
});

export type Address = z.infer<typeof addressSchema>;
