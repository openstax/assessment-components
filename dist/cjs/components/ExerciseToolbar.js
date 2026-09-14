"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExerciseToolbar = exports.StyledToolbar = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const theme_1 = require("../theme");
const styled_components_1 = __importStar(require("styled-components"));
const react_fontawesome_1 = require("@fortawesome/react-fontawesome");
const free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
exports.StyledToolbar = styled_components_1.default.div `
  position: absolute;
  background: #fff;
  width: 4.5rem;
  border: 1px solid ${theme_1.colors.palette.light};
  background: #fff;
  margin: ${theme_1.layouts.card.spacing} 0 0 ${theme_1.layouts.card.spacing};
  z-index: 1;

  > * {
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${theme_1.colors.palette.neutral};
    background: #fff;
    text-decoration: none;

    &:after {
      border-bottom: 1px solid #f1f1f1;
    }

    svg {
      width: 4.3rem;
      height: 1.6rem;
      transition: color 150ms;
    }

    span {
      display: none;
      flex-grow: 1;
      font-size: 1.4rem;
      color: ${theme_1.colors.palette.neutralDarker};
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
      width: 20rem;

      svg {
        color: ${theme_1.colors.palette.neutralDarker};
      }

      span {
        display: block;
      }
    }
  }

  ${props => !props.desktop && (0, styled_components_1.css) `
    ${theme_1.breakpoints.desktop `
      display: none;
    `}
    ${theme_1.breakpoints.tablet `
      display: none;
    `}
  `}

  ${props => props.mobile && theme_1.breakpoints.mobile `
    display: block;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: row;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 0;
    }

    > * {
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.8rem 0.6rem;
      height: auto;
      min-height: 4.8rem;

      &:hover {
        width: auto;
      }

      span {
        display: block;
        font-size: 1.4rem;
        margin-top: 0.2rem;
        color: ${theme_1.colors.palette.neutral};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${theme_1.colors.palette.light};
      }
    }
  `}
`;
const ExerciseToolbar = ({ icons }) => {
    var _a, _b;
    if (!icons) {
        return null;
    }
    const settings = Object.values(icons);
    const mobile = settings.some(({ location }) => { var _a, _b; return (_b = (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.mobile) !== null && _b !== void 0 ? _b : true; });
    const desktop = settings.some(({ location }) => { var _a, _b; return (_b = (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.desktop) !== null && _b !== void 0 ? _b : false; });
    const topicUrl = (_a = icons.topic) === null || _a === void 0 ? void 0 : _a.url;
    const errataUrl = (_b = icons.errata) === null || _b === void 0 ? void 0 : _b.url;
    return (0, jsx_runtime_1.jsxs)(exports.StyledToolbar, { ...{ mobile, desktop }, children: [topicUrl ? (0, jsx_runtime_1.jsxs)("a", { href: topicUrl, target: "_blank", children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faBookOpen }), (0, jsx_runtime_1.jsx)("span", { children: "View topic in textbook" })] }) : null, errataUrl ? (0, jsx_runtime_1.jsxs)("a", { href: errataUrl, target: "_blank", children: [(0, jsx_runtime_1.jsx)(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faTriangleExclamation }), (0, jsx_runtime_1.jsx)("span", { children: "Suggest a correction" })] }) : null] });
};
exports.ExerciseToolbar = ExerciseToolbar;
//# sourceMappingURL=ExerciseToolbar.js.map