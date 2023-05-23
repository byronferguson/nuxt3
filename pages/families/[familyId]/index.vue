<script lang="ts" setup>
const { familyId } = useRoute('families-familyId').params;
const pages = [
  { name: 'Families', href: '/families', current: false },
  { name: `Family #${familyId}`, href: '#', current: true },
];

const title = computed(() => `Family ${familyId}`);
</script>

<template>
  <PageContent :container="false">
    <template #header>
      <Breadcrumbs v-once :pages="pages" />
    </template>
    <FamiliesHeader />

    <FamiliesStudentCard />
  </PageContent>
</template>
