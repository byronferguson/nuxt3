<template>
  <PageHeading v-if="$slots.heading" class="mb-4">
    <slot name="heading" />
  </PageHeading>
  <slot />
</template>
