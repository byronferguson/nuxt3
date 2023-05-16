<script lang="ts" setup>
const version = useRuntimeConfig().public.VERSION;
const year = new Date().getFullYear();
</script>

<template>
  <footer class="container px-12 mx-auto mt-6 mb-0 text-sm font-semibold text-right text-gray-600">
    v{{ version }}-N &copy; {{ year }} Big Blue Swim School LLC
  </footer>
</template>
