<script lang="ts" setup>
interface ButtonProps {
  /**
   * Button "type" attribute
   */
  type?: 'button' | 'submit' | 'reset';
  /**
   * Background color of the button
   */
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}

withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  color: 'primary',
});
</script>

<template>
  <button :type="type" class="btn" :class="color">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply px-4 py-2 font-medium rounded text-base;

  &:focus {
    @apply outline-none;
  }
}

.primary {
  @apply bg-dark-primary text-white;

  &:hover {
    @apply bg-dark-primary-700;
  }
}

.secondary {
  @apply bg-medium-primary text-white;

  &:hover {
    @apply bg-medium-primary-700;
  }

  &:disabled {
    @apply bg-medium-primary-300 text-gray-500;
  }
}

.success {
  @apply bg-green-600 text-white;

  &:hover {
    @apply bg-green-700;
  }
}

.danger {
  @apply bg-secondary text-white;
}

.warning {
  @apply bg-sunglow text-black;
}

.info {
  @apply bg-light-primary text-black;
}

.light {
  @apply bg-gray-200 text-black;
}

.dark {
  @apply bg-gray-800 text-white;
}
</style>
