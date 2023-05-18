<script setup lang="ts">
import { ChevronRightIcon, HomeIcon } from '@heroicons/vue/20/solid';

export type BreadcrumbItem = {
  name: string;
  href: string;
  current: boolean;
};

const home = '/';

defineProps<{
  pages?: BreadcrumbItem[];
}>();
</script>

<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol role="list" class="flex items-center space-x-4">
      <li>
        <div>
          <NuxtLink :to="home" class="text-gray-400 hover:text-gray-500">
            <HomeIcon class="flex-shrink-0 w-5 h-5" aria-hidden="true" />
            <span class="sr-only">Home</span>
          </NuxtLink>
        </div>
      </li>
      <li v-for="page in pages" :key="page.name">
        <div class="flex items-center">
          <ChevronRightIcon class="flex-shrink-0 w-5 h-5 text-gray-400" aria-hidden="true" />
          <NuxtLink
            :to="page.current ? '' : page.href"
            class="ml-4 text-sm font-medium text-gray-500 cursor-pointer"
            :class="{ 'hover:text-gray-700': !page.current, 'text-medium-primary': page.current }"
            :aria-current="page.current ? 'page' : undefined"
            >{{ page.name }}
          </NuxtLink>
        </div>
      </li>
    </ol>
  </nav>
</template>
