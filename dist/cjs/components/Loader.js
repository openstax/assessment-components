"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loader = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_content_loader_1 = require("react-content-loader");
const theme_1 = require("../theme");
const styled_components_1 = __importDefault(require("styled-components"));
const Wrapper = styled_components_1.default.div `
  max-width: 1000px;
  @media(min-width: 960px) {
    // Around the height of a multiple choice with 4 options
    min-height: 53.8rem;
  }
  padding: 2rem;
  margin: 2rem;
  border: 1px solid ${theme_1.colors.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  > svg {
    max-width: 600px;
    flex-grow: 1;
  }
`;
const Loader = () => (0, jsx_runtime_1.jsx)(Wrapper, { children: (0, jsx_runtime_1.jsx)(react_content_loader_1.BulletList, { uniqueKey: "OSLoader" }) });
exports.Loader = Loader;
//# sourceMappingURL=Loader.js.map