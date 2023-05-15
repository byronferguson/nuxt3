import { z } from 'zod';

export const authSchema = z.object({
  token: z.string(),
  expires: z.coerce.date(),
});

export type Auth = z.infer<typeof authSchema>;
