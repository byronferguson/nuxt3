<script setup lang="ts">
import { ExclamationCircleIcon } from '@heroicons/vue/20/solid';
import type { ZodString, ZodError, ZodNumber } from 'zod';

export type TextInputProps = {
  modelValue: string | number;
  name: string;
  placeholder?: string;
  label?: string;
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url';
  schema?: ZodString | ZodNumber;
};

const { modelValue, type = 'string', schema } = defineProps<TextInputProps>();
const emit = defineEmits<{
  'update:modelValue': [value: string | number];
}>();

const localValue = computed({
  get: () => modelValue,
  set: (value: string | number) => emit('update:modelValue', value),
});
const errorMessage = ref<string>('');

function onInput(e: Event) {
  const value = (e.target as HTMLInputElement).value;
  localValue.value = value;

  if (!schema) return;

  if (!value) return (errorMessage.value = '');

  try {
    schema.parse(value);
    errorMessage.value = '';
  } catch (error) {
    errorMessage.value = (error as ZodError).issues.map(e => e.message).join(', ');
  }
}
</script>

<template>
  <div>
    <label v-if="label" :for="name" class="block text-sm font-medium leading-6 text-gray-900">
      {{ label }}
    </label>
    <div class="relative mt-2 rounded shadow-sm">
      <input
        :id="name"
        :type="type"
        :name="name"
        :placeholder="placeholder"
        :value="localValue"
        autocomplete="off"
        :aria-invalid="!!errorMessage"
        :aria-describedby="`${name}-error`"
        class="block w-full rounded border-0 px-2 py-1.5 shadow-sm ring-1 ring-inset focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
        :class="{
          'text-gray-900 ring-gray-300 placeholder:text-gray-400 focus:ring-indigo-600 focus-visible:outline-none':
            !errorMessage,
          'text-secondary-900 ring-secondary placeholder:text-secondary-300 focus:ring-secondary focus-visible:outline-none':
            errorMessage,
        }"
        @input="onInput"
      />
      <div
        v-if="errorMessage"
        class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
      >
        <ExclamationCircleIcon class="w-5 h-5 text-red-500" aria-hidden="true" />
      </div>
    </div>
    <p :id="`${name}-error`" class="mt-2 text-sm text-red-600">{{ errorMessage }}</p>
  </div>
</template>
