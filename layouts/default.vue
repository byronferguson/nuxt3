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
  <div class="min-h-full">
    <NavBar />

    <header class="bg-white shadow-sm">
      <div class="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 class="text-lg font-semibold leading-6 text-gray-900">
          <slot name="heading">Default</slot>
        </h1>
      </div>
    </header>
    <main class="py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <slot />
    </main>
  </div>
</template>
