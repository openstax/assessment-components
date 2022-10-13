import Button from "./Button";
import { Body, BodyHeading, Footer, Modal, ModalPropTypes } from "./Modal";

type ErrorModalProps = Omit<ModalPropTypes, 'variant' | 'heading'>;

export const ErrorModal = (props: ErrorModalProps) => {
  return <Modal {...props} variant='error' heading='Error'>
    <Body>
      <BodyHeading>Uh-oh, there's been a glitch</BodyHeading>
      We're not quite sure what went wrong. Restart your browser. If this doesn't solve
      the problem, visit our <a href="https://openstax.secure.force.com/help" target="_blank">Support Center</a>.
    </Body>
    <Footer><Button onClick={props.onModalClose}>OK</Button></Footer>
  </Modal>;
};
