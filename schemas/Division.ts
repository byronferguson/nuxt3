import { z } from 'zod';

export const divisionSchema = z.any();

export type Division = z.infer<typeof divisionSchema>;
