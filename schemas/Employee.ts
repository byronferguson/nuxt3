import { z } from 'zod';
import { departmentSchema } from './Department';
import { divisionSchema } from './Division';
import { employeeCertificateSchema } from './EmployeeCertificate';
import { locationSchema } from './Location';
import { positionSchema } from './Position';

const baseEmployeeSchema =
  // .record(z.any())
  // Handles the creation of a computed property
  // .transform(({ fullName, ...obj }) => {
  //   if (!fullName) fullName = `${obj.firstName} ${obj.lastName}`;

  //   return {
  //     ...obj,
  //     fullName,
  //   };
  // })
  // .pipe(
  z.object({
    id: z.number(),
    accountId: z.number(),
    certificates: z.array(employeeCertificateSchema).optional(),
    currentStatus: z.string().optional(),
    defaultLocationId: z.number(),
    defaultLocation: locationSchema.optional(),
    locations: z.array(locationSchema).optional(),
    departmentId: z.number(),
    department: departmentSchema.optional(),
    divisionId: z.number(),
    division: divisionSchema.optional(),
    emailAddress: z.string(),
    employmentStatus: z.string(),
    firstName: z.string(),
    lastName: z.string(),
    fullName: z.string().optional(),
    gender: z.string(),
    lastBonusAmount: z.number().nullable(),
    lastBonusDate: z.coerce.date().nullable(),
    number: z.coerce.number(),
    organizationId: z.number(),
    partialFullName: z.string(),
    payRate: z.number(),
    payType: z.enum(['hourly', 'salary']),
    person: z
      .object({
        firstName: z.string(),
        lastName: z.string(),
      })
      .optional(),
    photoUrl: z.string().nullable(),
    positions: z.array(positionSchema).optional(),
    status: z.string(),
    supervisorId: z.number(),
  });

type Input = z.input<typeof baseEmployeeSchema> & {
  supervisor?: Input;
};

export type Employee = z.output<typeof baseEmployeeSchema> & {
  supervisor?: Employee;
};

export const employeeSchema: z.ZodType<Employee, z.ZodTypeDef, Input> = baseEmployeeSchema.extend({
  supervisor: z.lazy(() => employeeSchema.optional()),
});
