<script setup lang="ts">
defineProps<{
  title: string;
}>();

const modalStore = useModalStore();
</script>

<template>
  <ModalBase>
    <template #title>
      <h2 class="text-3xl font-bold">{{ title }}</h2>
    </template>

    <div class="mt-2">
      <p class="text-sm text-gray-500">
        Your payment has been successfully submitted. We’ve sent you an email with all of the
        details of your order.
      </p>
    </div>

    <div class="mt-4">
      <button
        type="button"
        class="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
        @click="modalStore.closeModal"
      >
        Got it, thanks!
      </button>
    </div>
  </ModalBase>
</template>
