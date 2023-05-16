import { PureAbility } from '@casl/ability';
import { z } from 'zod';

export const ability = new PureAbility();

export const abilitySchema = z.object({
  action: z.string(),
  subject: z.string(),
});

export const abilitiesSchema = z.array(abilitySchema);

export type Ability = z.infer<typeof abilitySchema>;
export type Abilities = z.infer<typeof abilitiesSchema>;

type Action =
  | 'add'
  | 'apply'
  | 'assign'
  | 'cancel'
  | 'create'
  | 'delete'
  | 'disable'
  | 'early'
  | 'edit'
  | 'enable'
  | 'franchise'
  | 'grow'
  | 'import'
  | 'issue'
  | 'login'
  | 'manage'
  | 'message'
  | 'override'
  | 'pay'
  | 'receive'
  | 'return'
  | 'sell'
  | 'shrink'
  | 'transfer'
  | 'trigger'
  | 'undo'
  | 'unrestricted'
  | 'update'
  | 'view';

type Subject = string;

export type AbilityTuple = [Action, Subject];
export type AppAbility = PureAbility<AbilityTuple>;

export type AbilityMeta =
  | {
      or?: AbilityTuple[];
      and?: AbilityTuple[];
    }
  | AbilityTuple[];
