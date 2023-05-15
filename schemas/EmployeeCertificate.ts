import { z } from 'zod';

export const employeeCertificateSchema = z.object({
  id: z.number(),
  name: z.string(),
  abbreviation: z.string(),
  color: z.string().nullable(),
  sort: z.number(),
  type: z.string(),
  createdAt: z.date(),
  certifiedAt: z.date(),
});

export type EmployeeCertificate = z.infer<typeof employeeCertificateSchema>;
