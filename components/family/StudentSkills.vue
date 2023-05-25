<script lang="ts" setup>
import { Skill } from '~/schemas/Skill';

defineProps<{
  skills: Skill[];
}>();

function SkillStarCompleted() {
  return h(
    'fa',
    {
      icon: ['fas', 'star'],
      class: ['text-secondary'],
    },
    [],
  );
}

function SkillStarIncomplete() {
  return h(
    'fa',
    {
      icon: ['far', 'star', 'lg'],
      class: ['text-secondary'],
    },
    [],
  );
}
</script>

<template>
  <div class="flex flex-row justify-end">
    <fa
      v-for="skill in skills"
      :key="skill.id"
      :icon="skill.completed ? ['fas', 'star'] : ['far', 'star']"
      class="text-xl text-secondary"
    />
  </div>
</template>
