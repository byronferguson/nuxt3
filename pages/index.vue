<script setup lang="ts">
type Person = {
  id: number;
  name: string;
  email: string;
};

const people = [
  { id: 1, name: 'Wade Cooper', email: 'wade_cooper@inc.com' },
  { id: 2, name: 'Arlene Mccoy', email: 'arlene_mccoy@inc.com' },
  { id: 3, name: 'Devon Webb', email: 'devon_webb@inc.com' },
  { id: 4, name: 'Tom Cook', email: 'tom_cook@inc.com' },
  { id: 5, name: 'Tanya Fox', email: 'tanya_fox@inc.com' },
  { id: 6, name: 'Hellen Schmidt', email: 'hellen_schmidt@inc.com' },
  { id: 7, name: 'Caroline Schultz', email: 'caroline_schultz@inc.com' },
  { id: 8, name: 'Mason Heaney', email: 'mason_heaney@inc.com' },
  { id: 9, name: 'Claudie Smitham', email: 'claudie_smitham@inc.com' },
  { id: 10, name: 'Emil Schaefer', email: 'emil_schaefer@inc.com' },
] as Person[];

const person = ref<Person>();
</script>

<template>
  <PageContent>
    <template #header>
      <PageHeading v-once title="LessonBuddy" />
    </template>

    <DatePicker />

    <Select v-model="person" :options="people" placeholder="Please select a person" />
    {{ person }}
  </PageContent>
</template>
