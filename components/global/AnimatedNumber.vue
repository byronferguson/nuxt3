<script lang="ts" setup>
import { executeTransition } from '@vueuse/core';

const {
  start = 0,
  end,
  scale = 0,
  duration = 2000,
} = defineProps<{
  start?: number;
  end: number;
  scale?: number;
  duration?: number;
}>();

const source = ref(0);

const scaledSource = computed(() => source.value.toFixed(scale));

const isNegative = computed(() => source.value < 0);

if (!Number.isNaN(end)) {
  executeTransition(source, start, end, {
    duration,
  });
}
</script>

<template>
  <slot :current-value="scaledSource" :is-negative="isNegative" />
</template>
