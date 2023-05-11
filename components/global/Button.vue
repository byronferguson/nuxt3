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

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
});
</script>

<template>
  <button :type="type" class="btn" :class="color">
    <slot />
  </button>
</template>

<style lang="postcss" scoped>
.btn {
  @apply px-4 py-2 font-bold rounded;

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
}

.success {
  @apply bg-green-500 text-white;
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
