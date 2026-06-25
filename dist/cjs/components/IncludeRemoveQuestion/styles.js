"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StyledIcon = exports.StyledButton = exports.StyledContainer = void 0;
const theme_1 = require("../../theme");
const styled_components_1 = __importDefault(require("styled-components"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
exports.StyledContainer = styled_components_1.default.div `
  display: flex;
  width: fit-content;
`;
exports.StyledButton = styled_components_1.default.button `
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
        background-color: ${theme_1.colors.palette.mediumBlue};
        padding-top: 1.4rem;
    }

    &.remove {
        background-color: ${theme_1.colors.palette.orange};
        padding-top: 1.4rem;
    }

    &.details {
        background-color: ${theme_1.colors.palette.neutralDarker};
    }
`;
exports.StyledIcon = (0, styled_components_1.default)(react_fontawesome_1.FontAwesomeIcon) `
    border-radius: 50%;
    background-color: ${theme_1.colors.palette.white};
    vertical-align: middle;
    position: relative;
    bottom: 0.5rem;
    font-weight: 900;
    line-height: 1.4rem;


    &.include {
        color: ${theme_1.colors.palette.mediumBlue};
    }

    &.remove {
        color: ${theme_1.colors.palette.orange};
    }

    &.details {
        color: ${theme_1.colors.palette.neutralDarker};
    }
`;
//# sourceMappingURL=styles.js.map