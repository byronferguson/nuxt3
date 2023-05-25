<script lang="ts" setup>
import { Student } from '~/schemas/Student';

const SIDEBAR_BY_CURRICULUM = {
  0: 'border-l-gray-200',
  1: 'border-l-baby-blue',
  2: 'border-l-bright-blue',
  3: 'border-l-bold-blue',
  4: 'border-l-big-blue',
} as Record<number, string>;

// const BG_BY_CURRICULUM = {
//   1: 'bg-baby-blue text-white',
//   2: 'bg-bright-blue text-gray-800',
//   3: 'bg-bold-blue text-gray-800',
//   4: 'bg-big-blue text-white',
// } as Record<number, string>;

const { student } = defineProps<{
  student: Student;
}>();

const fullName = computed(() => {
  return `${student.firstName} ${student.lastName}`;
});

const { data: progressData } = useFetch(`/api/students/${student.id}/progress`);

const sidebar = computed(() => SIDEBAR_BY_CURRICULUM[progressData.value?.level?.curriculumId ?? 0]);

// const curriculumBackground = computed(
//   () => BG_BY_CURRICULUM[progressData.value.level.curriculumId],
// );
</script>

<template>
  <div :class="`border border-l-8 rounded-md bg-white border-black/25 ${sidebar}`">
    <!-- <div class="overflow-hidden bg-white rounded-md shadow"> -->
    <div class="px-2 py-1 grid grid-cols-[2fr_1fr] grid-rows-3 grid-flow-col items-center">
      <div class="text-lg font-medium">{{ fullName }}</div>
      <div class="text-sm italic">{{ student.age }} years</div>
      <div class="">{{ 22 }} @ {{ progressData?.level?.abbreviation }}</div>
      <FamilyStudentSkills :skills="progressData?.skills ?? []" />
      <div>MV: 22</div>
    </div>
    <!-- <pre>{{ progressData }}</pre> -->
  </div>
</template>
