import { colors } from "../../src/theme";
import styled, { css } from "styled-components";

const Times = (props: React.HTMLAttributes<SVGElement>) => (
  <svg width='15px' height='15px' viewBox='0 0 15 15' version='1.1' {...props}>
    <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
      <g transform='translate(-302.000000, -18.000000)' fill='currentColor'>
        <g transform='translate(302.000000, 18.000000)'>
          <path d='M7.5,5.41522791 L12.0331524,0.579865364 C12.3077536,0.286957429 12.7165503,0.24816296 12.946282,0.493210121 L13.9861449,1.60239723 C14.2158766,1.84744439 14.1795068,2.28349422 13.9049056,2.57640216 L9.37175324,7.41176471 L13.9049056,12.2471273 C14.1795068,12.5400352 14.2158766,12.976085 13.9861449,13.2211322 L12.946282,14.3303193 C12.7165503,14.5753665 12.3077536,14.536572 12.0331524,14.243664 L7.5,9.4083015 L2.96684761,14.243664 C2.69224642,14.536572 2.2834497,14.5753665 2.05371799,14.3303193 L1.01385508,13.2211322 C0.784123363,12.976085 0.820493178,12.5400352 1.09509437,12.2471273 L5.62824676,7.41176471 L1.09509437,2.57640216 C0.820493178,2.28349422 0.784123363,1.84744439 1.01385508,1.60239723 L2.05371799,0.493210121 C2.2834497,0.24816296 2.69224642,0.286957429 2.96684761,0.579865364 L7.5,5.41522791 Z'></path>
        </g>
      </g>
    </g>
  </svg>
);

const modalPadding = 3.0;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  overflow: hidden;
  width: 40rem;
  background-color: white;
  box-shadow: 0 0 2rem rgba(0, 0, 0, 0.05), 0 0 4rem rgba(0, 0, 0, 0.08);
  color: ${colors.palette.neutralDarker};
  font-size: 1.6rem;
  line-height: 2.5rem;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: ${modalPadding * 0.5}rem;
  padding: ${modalPadding * 0.5}rem ${modalPadding}rem;
  background: ${colors.palette.neutralLighter};
  border-bottom: solid 0.1rem #ddd;
  justify-content: space-between;
  ${(props: { variant?: string }) => props.variant === 'error' && css`
    background: ${colors.palette.paleRed};
    color: ${colors.palette.darkRed};
  `}
`;

const Heading = styled.h1`
  display: flex;
  align-items: center;
  margin: 0;
  padding: ${modalPadding * 0.5}rem 0;
  font-size: 1.8rem;
`;

export const ModalBodyHeading = styled.h3`
  font-weight: 400;
  font-size: 2.2rem;
  margin-top: 0;
`;

export const ModalBody = styled.div`
  font-size: 1.6rem;
  padding: ${modalPadding}rem;
`;

const Mask = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.3);
`;

const ModalWrapper = styled.div`
  top: 0;
  z-index: 1060;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  align-items: center;
`;

const CardWrapper = styled.div`
  z-index: 1;
`;

const CloseModalIcon = styled((props) => <Times {...props} aria-hidden='true' focusable='false' />)`
  padding: 0.4rem;
  cursor: pointer;
  margin-right: 0;
  padding-right: 0;
  color: ${colors.palette.neutralMedium};

  :hover {
    color: ${colors.palette.neutralDark};
  }
  height: 2rem;
  width: 2rem;

  ${(props: { variant?: string }) => props.variant === 'error' && css`
    color: ${colors.palette.darkRed};
  `}
`;

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${modalPadding}rem;

  button {
    min-width: 12rem;
  }
`;

export interface ModalPropTypes {
  onModalClose: () => void;
  heading: string;
  className?: string;
  show?: boolean;
  variant?: 'default' | 'error'
}

export const Modal = ({
  className,
  heading,
  onModalClose,
  children,
  show,
  variant
}: React.PropsWithChildren<ModalPropTypes>) => {
  if (!show) { return null; }
  return (
    <ModalWrapper className={className}>
      <CardWrapper>
        <Card>
          <Header variant={variant}>
            <Heading>
              {heading}
            </Heading>
            <CloseModalIcon onClick={onModalClose} variant={variant}/>
          </Header>
          {children}
        </Card>
      </CardWrapper>
      <Mask />
    </ModalWrapper>
  );
};
