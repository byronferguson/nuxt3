<script lang="ts" setup>
import type { TableField } from '~/components/global/Table.vue';

const title = 'Revenue Report';

const fields: TableField[] = [
  {
    title: 'Shift',
    tooltip: '',
  },
  {
    title: 'Baby Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    scale: 2,
    color: 'red',
  },
  {
    title: 'Bright Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    color: 'yellow',
  },
  {
    title: 'Bold Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    color: 'light-blue',
  },
  {
    title: 'Big Blue Rev',
    tooltip: '',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Total Revenue',
    tooltip: '',
    format: 'currencyCompact',
    scale: 2,
  },
];

const data = [
  {
    shiftName: 'Weekend AM',
    babyBlueRevenue: 5500,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 4500,
    bigBlueRevenue: 15000,
    totalRevenue: 1111001,
  },
  {
    shiftName: 'Weekend PM',
    babyBlueRevenue: 0,
    brightBlueRevenue: 25000,
    boldBlueRevenue: 25000,
    bigBlueRevenue: 10000,
    totalRevenue: 60000,
  },
  {
    shiftName: 'Weekday AM',
    babyBlueRevenue: 4000,
    brightBlueRevenue: 8000,
    boldBlueRevenue: 8000,
    bigBlueRevenue: 0,
    totalRevenue: 20000,
  },
  {
    shiftName: 'Weekday PM',
    babyBlueRevenue: 0,
    brightBlueRevenue: 40000,
    boldBlueRevenue: 40000,
    bigBlueRevenue: 20000,
    totalRevenue: 100000,
  },
  {
    shiftName: 'Total',
    babyBlueRevenue: 9000,
    brightBlueRevenue: 113000,
    boldBlueRevenue: 113000,
    bigBlueRevenue: 45000,
    totalRevenue: 280000,
  },
];

const topFields: TableField[] = [
  {
    title: 'Location(s)',
  },
  {
    title: 'Active Revenue',
    subtitle: 'Revenue received on the 1st for lessons occurring this month',
    tooltip: 'Revenue received on the 1st for lessons occurring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'New Revenue',
    subtitle: 'Revenue received mid-month for lesson occurring this month',
    tooltip: 'Revenue received mid-month for lesson occurring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Deferred Revenue',
    subtitle: 'Revenue previously received for lessons occurring this month',
    tooltip: 'Revenue previously received for lessons occurring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Total Revenue',
    subtitle: 'Total revenue received for the lessons occurring this month',
    tooltip: 'Total revenue received for the lessons occurring this month',
    format: 'currencyCompact',
    color: 'blue',
  },
  {
    title: 'Future Revenue',
    subtitle: 'Revenue received mid-month for lessons in future months',
    tooltip: 'Revenue received mid-month for lessons in future months',
    format: 'currencyCompact',
    color: 'yellow',
  },
];

const topData = [
  {
    locationName: '«Location Name»',
    activeRevenue: 250000,
    newRevenue: 20000,
    deferredRevenue: {
      value: 10000,
      tooltip: '$9K Jun $1K May',
    },
    totalRevenue: 280000,
    futureRevenue: 30000,
  },
];
</script>

<template>
  <PageContent>
    <template #heading>{{ title }}</template>
    <Table :fields="topFields" :data="topData" class="mb-16" />
    <Table :fields="fields" :data="data" />
  </PageContent>
</template>
