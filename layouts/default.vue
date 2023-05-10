<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'h-full bg-gray-100',
  },
  bodyAttrs: {
    class: 'h-full',
  },
});

const version = useRuntimeConfig().public.VERSION;
const year = new Date().getFullYear();
</script>

<template>
  <div class="min-h-screen">
    <NavBar />

    <div class="flex flex-col py-6 mx-auto max-w-7xl sm:px-6 lg:px-8 min-h-screen-minus-nav">
      <main class="flex-grow">
        <slot />
      </main>
      <footer
        class="container px-12 mx-auto mt-6 mb-0 text-sm font-semibold text-right text-gray-600"
      >
        v{{ version }}-N &copy; {{ year }} Big Blue Swim School LLC
      </footer>
    </div>
  </div>
</template>

<style lang="postcss" scoped>
.min-h-screen-minus-nav {
  min-height: calc(100vh - 64px);
}
</style>
