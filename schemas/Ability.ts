import { PureAbility } from '@casl/ability';
import { z } from 'zod';

const ability = new PureAbility();
export default ability;

export const abilitySchema = z.object({
  action: z.string(),
  subject: z.string(),
});

export const abilitiesSchema = z.array(abilitySchema);

export type Ability = z.infer<typeof abilitySchema>;
export type Abilities = z.infer<typeof abilitiesSchema>;

type Action = 'create' | 'read' | 'update' | 'delete' | 'manage';
type Subject = string;

export type AppAbility = PureAbility<[Action, Subject]>;
