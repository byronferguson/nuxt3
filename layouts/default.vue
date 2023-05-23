<script setup lang="ts">
useHead({
  htmlAttrs: {
    class: 'h-full bg-dark-primary',
  },
  bodyAttrs: {
    class: 'bg-slate-200',
  },
});
</script>

<template>
  <div class="min-h-screen">
    <NavBar />

    <div
      class="flex flex-col py-6 mx-auto max-w-screen-minus-padding sm:px-6 lg:px-8 min-h-screen-minus-nav gap-y-4"
    >
      <main class="flex-grow">
        <slot />
      </main>
      <ModalWindow />
      <PageFooter />
    </div>
  </div>
</template>

<style lang="postcss">
.min-h-screen-minus-nav {
  min-height: calc(100vh - 64px);
}

.max-w-screen-minus-padding {
  max-width: calc(100vw - 2rem);
}
</style>
