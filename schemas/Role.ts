import { z } from 'zod';
import { permissionSchema } from './Permission';

export const roleSchema = z.object({
  id: z.number(),
  name: z.string(),
  permissions: z.array(permissionSchema),
});

export type Role = z.infer<typeof roleSchema>;
