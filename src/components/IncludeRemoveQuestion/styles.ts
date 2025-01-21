import { colors } from '../../theme';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledContainer = styled.div`
  display: flex;
  width: fit-content;
`;

export const StyledButton = styled.button`
    width: 7.4rem;
    height: 8.7rem;
    color: white;
    border: none;

    &:hover {
      box-shadow: 0 0.1rem 0.4rem 0 #00000066;
    }
    
    span {
        line-height: 1.3rem;
        font-size: 1.4rem;
        font-weight: bold;
    }

    &.include {
        background-color: ${colors.palette.mediumBlue};
        padding-top: 1.4rem;
    }

    &.remove {
        background-color: ${colors.palette.orange};
        padding-top: 1.4rem;
    }

    &.details {
        background-color: ${colors.palette.neutralDarker};
    }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
    border-radius: 50%;
    background-color: ${colors.palette.white};
    vertical-align: middle;
    position: relative;
    bottom: 0.5rem;
    font-weight: 900;
    line-height: 1.4rem;


    &.include {
        color: ${colors.palette.mediumBlue};
    }

    &.remove {
        color: ${colors.palette.orange};
    }

    &.details {
        color: ${colors.palette.neutralDarker};
    }
`;
