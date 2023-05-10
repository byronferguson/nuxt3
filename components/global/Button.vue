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
  @apply px-3 py-1 rounded;
}

.primary {
  @apply bg-dark-primary text-white;
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
  @apply bg-gold text-black;
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
