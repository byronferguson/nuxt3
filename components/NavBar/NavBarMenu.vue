<script lang="ts" setup>
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

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
  <Menu as="div" class="relative">
    <div>
      <MenuButton
        :class="[
          'text-white hover:bg-medium-primary hover:bg-opacity-75',
          'flex flex-row',
          'rounded-md px-3 py-2 text-sm font-medium',
          'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600',
        ]"
      >
        <fa v-if="item.icon" :icon="['fas', item.icon]" class="inline-block mr-1 text-lg" />
        <span v-if="item.name" class="hidden ipad-v:block imac:block">{{ item.name }}</span>
        <ChevronDownIcon
          class="w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100"
          aria-hidden="true"
        />
      </MenuButton>
    </div>
    <transition
      enter-active-class="transition duration-100 ease-out"
      enter-from-class="transform scale-95 opacity-0"
      enter-to-class="transform scale-100 opacity-100"
      leave-active-class="transition duration-75 ease-in"
      leave-from-class="transform scale-100 opacity-100"
      leave-to-class="transform scale-95 opacity-0"
    >
      <MenuItems
        class="absolute left-0 z-10 w-64 py-1 mt-2 origin-top-left bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
      >
        <template v-for="subItem in item.navigation" :key="subItem.name">
          <hr v-if="subItem.name === 'divider'" />
          <MenuItem v-else v-slot="{ active, close }" as="div">
            <NuxtLink
              :to="subItem.to"
              :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']"
              @click="close"
            >
              <span>{{ subItem.name }}</span>
            </NuxtLink>
          </MenuItem>
        </template>
      </MenuItems>
    </transition>
  </Menu>
</template>

<style lang="postcss" scoped>
.router-link-active {
  background-color: #6366f1;
  color: #fff;
}

.router-link-exact-active {
  background-color: #6366f1;
  color: #fff;
}
</style>
