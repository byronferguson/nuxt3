<script lang="ts" setup>
import { ref } from 'vue';
import VueDatePicker from '@vuepic/vue-datepicker';
import type { VueDatePickerProps } from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css';
import { endOfMonth, endOfYear, startOfMonth, startOfYear, subMonths } from 'date-fns';

const date = ref();

type PresetRanges = VueDatePickerProps['presetRanges'];

const presetRanges = [
  { label: 'Today', range: [new Date(), new Date()] },
  { label: 'This month', range: [startOfMonth(new Date()), endOfMonth(new Date())] },
  {
    label: 'Last month',
    range: [startOfMonth(subMonths(new Date(), 1)), endOfMonth(subMonths(new Date(), 1))],
  },
  { label: 'This year', range: [startOfYear(new Date()), endOfYear(new Date())] },
  {
    label: 'This year (slot)',
    range: [startOfYear(new Date()), endOfYear(new Date())],
    slot: 'yearly',
  },
] as PresetRanges;
</script>

<template>
  <VueDatePicker v-model="date" week-start="0" range :preset-ranges="presetRanges"> </VueDatePicker>
  {{ date }}
</template>
