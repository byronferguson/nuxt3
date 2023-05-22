<script lang="ts" setup></script>

<template>
  <DialogPanel
    class="w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl"
  >
    <DialogTitle v-if="$slots.title" as="h3" class="text-lg font-medium leading-6 text-gray-900">
      <slot name="title" />
    </DialogTitle>
    <slot />
  </DialogPanel>
</template>
