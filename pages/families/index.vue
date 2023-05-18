<script setup lang="ts">
definePageMeta({
  meta: {
    abilities: [['view', 'families']],
  },
});

const pages = [{ name: 'Families', href: '#', current: true }];
</script>

<template>
  <PageContent>
    <template #breadcrumbs>
      <Breadcrumbs :pages="pages" />
    </template>
    <template #header>
      <PageHeading title="Families" icon="users">
        <Button color="success">
          <fa :icon="['fas', 'plus']" />
          Add New Family
        </Button>
      </PageHeading>
    </template>

    <main>Here is the main body of the page</main>
  </PageContent>
</template>
