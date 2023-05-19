<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'h-full bg-dark-primary',
  },
  bodyAttrs: {
    class: 'h-full',
  },
});
</script>

<template>
  <div class="min-h-screen bg-dark-primary">
    <div class="flex flex-col min-h-screen py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 gap-y-4">
      <main class="flex-grow">
        <slot />
      </main>
      <PageFooter />
    </div>
  </div>
</template>
