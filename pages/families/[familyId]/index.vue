<script lang="ts" setup>
const route = useRoute();

const familyId = computed(() => route.params.familyId);
const title = computed(() => `Family ${familyId.value}`);
</script>

<template>
  <PageContent>
    <template #header>
      <PageHeading :title="title"></PageHeading>
    </template>
  </PageContent>
</template>
