export const OPEN_MODAL = 'OPEN_MODAL';
export const OPEN_MODAL_WITH_PROPS = 'OPEN_MODAL_WITH_PROPS';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const openModal = (modal) => ({
  type: OPEN_MODAL,
  modal
});

export const openModalWithProps = (modal, modalProps) => ({
  type: OPEN_MODAL_WITH_PROPS,
  modal,
  modalProps
});

export const closeModal = () => ({
  type: CLOSE_MODAL
});