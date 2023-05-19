import { AbilityTuple } from '@casl/ability';
import { AbilityMeta } from '~/schemas/Ability';

export default defineNuxtRouteMiddleware(async to => {
  if (to.path.startsWith('/login')) return;

  try {
    const authStore = useAuthStore();
    if (!authStore.token) throw new Error('No token');
    await $fetch('/api/auth/hello');
  } catch (err) {
    console.error('Invalid token');
    return navigateTo('/login');
  }

  const { abilities } = to.meta?.meta ?? {};

  if (!abilities) return;

  if (!canAccessView(abilities))
    return abortNavigation({
      message: "You don't have access to this page.",
      statusCode: 401,
    });
});

function parseAbilitiesMeta(meta: AbilityMeta) {
  if (Array.isArray(meta)) {
    return {
      operator: 'and',
      abilities: meta,
    };
  }

  const operator = meta.or ? 'or' : meta.and ? 'and' : undefined;

  if (!operator) throw new Error('No Abilities operator found');

  return {
    operator,
    abilities: [...(meta?.[operator] ?? [])],
  };
}

function checkAbilities(operator: string, abilities: AbilityTuple[]) {
  const { vueApp } = useNuxtApp();
  const can = vueApp.config.globalProperties.$can;

  return operator === 'or'
    ? abilities.some(([action, subject]: AbilityTuple) => can(action, subject))
    : abilities.every(([action, subject]: AbilityTuple) => can(action, subject));
}

function canAccessView(meta: AbilityMeta) {
  const { operator, abilities } = parseAbilitiesMeta(meta);

  return checkAbilities(operator, abilities);
}
