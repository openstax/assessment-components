import React from "react";
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

  &:not([disabled]):not([aria-disabled="true"]) {
    cursor: pointer;
    &:hover {
      background: ${colors.button.backgroundHover}
    }
    &:active {
      background: ${colors.button.backgroundActive}
    }
  }
  &:disabled, &[aria-disabled="true"] {
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

/**
 * While waiting the button is unavailable but keeps focus: it is marked `aria-disabled` and
 * ignores clicks, rather than being `disabled`, which would drop the focus of whoever pressed it.
 * The same goes for a button passed `aria-disabled` directly.
 *
 * Only `onClick` is held back while it is unavailable. Unlike a `disabled` one, it still gets
 * every other event, so act on `onClick` alone: a handler for keys or pointers would act on a
 * button that says it is unavailable.
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps | WaitingButtonProps>((props, ref) => {
  const { disabled, isWaiting, waitingText, children, onClick, ...otherProps } = props;
  const unavailable = isWaiting || otherProps['aria-disabled'] === true || otherProps['aria-disabled'] === 'true';

  return (
    <StyledButton
      {...otherProps}
      ref={ref}
      disabled={!isWaiting && disabled}
      aria-disabled={unavailable || undefined}
      onClick={unavailable ? (event) => event.preventDefault() : onClick}
    >
      {(isWaiting && waitingText) || children}
    </StyledButton>
  );
});

Button.displayName = 'OSButton';

export default Button;
