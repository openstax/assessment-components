import { colors } from '../../theme';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export const StyledContainer = styled.div`
  display: flex;
  width: fit-content;
`;

export const StyledButton = styled.button`
    width: 74px;
    height: 87px;
    color: white;
    border: none;

    &:hover {
      box-shadow: 0px 1px 4px 0px #00000066;
    }
    
    span {
        font-family: "HelveticaNeue";
        line-height: 13px;
        font-size: 14px;
        font-weight: bold;
    }

    &.include {
        background-color: ${colors.palette.mediumBlue};
        padding-top: 14px;
    }

    &.remove {
        background-color: ${colors.palette.orange};
        padding-top: 14px;
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
    bottom: 5px;
    font-weight: 900;
    line-height: 13.8px;


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
