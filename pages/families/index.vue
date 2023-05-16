<script setup lang="ts">
definePageMeta({
  meta: {
    abilities: [['view', 'families']],
  },
});
</script>

<template>
  <PageContent>
    <template #heading>
      <div class="flex flex-row gap-x-3">
        <fa :icon="['fas', 'users']" class="inline-block text-2xl" />Families
        <span class="flex-grow" />
        <Button color="success">
          <fa :icon="['fas', 'plus']" />
          Add New Family
        </Button>
      </div>
    </template>
  </PageContent>
</template>
