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
  <div class="min-h-screen">
    <NavBar />

    <main class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>
