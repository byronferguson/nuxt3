<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-100',
  },
  bodyAttrs: {
    class: 'h-full',
  },
});
</script>

<template>
  <div class="min-h-screen bg-dark-primary">
    <slot />
    <PageFooter />
  </div>
</template>
