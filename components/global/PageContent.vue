<script setup lang="ts">
const { container = true } = defineProps<{
  container?: boolean;
}>();

const containerClass = computed(() => {
  return {
    'px-4 py-3 bg-white rounded-md': container,
  };
});
</script>

<template>
  <nav v-if="$slots.breadcrumbs" class="mb-2">
    <slot name="breadcrumbs" />
  </nav>
  <header v-if="$slots.header" class="mb-4">
    <slot name="header" />
  </header>
  <main :class="containerClass">
    <slot />
  </main>
</template>
