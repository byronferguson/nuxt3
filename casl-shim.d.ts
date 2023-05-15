import { AppAbility } from './schemas/Ability';

declare module 'vue' {
  interface ComponentCustomProperties {
    $ability: AppAbility;
    $can(this: this, ...args: Parameters<this['$ability']['can']>): boolean;
  }
}
