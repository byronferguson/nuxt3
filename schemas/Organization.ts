import { z } from 'zod';

export const organizationSchema = z.object({
  id: z.coerce.number({ required_error: 'Cannot build an organization without an ID.' }).int(),
  name: z.string({ required_error: 'Cannot build an organization without a name.' }),
  paycorDocumentId: z.coerce.number().int().nullable(),
  paycomSftpUsername: z.string().nullable().optional(),
});

export type Organization = z.infer<typeof organizationSchema>;
