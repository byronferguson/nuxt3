<script setup lang="ts">
defineProps<{
  title: string;
  icon?: string;
}>();
</script>

<template>
  <header class="flex flex-row items-end">
    <h1 class="flex-grow text-2xl font-semibold leading-none uppercase text-medium-primary">
      <fa v-if="icon" :icon="['fas', icon]" class="mr-1" /> {{ title }}
    </h1>
    <slot />
  </header>
</template>
