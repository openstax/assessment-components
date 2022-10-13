import { Modal } from './Modal';
import { ErrorModal } from './ErrorModal';
import { useState } from 'react';

export const Default = () => {
  const [show, setShow] = useState(true);
  return <Modal heading='test' onModalClose={() => setShow(false)} show={show}>
    Message
  </Modal>;
};

export const Error = () => {
  const [show, setShow] = useState(true);
  return <ErrorModal heading='test' onModalClose={() => setShow(false)} show={show}>
    Message
  </ErrorModal>;
};
