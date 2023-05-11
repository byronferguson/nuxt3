import { PureAbility as Ability } from '@casl/ability';
const ability = new Ability();
export default ability;

export type AbilityArray = {
  0: string;
  1: string;
} & Array<string>;

export type AbilityMeta =
  | {
      or?: AbilityArray[];
      and?: AbilityArray[];
    }
  | AbilityArray[];
