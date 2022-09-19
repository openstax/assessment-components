interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    isWaiting?: never;
    waitingText?: never;
}
interface WaitingButtonProps extends React.ComponentPropsWithoutRef<'button'> {
    isWaiting: boolean;
    waitingText: string;
}
declare const Button: (props: ButtonProps | WaitingButtonProps) => JSX.Element;
export default Button;
