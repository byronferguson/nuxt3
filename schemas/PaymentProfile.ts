import { z } from 'zod';

export const paymentProfileSchema = z.object({
  id: z.number(),
  cardNumber: z.string(),
  cardOwner: z.string(),
  cardType: z.string(),
  city: z.string(),
  country: z.string(),
  default: z.boolean(),
  email: z.string(),
  expirationDate: z.string(),
  expirationMonth: z.string(),
  expirationYear: z.string(),
  familyId: z.number(),
  lostStolen: z.boolean(),
  name: z.string(),
  phone: z.string(),
  processor: z.string(),
  state: z.string(),
  streetAddress: z.string(),
  zipcode: z.string(),
});

export type PaymentProfile = z.infer<typeof paymentProfileSchema>;
