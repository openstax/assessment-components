"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadMoreLink = exports.FreeResponseText = exports.FreeResponseExpandedContainer = exports.FreeResponseDefaultContainer = exports.COLLAPSED_HEIGHT = void 0;
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../../theme");
exports.COLLAPSED_HEIGHT = 16.8; // rem
const baseContainer = `
  padding: ${theme_1.layouts.answer.horizontalSpacing} ${theme_1.layouts.answer.horizontalBuffer};
  margin: ${theme_1.layouts.answer.verticalSpacing} 0 ${theme_1.layouts.answer.horizontalSpacing} ${theme_1.layouts.answer.verticalSpacing};
`;
exports.FreeResponseDefaultContainer = styled_components_1.default.div `
  ${baseContainer}
  border-left: ${theme_1.layouts.answer.horizontalSpacing} solid ${theme_1.colors.palette.neutralLighter};
  font-style: italic;
`;
exports.FreeResponseExpandedContainer = styled_components_1.default.div `
  ${baseContainer}
  position: relative;
  width: 100%;
`;
exports.FreeResponseText = styled_components_1.default.div `
  max-height: ${({ expanded }) => (expanded ? "none" : `${exports.COLLAPSED_HEIGHT}rem`)};
  overflow: hidden;
  position: relative;
  line-height: 1.6;
  font-size: 1.4rem;

  ${({ expanded, isOverflowing }) => !expanded && isOverflowing
    ? `
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  `
    : ""}
`;
exports.ReadMoreLink = styled_components_1.default.button `
  display: inline;
  background: none;
  border: none;
  color: ${theme_1.colors.palette.blue};
  padding: 0;
  margin: 0;
  cursor: pointer;
  font-size: 1.3rem;
  text-decoration: underline;
  white-space: nowrap;
`;
//# sourceMappingURL=FreeResponseReview.styles.js.map