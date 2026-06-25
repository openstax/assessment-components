import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { colors, layouts, breakpoints } from "../theme";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
export const StyledToolbar = styled.div `
  position: absolute;
  background: #fff;
  width: 4.5rem;
  border: 1px solid ${colors.palette.light};
  background: #fff;
  margin: ${layouts.card.spacing} 0 0 ${layouts.card.spacing};
  z-index: 1;

  > * {
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.palette.neutral};
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
      color: ${colors.palette.neutralDarker};
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
      width: 20rem;

      svg {
        color: ${colors.palette.neutralDarker};
      }

      span {
        display: block;
      }
    }
  }

  ${props => !props.desktop && css `
    ${breakpoints.desktop `
      display: none;
    `}
    ${breakpoints.tablet `
      display: none;
    `}
  `}

  ${props => props.mobile && breakpoints.mobile `
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
        color: ${colors.palette.neutral};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${colors.palette.light};
      }
    }
  `}
`;
export const ExerciseToolbar = ({ icons }) => {
    var _a, _b;
    if (!icons) {
        return null;
    }
    const settings = Object.values(icons);
    const mobile = settings.some(({ location }) => { var _a, _b; return (_b = (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.mobile) !== null && _b !== void 0 ? _b : true; });
    const desktop = settings.some(({ location }) => { var _a, _b; return (_b = (_a = location === null || location === void 0 ? void 0 : location.toolbar) === null || _a === void 0 ? void 0 : _a.desktop) !== null && _b !== void 0 ? _b : false; });
    const topicUrl = (_a = icons.topic) === null || _a === void 0 ? void 0 : _a.url;
    const errataUrl = (_b = icons.errata) === null || _b === void 0 ? void 0 : _b.url;
    return _jsxs(StyledToolbar, { ...{ mobile, desktop }, children: [topicUrl ? _jsxs("a", { href: topicUrl, target: "_blank", children: [_jsx(FontAwesomeIcon, { icon: faBookOpen }), _jsx("span", { children: "View topic in textbook" })] }) : null, errataUrl ? _jsxs("a", { href: errataUrl, target: "_blank", children: [_jsx(FontAwesomeIcon, { icon: faTriangleExclamation }), _jsx("span", { children: "Suggest a correction" })] }) : null] });
};
//# sourceMappingURL=ExerciseToolbar.js.map