<script lang="ts" setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import { ChevronDownIcon } from '@heroicons/vue/24/outline';

type NavBarMenuItem = {
  name: string;
  to: string;
};
type NavBarMenuItems = NavBarMenuItem[];
type NavBarItem = { name: string; to?: string; icon: string; navigation?: NavBarMenuItems };
type NavBar = NavBarItem[];

defineProps<{
  items: NavBar;
  closeMenu: Function;
}>();

const disclosures = ref<Function[]>([]);

function hideOther(activeIdx: number) {
  disclosures.value.filter((_, idx) => idx !== activeIdx).forEach(close => close());
}
</script>

<template>
  <div class="flex flex-col gap-y-1">
    <template v-for="(item, idx) in items" :key="item.name">
      <NavBarItem v-if="!item.navigation" :item="item" @click="() => closeMenu()" />
      <Disclosure v-else v-slot="{ open, close }" as="div" class="relative">
        <div>
          <DisclosureButton
            :ref="_el => (disclosures[idx] = close)"
            :class="[
              'text-white hover:bg-medium-primary hover:bg-opacity-75',
              'flex flex-row',
              'rounded-md px-3 py-2 text-sm font-medium',
              'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600',
              'ipad-v:w-full',
            ]"
            @click="hideOther(idx)"
          >
            <fa v-if="item.icon" :icon="['fas', item.icon]" class="inline-block mr-1 text-lg" />
            <span v-if="item.name" class="hidden ipad-v:block imac:block">{{ item.name }}</span>
            <ChevronDownIcon
              :class="[
                'w-5 h-5 ml-2 -mr-1 text-violet-200 hover:text-violet-100',
                {
                  'transform rotate-180': open,
                },
              ]"
              aria-hidden="true"
            />
          </DisclosureButton>
        </div>

        <DisclosurePanel
          class="w-full py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
        >
          <template v-for="subItem in item.navigation" :key="subItem.name">
            <hr v-if="subItem.name === 'divider'" />
            <NuxtLink
              v-else
              :to="subItem.to"
              :class="['block px-4 py-2 text-sm text-gray-700']"
              @click="closeMenu"
            >
              <span>{{ subItem.name }}</span>
            </NuxtLink>
          </template>
        </DisclosurePanel>
      </Disclosure>
    </template>
  </div>
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
