<script lang="ts" setup>
type NavBarMenuItem = {
  name: string;
  to: string;
};
type NavBarMenuItems = NavBarMenuItem[];
type NavBarItem = { name: string; to?: string; icon: string; navigation?: NavBarMenuItems };

defineProps<{
  item: NavBarItem;
}>();
</script>

<template>
  <NuxtLink
    v-if="!item.navigation"
    :to="item.to"
    :class="[
      'text-white hover:bg-medium-primary hover:bg-opacity-75',
      'rounded-md px-3 py-2 text-sm font-medium',
    ]"
  >
    <fa v-if="item.icon" :icon="['fas', item.icon]" class="inline-block mr-1 text-lg" />
    <span v-if="item.name" class="hidden imac:block">{{ item.name }}</span>
  </NuxtLink>
</template>
