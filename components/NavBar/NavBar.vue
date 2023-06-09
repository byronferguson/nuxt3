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
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

type NavBarMenuItem = {
  name: string;
  to: string;
};
type NavBarMenuItems = NavBarMenuItem[];
type NavBarItem = { name: string; to?: string; icon: string; navigation?: NavBarMenuItems };
type NavBar = NavBarItem[];

const locationId = 10;
const now = new Date();
now.setSeconds(0);
now.setMilliseconds(0);
const year = now.getFullYear();
const [today, timeWithTz] = now.toISOString().split('T');
const [time] = timeWithTz.split('.');

const authStore = useAuthStore();

const user = computedEager(() => authStore.user);
const defaultLocationId = computedEager(() => user.value?.defaultLocationId ?? 0);
const photoUrl = computedEager(() => user.value?.employee?.photoUrl ?? '/images/profile.jpg');

const divider: NavBarMenuItem = { name: 'divider', to: '#' };

const scheduleNavigation: NavBarMenuItems = [
  {
    name: 'Booking Dashboard',
    to: '/schedule/booking-dashboard',
  },
  { name: 'Shift Dashboard', to: '/schedule/shift-dashboard' },
  divider,
  {
    name: 'Regular Schedule',
    to: `/schedule/${defaultLocationId.value}/${today}`,
  },
  {
    name: 'Check-in',
    to: `/schedule/check-in/${defaultLocationId.value}/${today}/${time}`,
  },
  {
    name: 'Staff Schedule',
    to: `/schedule/staff/${defaultLocationId.value}/${today}/all`,
  },
  { name: 'divider', to: '#' },
  {
    name: 'Absence Report',
    to: `/reports/absence/${defaultLocationId.value}/${today}`,
  },
  divider,
  {
    name: 'Schedule Suppressions',
    to: `/schedule/suppressions/${defaultLocationId.value}/${year}`,
  },
  {
    name: 'Assign Trial Lessons',
    to: `/schedule/assign-trial-lessons/${defaultLocationId.value}/${today}`,
  },
];

const crmNavigation: NavBarMenuItems = [
  { name: 'All Tickets', to: '/crm' },
  { name: 'My Tickets', to: '/crm?me=true' },
];

const staffNavigation: NavBarMenuItems = [
  {
    name: 'Week Schedule - By Employee',
    to: `/staff/schedule/week/by-employee/${defaultLocationId.value}/${today}`,
  },
  {
    name: 'Week Schedule - By Position',
    to: `/staff/schedule/week/by-position/${defaultLocationId.value}/${today}`,
  },
  {
    name: 'Day Schedule',
    to: `/staff/schedule/day/${defaultLocationId.value}/${today}`,
  },
  divider,
  {
    name: 'Substitutes Schedule',
    to: `/staff/schedule/substitutes/${defaultLocationId.value}/${today}`,
  },
  {
    name: 'Check-in',
    to: `/staff/schedule/check-in/${defaultLocationId.value}/${today}`,
  },
  divider,
  { name: 'Employees', to: `/staff/${defaultLocationId.value}` },
  {
    name: 'Hours',
    to: `/staff/schedule/hours/${defaultLocationId.value}/${today}`,
  },
  { name: 'PTO Requests', to: `/staff/pto/requests` },
];

const toolsNavigation: NavBarMenuItems = [
  {
    name: 'Receipt Submission',
    to: '/tools/receipt-submission',
  },
  { name: 'Request to Order', to: '/tools/request-to-order' },
  divider,
  { name: 'Listen360', to: '/tools/listen360' },
  divider,
  { name: 'Current Pricing', to: '/tools/current-pricing' },
  divider,
  {
    name: 'Retail Calendar',
    to: `/tools/retail-calendar/${year}`,
  },
  divider,
  { name: 'Import Leads', to: '/tools/import-leads' },
  divider,
  { name: 'Manage Products & Inventory', to: '#' },
  { name: 'Manage Lesson Voucher Pricing', to: '#' },
  { name: 'Manage Product Categories', to: '#' },
  { name: 'Manage Product Attributes', to: '#' },
];

const settingsNavigation: NavBarMenuItems = [
  { name: 'General', to: '#' },
  { name: 'Locations', to: '#' },
];

const navigation: NavBar = [
  { name: 'Families', to: '/families', icon: 'address-book' },
  { name: 'Schedule', navigation: scheduleNavigation, icon: 'calendar' },
  { name: 'CRM', navigation: crmNavigation, icon: 'comment' },
  { name: 'Staff', navigation: staffNavigation, icon: 'users' },
  { name: 'Tools', navigation: toolsNavigation, icon: 'wrench' },
  { name: 'Reports', to: '/reports', icon: 'chart-bar' },
  {
    name: 'Check-in',
    to: `/schedule/check-in/${locationId}/${today}/${time}`,
    icon: 'check',
  },
  { name: 'POS', to: '/pos', icon: 'cash-register' },
];

const rightNavigation: NavBar = [
  { name: '', to: '#', navigation: settingsNavigation, icon: 'cog' },
  { name: '', to: '/support', icon: 'question-circle' },
];

const userNavigation: NavBarMenuItems = [
  { name: 'Profile', to: '/staff/me' },
  { name: 'Sign out', to: '#' },
];
</script>

<template>
  <Disclosure v-slot="{ close, open }" as="nav" class="bg-dark-primary">
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
          <div class="hidden ipad-h:block">
            <div class="flex items-center ml-10 space-x-4">
              <template v-for="item in navigation" :key="item.name">
                <NavBarItem v-if="!item.navigation" :item="item" />
                <NavBarMenu v-else :item="item" />
              </template>
            </div>
          </div>
        </div>

        <div class="hidden ipad-h:block">
          <div class="flex items-center ml-4 md:ml-6">
            <div class="hidden ipad-h:block">
              <div class="flex items-center ml-10 space-x-4">
                <template v-for="item in rightNavigation" :key="item.name">
                  <NavBarItem v-if="!item.navigation" :item="item" />
                  <NavBarMenu v-else :item="item" />
                </template>
              </div>
            </div>

            <!-- Profile dropdown -->
            <Menu as="div" class="relative ml-3">
              <div>
                <MenuButton
                  class="flex items-center max-w-xs text-sm rounded-full bg-dark-primary focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                >
                  <span class="sr-only">Open user menu</span>
                  <img class="w-8 h-8 rounded-full" :src="photoUrl" alt="" />
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
                  class="absolute right-0 z-10 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg w-36 ring-1 ring-black ring-opacity-5 focus:outline-none"
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

        <div class="flex -mr-2 ipad-h:hidden">
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

    <DisclosurePanel class="ipad-h:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <NavBarMobile :items="[...navigation, ...rightNavigation]" :close-menu="close" />
      </div>
      <div class="pt-4 pb-3 border-t border-indigo-700">
        <div class="flex items-center px-5">
          <div class="flex-shrink-0">
            <img class="w-10 h-10 rounded-full" :src="photoUrl" alt="" />
          </div>
          <div class="ml-3">
            <div class="text-base font-medium text-white">{{ user?.fullName }}</div>
            <div class="text-sm font-medium text-indigo-300">
              {{ user?.employee?.emailAddress }}
            </div>
          </div>
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
