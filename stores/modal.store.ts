import { acceptHMRUpdate, defineStore } from 'pinia';

type OpenModalPayload = {
  component: Component | null;
  props?: Record<string, unknown>;
};

type ModalState = {
  modalState: OpenModalPayload;
};

const basicState: OpenModalPayload = { component: null, props: {} };

export const useModalStore = defineStore('modal', {
  state: () =>
    ({
      modalState: basicState,
    } as ModalState),
  getters: {},
  actions: {
    openModal(payload: OpenModalPayload) {
      const { component, props = {} } = payload;

      this.modalState = { component, props };
    },

    closeModal() {
      console.log('close modal');
      this.modalState = basicState;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useModalStore, import.meta.hot));
}
