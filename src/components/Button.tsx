import { colors } from "../theme";
import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${colors.button.background};
  color: ${colors.palette.white};
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 2rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 4rem;
  padding: 0 3rem;
  border: 0;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);

  &:not([disabled]) {
    cursor: pointer;
    &:hover {
      background: ${colors.button.backgroundHover}
    }
    &:active {
      background: ${colors.button.backgroundActive}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`;

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isWaiting?: never;
  waitingText?: never;
}
interface WaitingButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  isWaiting: boolean;
  waitingText: string;
}

const Button = (props: ButtonProps | WaitingButtonProps) => {
  const { disabled, isWaiting, waitingText, children, ...otherProps } = props;

  return (
    <StyledButton {...otherProps} disabled={isWaiting || disabled}>{(isWaiting && waitingText) || children}</StyledButton>
  );
}

export default Button;
