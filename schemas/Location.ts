import camelcaseKeys from 'camelcase-keys';
import { z } from 'zod';
import { addressSchema } from './Address';
import { geometrySchema } from './Geometry';

export const locationSchema = z
  .record(z.any())
  .transform(obj => camelcaseKeys(obj, { deep: true }))
  .pipe(
    z.object({
      id: z.number(),
      name: z.string(),
      preShiftUrl: z.string().optional(),
      postShiftUrl: z.string().optional(),
      address: addressSchema.optional(),
      city: z.string().nullable(),
      couponId: z.string().nullable(),
      descriptor: z.string().nullable(),
      displayName: z.string().nullable(),
      geometry: geometrySchema.nullable(),
      hours: z.array(z.any()).optional(), // TODO: hoursSchema,
      mapUrl: z.string().nullable(),
      kbUrl: z.string().nullable(),
      state: z.string().nullable(),
      streetAddress: z.string().nullable(),
      zipcode: z.string().nullable(),
      published: z.boolean(),
      type: z.string().nullable(),
      organizationId: z.number(),
      // organization: organizationSchema,
    }),
  );

export type Location = z.infer<typeof locationSchema>;

// Nuxt2 code: potentially deprecated
// export function LocationFilterOptionMap(location: Location): FilterOption<Location> {
//   return {
//     name: location.name || '',
//     value: location,
//     selected: false,
//   };
// }
// export function getEmptyLocation(): Location {
//   return JSON.parse(
//     '{"id": 0, "name": "", "preShiftUrl": null, "postShiftUrl": null, "published": false}',
//   );
// }
