<script setup lang="ts">
const modalStore = useModalStore();
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
        v-if="modalStore.modalState?.component"
        class="modal-wrapper"
        @click.self="modalStore.closeModal"
      >
        <component :is="modalStore.modalState?.component" v-bind="modalStore.modalState?.props" />
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: 0.25s ease all;
}

.modal-wrapper {
  position: fixed;
  left: 0;
  top: 0;

  z-index: 500;

  width: 100vw;
  height: 100vh;

  background: rgba(0, 0, 0, 0.2);

  display: grid;
  place-items: center;
}
</style>
