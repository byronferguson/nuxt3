import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';
import { locationSchema } from './Location';
import { paymentProfileSchema } from './PaymentProfile';
import { studentSchema } from './Student';

export const familySchema = z
  .record(z.any())
  .transform(obj => camelcaseKeys(obj, { deep: true }))
  .pipe(
    z.object({
      id: z.number(),
      firstName: z.string(),
      lastName: z.string(),
      fullName: z.string().optional(),
      partialName: z.string().optional(),
      secondaryFirstName: z.string().optional(),
      secondaryLastName: z.string().optional(),
      secondaryPartialName: z.string().optional(),
      cellPhone: z.string().nullable(),
      emailAddress: z.string().nullable(),
      students: z.array(studentSchema).optional(),
      locationId: z.number().nullable(),
      location: locationSchema.nullable(),
      paymentProfileId: z.number().optional(),
      paymentProfile: paymentProfileSchema.optional(),
      duplicateOfId: z.number().nullable(),
      primaryVaccinated: z.boolean().optional(),
      secondaryVaccinated: z.boolean().optional(),
    }),
  );

export type Family = z.infer<typeof familySchema>;
