<script lang="ts" setup>
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue';
import { Bars3Icon, BellIcon, ChevronDownIcon, XMarkIcon } from '@heroicons/vue/24/outline';

const locationId = 10;
const now = new Date();
now.setSeconds(0);
now.setMilliseconds(0);
const year = now.getFullYear();
const [today, timeWithTz] = now.toISOString().split('T');
const [time] = timeWithTz.split('.');

const user = {
  name: 'Byron Ferguson',
  email: 'byron@bigblueswimschool.com',
  imageUrl: '/images/profile.jpg',
};

const scheduleNavigation = [
  {
    name: 'Booking Dashboard',
    to: '/schedule/booking-dashboard',
    icon: 'bell-icon',
    current: false,
  },
  { name: 'Shift Dashboard', to: '/schedule/shift-dashboard', icon: 'bell-icon', current: false },
  { name: 'divider' },
  {
    name: 'Regular Schedule',
    to: `/schedule/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  {
    name: 'Check-in',
    to: `/schedule/check-in/${locationId}/${today}/${time}`,
    icon: 'bell-icon',
    current: false,
  },
  {
    name: 'Staff Schedule',
    to: `/schedule/staff/${locationId}/${today}/all`,
    icon: 'bell-icon',
    current: false,
  },
  { name: 'divider' },
  {
    name: 'Absence Report',
    to: `/reports/absence/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  { name: 'divider' },
  {
    name: 'Schedule Suppressions',
    to: `/schedule/suppressions/${locationId}/${year}`,
    icon: 'bell-icon',
    current: false,
  },
  {
    name: 'Assign Trial Lessons',
    to: `/schedule/assign-trial-lessons/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
];

const crmNavigation = [
  { name: 'All Tickets', to: '/crm', icon: 'bell-icon', current: false },
  { name: 'My Tickets', to: '/crm?me=true', icon: 'bell-icon', current: false },
];

const staffNavigation = [
  {
    name: 'Week Schedule - By Employee',
    to: `/staff/schedule/week/by-employee/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  {
    name: 'Week Schedule - By Position',
    to: `/staff/schedule/week/by-position/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  {
    name: 'Day Schedule',
    to: `/staff/schedule/day/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  { name: 'divider' },
  {
    name: 'Substitutes Schedule',
    to: `/staff/schedule/substitutes/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  {
    name: 'Check-in',
    to: `/staff/schedule/check-in/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  { name: 'divider' },
  { name: 'Employees', to: `/staff/${locationId}`, icon: 'bell-icon', current: false },
  {
    name: 'Hours',
    to: `/staff/schedule/hours/${locationId}/${today}`,
    icon: 'bell-icon',
    current: false,
  },
  { name: 'PTO Requests', to: `/staff/pto/requests`, icon: 'bell-icon', current: false },
];

const toolsNavigation = [
  {
    name: 'Receipt Submission',
    to: '/tools/receipt-submission',
    icon: 'bell-icon',
    current: false,
  },
  { name: 'Request to Order', to: '/tools/request-to-order', icon: 'bell-icon', current: false },
  { name: 'divider' },
  { name: 'Listen360', to: '/tools/listen360', icon: 'bell-icon', current: false },
  { name: 'divider' },
  { name: 'Current Pricing', to: '/tools/current-pricing', icon: 'bell-icon', current: false },
  { name: 'divider' },
  {
    name: 'Retail Calendar',
    to: `/tools/retail-calendar/${year}`,
    icon: 'bell-icon',
    current: false,
  },
  { name: 'divider' },
  { name: 'Import Leads', to: '/tools/import-leads', icon: 'bell-icon', current: false },
  { name: 'divider' },
  { name: 'Manage Products & Inventory', to: '#', icon: 'bell-icon', current: false },
  { name: 'Manage Lesson Voucher Pricing', to: '#', icon: 'bell-icon', current: false },
  { name: 'Manage Product Categories', to: '#', icon: 'bell-icon', current: false },
  { name: 'Manage Product Attributes', to: '#', icon: 'bell-icon', current: false },
];

const settingsNavigation = [
  { name: 'General', to: '#', icon: 'bell-icon', current: false },
  { name: 'Locations', to: '#', icon: 'bell-icon', current: false },
];

const navigation = [
  { name: 'Families', to: '/families', current: true },
  { name: 'Schedule', current: false, navigation: scheduleNavigation },
  { name: 'CRM', current: false, navigation: crmNavigation },
  { name: 'Staff', current: false, navigation: staffNavigation },
  { name: 'Tools', current: false, navigation: toolsNavigation },
  { name: 'Reports', to: '/reports', current: false },
  { name: 'Check-in', to: `/schedule/check-in/${locationId}/${today}/${time}`, current: false },
  { name: 'POS', to: '/pos', current: false },
];

const rightNavigation = [
  { name: 'Settings', to: '#', current: false, navigation: settingsNavigation },
  { name: 'Support', to: '/support', current: false },
];

const userNavigation = [
  { name: 'Profile', to: '/staff/me' },
  { name: 'Sign out', to: '#' },
];
</script>

<template>
  <Disclosure v-slot="{ open }" as="nav" class="bg-dark-primary">
    <div class="px-4 mx-auto sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <NuxtLink to="/">
              <img
                class="w-12 h-12"
                src="~/assets/images/BB_Logo_Icon_RGB_White.png"
                alt="LessonBuddy Logo"
              />
            </NuxtLink>
          </div>
          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-4">
              <template v-for="item in navigation" :key="item.name">
                <!-- Single Action Nav Item -->
                <NuxtLink
                  v-if="!item.navigation"
                  :to="item.to"
                  :class="[
                    item.current
                      ? 'bg-light-primary'
                      : 'text-white hover:bg-medium-primary hover:bg-opacity-75',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  {{ item.name }}
                </NuxtLink>
                <!-- Multi-Action Nav Item -->
                <Menu v-else as="div" class="relative">
                  <div>
                    <MenuButton
                      :class="[
                        item.current
                          ? 'bg-light-primary'
                          : 'text-white hover:bg-medium-primary hover:bg-opacity-75',
                        'flex flex-row',
                        'rounded-md px-3 py-2 text-sm font-medium',
                        'focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600',
                      ]"
                    >
                      {{ item.name }}
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
                      class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                    >
                      <template v-for="subItem in item.navigation" :key="subItem.name">
                        <hr v-if="subItem.name === 'divider'" />
                        <MenuItem v-else v-slot="{ active, close }" as="div">
                          <NuxtLink
                            :to="subItem.to"
                            :class="[
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700',
                            ]"
                            @click="close"
                          >
                            {{ subItem.name }}
                          </NuxtLink>
                        </MenuItem>
                      </template>
                    </MenuItems>
                  </transition>
                </Menu>
              </template>
            </div>
          </div>
        </div>

        <div class="hidden md:block">
          <div class="flex items-center ml-4 md:ml-6">
            <div class="hidden md:block">
              <div class="flex items-baseline ml-10 space-x-4">
                <a
                  v-for="item in rightNavigation"
                  :key="item.name"
                  :to="item.to"
                  :class="[
                    item.current
                      ? 'bg-light-primary'
                      : 'text-white hover:bg-medium-primary hover:bg-opacity-75',
                    'rounded-md px-3 py-2 text-sm font-medium',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex items-center max-w-xs text-sm rounded-full bg-dark-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                >
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" :src="user.imageUrl" alt="" />
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
                  class="absolute right-0 z-10 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                >
                  <MenuItem
                    v-for="item in userNavigation"
                    :key="item.name"
                    v-slot="{ active, close }"
                    as="div"
                  >
                    <NuxtLink
                      :to="item.to"
                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block px-4 py-2 text-sm text-gray-700',
                      ]"
                      @click="close"
                    >
                      {{ item.name }}
                    </NuxtLink>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 text-indigo-200 rounded-md bg-dark-primary hover:bg-medium-primary hover:bg-opacity-75 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block w-6 h-6" aria-hidden="true" />
            <XMarkIcon v-else class="block w-6 h-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="md:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :to="item.to"
          :class="[
            item.current
              ? 'bg-indigo-700 text-white'
              : 'text-white hover:bg-medium-primary hover:bg-opacity-75',
            'block rounded-md px-3 py-2 text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
      <div class="pt-4 pb-3 border-t border-indigo-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" :src="user.imageUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">{{ user.name }}</div>
            <div class="text-sm font-medium text-indigo-300">{{ user.email }}</div>
          </div>
          <button
            type="button"
            class="flex-shrink-0 p-1 ml-auto text-indigo-200 rounded-full bg-dark-primary hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="px-2 mt-3 space-y-1">
          <DisclosureButton
            v-for="item in userNavigation"
            :key="item.name"
            as="a"
            :to="item.to"
            class="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-medium-primary hover:bg-opacity-75"
            >{{ item.name }}</DisclosureButton
          >
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>
