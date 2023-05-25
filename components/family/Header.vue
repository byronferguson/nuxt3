<script setup lang="ts">
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue';
import { EllipsisVerticalIcon, InformationCircleIcon } from '@heroicons/vue/20/solid';

const stats = [
  { name: 'Total Spend', value: 155592.21, format: 'currency', scale: 2 },
  { name: 'Total Credits', value: 500, format: 'currency' },
  { name: 'Total Refunds', value: 350, format: 'currency' },
  { name: 'Total Make-Ups', value: null },
  { name: 'Balance Due', value: 125.58, format: 'currency', scale: 2 },
  { name: 'Credit Balance', value: -540.1, format: 'currency' },
];
</script>

<template>
  <div class="px-4 text-white rounded-md bg-primary-dark">
    <div class="py-4">
      <div class="header">
        <!-- Family Name + Location -->
        <div class="name">
          <h2 class="text-3xl">Byron Ferguson</h2>
          <span class="flex flex-row mt-1 gap-x-2">
            <a href="#" class="text-light-primary">Wilemette</a>
            <a href="https://app.clickup.com/25527354/v/dc/rb11u-5380/rb11u-1007">
              <InformationCircleIcon class="w-4 h-4 text-sunglow" aria-hidden="true" />
            </a>
          </span>
        </div>

        <!-- Family Stats -->
        <div
          v-for="stat in stats"
          :key="stat.name"
          class="flex flex-col items-center justify-center"
        >
          <h3 class="text-sm text-light-primary">{{ stat.name }}</h3>

          <AnimatedNumber :end="stat.value ?? 0" :scale="stat.scale">
            <template #default="{ currentValue, isNegative }">
              <p class="text-2xl font-medium" :class="{ 'text-secondary': isNegative }">
                {{ $formatValue(currentValue, stat.format, stat.scale) }}
              </p>
            </template>
          </AnimatedNumber>
        </div>

        <!-- Action Menu -->
        <Menu as="div" class="relative inline-block text-left header-actions">
          <div>
            <MenuButton
              class="flex items-center text-gray-400 rounded-full bg-dark-primary hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
            >
              <span class="sr-only">Open options</span>
              <EllipsisVerticalIcon class="w-5 h-5" aria-hidden="true" />
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
              class="absolute right-0 z-10 w-56 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            >
              <div class="py-1">
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Account settings</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >Support</a
                  >
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <a
                    href="#"
                    :class="[
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    ]"
                    >License</a
                  >
                </MenuItem>
                <form method="POST" action="#">
                  <MenuItem v-slot="{ active }">
                    <button
                      type="submit"
                      :class="[
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                      ]"
                    >
                      Sign out
                    </button>
                  </MenuItem>
                </form>
              </div>
            </MenuItems>
          </transition>
        </Menu>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 1fr 1fr 1fr 2rem;
  column-gap: 1rem;
}

.header-actions {
  grid-column: 8;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>
