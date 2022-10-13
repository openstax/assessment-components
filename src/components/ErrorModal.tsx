import { Modal, ModalPropTypes } from "./Modal";

export const ErrorModal = (props: React.PropsWithChildren<Omit<ModalPropTypes, 'variant'>>) => {
  return <Modal {...props} variant='error' />;
};
