<script lang="ts" setup>
const { familyId } = useRoute('families-familyId').params;

const { data } = useFetch(`/api/families/${familyId}/students`);
</script>

<template>
  <div>
    <h1>Students for Family #{{ familyId }}</h1>
    <div class="grid grid-cols-1 gap-2 ipad-v:grid-cols-2 ipad-h:grid-cols-2 imac:grid-cols-2">
      <FamilyStudentCard v-for="student in data" :key="student.id" :student="student" />
    </div>
  </div>
</template>
