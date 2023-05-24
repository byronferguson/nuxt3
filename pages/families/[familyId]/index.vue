<script lang="ts" setup>
const { familyId } = useRoute('families-familyId').params;

useHead({
  title: `LessonBuddy - Family ${familyId}`,
});

const pages = [
  { name: 'Families', href: '/families', current: false },
  { name: `Family #${familyId}`, href: '#', current: true },
];

const title = computed(() => `Family ${familyId}`);

const { data } = useFetch(`/api/families/${familyId}/students`);
</script>

<template>
  <PageContent :container="false">
    <template #header>
      <Breadcrumbs v-once :pages="pages" />
    </template>
    <FamiliesHeader />

    <FamiliesStudentCard class="mt-4" />
    <pre>{{ data }}</pre>
  </PageContent>
</template>
