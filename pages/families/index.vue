<script setup lang="ts">
definePageMeta({
  layout: false,
  meta: {
    abilities: [['view', 'families']],
  },
});
</script>

<template>
  <div>
    <NuxtLayout name="with-heading">
      <template #heading>Families</template>
      <h1 class="text-2xl">Family Body</h1>
    </NuxtLayout>
  </div>
</template>
