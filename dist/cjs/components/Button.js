"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = require("../theme");
const styled_components_1 = __importDefault(require("styled-components"));
const StyledButton = styled_components_1.default.button `
  background-color: ${theme_1.colors.button.background};
  color: ${theme_1.colors.palette.white};
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
      background: ${theme_1.colors.button.backgroundHover}
    }
    &:active {
      background: ${theme_1.colors.button.backgroundActive}
    }
  }
  &:disabled {
    opacity: 0.4;
  }
`;
const Button = (props) => {
    const { disabled, isWaiting, waitingText, children, ...otherProps } = props;
    return ((0, jsx_runtime_1.jsx)(StyledButton, { ...otherProps, disabled: isWaiting || disabled, children: (isWaiting && waitingText) || children }));
};
exports.default = Button;
//# sourceMappingURL=Button.js.map