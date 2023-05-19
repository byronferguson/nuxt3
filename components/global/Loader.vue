<script setup lang="ts">
interface LoaderProps {
  textColor?: string;
  textSize?: string;
  topMargin?: string;
}

withDefaults(defineProps<LoaderProps>(), {
  textColor: 'medium-primary',
  textSize: '6xl',
  topMargin: '6',
});
</script>

<template>
  <div class="flex items-center justify-center">
    <fa
      :icon="['fas', 'spinner']"
      class="rotate"
      :class="`text-${textColor} text-${textSize} mt-${topMargin}`"
    />
  </div>
</template>

<style lang="postcss" scoped>
.rotate {
  animation-name: spin;
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
