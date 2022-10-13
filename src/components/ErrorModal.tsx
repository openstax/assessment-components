import Button from "./Button";
import { Modal, ModalBody, ModalBodyHeading, ModalFooter, ModalPropTypes } from "./Modal";

type ErrorModalProps = Omit<ModalPropTypes, 'variant' | 'heading'>;

export const ErrorModal = (props: ErrorModalProps) => {
  return <Modal {...props} variant='error' heading='Error'>
    <ModalBody>
      <ModalBodyHeading>Uh-oh, there's been a glitch</ModalBodyHeading>
      We're not quite sure what went wrong. Restart your browser. If this doesn't solve
      the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
    </ModalBody>
    <ModalFooter><Button onClick={props.onModalClose}>OK</Button></ModalFooter>
  </Modal>;
};
