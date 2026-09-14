"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NeedsGradingQuestion = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const styled_components_1 = __importDefault(require("styled-components"));
const theme_1 = require("../theme");
const NeedsGradingStudentRow_1 = require("./NeedsGradingStudentRow");
const Content_1 = require("./Content");
const QuestionCard = styled_components_1.default.div `
  border: 1px solid ${theme_1.colors.palette.neutralLight};
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
`;
const QuestionHeader = styled_components_1.default.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.2rem 1.6rem;
  background-color: ${theme_1.colors.card.header.background};
`;
const QuestionHeaderLeft = styled_components_1.default.button `
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
`;
const QuestionTitle = styled_components_1.default.span `
  font-size: calc(1.6rem * var(--content-text-scale));
  font-weight: 600;
  color: ${theme_1.colors.palette.neutralDarker};
  margin: 0;
`;
const GradedCount = styled_components_1.default.span `
  font-size: calc(1.3rem * var(--content-text-scale));
  font-weight: 600;
  color: ${theme_1.colors.palette.white};
  background-color: ${theme_1.colors.palette.darkGray};
  border-radius: 5px;
  padding: 0.2rem 0.8rem;
`;
const QuestionIdSeparator = styled_components_1.default.span `
  font-weight: normal;
  margin: 0 0.4rem;
`;
const QuestionIdText = styled_components_1.default.span `
  font-weight: normal;
  font-size: calc(1.4rem * var(--content-text-scale));
`;
const ExpandToggleButton = styled_components_1.default.button `
  background: none;
  border: none;
  cursor: pointer;
  font-size: calc(1.2rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.blue};
  padding: 0;
  text-decoration: underline;

  &:hover {
    color: ${theme_1.colors.palette.mediumBlue};
  }
`;
const QuestionStemRow = styled_components_1.default.div `
  padding: 1.6rem 1.6rem 0;
  background-color: ${theme_1.colors.card.body.background};
`;
const QuestionStemText = styled_components_1.default.div `
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${theme_1.colors.palette.neutralDarker};
`;
const ExpandToggleRow = styled_components_1.default.div `
  padding: 0.8rem 1.6rem 1.2rem;
  border-bottom: 1px solid ${theme_1.colors.palette.neutralLight};
  background-color: ${theme_1.colors.card.body.background};
`;
const StudentList = styled_components_1.default.div `
  background-color: ${theme_1.colors.card.body.background};
`;
const initExpandedSet = (students) => {
    const ids = new Set();
    students.forEach(s => {
        if (s.score === undefined) {
            ids.add(String(s.student.userId));
        }
    });
    return ids;
};
const NeedsGradingQuestion = ({ questionNumber, questionStemHtml, students, questionId, }) => {
    const [cardExpanded, setCardExpanded] = (0, react_1.useState)(true);
    const [expandedIds, setExpandedIds] = (0, react_1.useState)(() => initExpandedSet(students));
    const gradedCount = students.filter(s => s.score !== undefined).length;
    const allExpanded = students.every(s => expandedIds.has(String(s.student.userId)));
    const handleExpandToggleAll = (e) => {
        e.stopPropagation();
        if (allExpanded) {
            setExpandedIds(new Set());
        }
        else {
            setExpandedIds(new Set(students.map(s => String(s.student.userId))));
        }
    };
    const handleStudentToggle = (userId) => {
        setExpandedIds(prev => {
            const next = new Set(prev);
            if (next.has(userId)) {
                next.delete(userId);
            }
            else {
                next.add(userId);
            }
            return next;
        });
    };
    return ((0, jsx_runtime_1.jsxs)(QuestionCard, { children: [(0, jsx_runtime_1.jsxs)(QuestionHeader, { children: [(0, jsx_runtime_1.jsxs)(QuestionHeaderLeft, { type: "button", onClick: () => setCardExpanded(prev => !prev), "aria-expanded": cardExpanded, children: [(0, jsx_runtime_1.jsx)(NeedsGradingStudentRow_1.ChevronIcon, { expanded: cardExpanded }), (0, jsx_runtime_1.jsxs)(QuestionTitle, { children: ["Question ", questionNumber, questionId && ((0, jsx_runtime_1.jsxs)(jsx_runtime_1.Fragment, { children: [(0, jsx_runtime_1.jsx)(QuestionIdSeparator, { children: "|" }), (0, jsx_runtime_1.jsxs)(QuestionIdText, { children: ["ID: ", questionId] })] }))] })] }), (0, jsx_runtime_1.jsxs)(GradedCount, { children: [gradedCount, "/", students.length, " Graded"] })] }), (0, jsx_runtime_1.jsxs)("div", { style: { display: cardExpanded ? undefined : 'none' }, children: [(0, jsx_runtime_1.jsx)(QuestionStemRow, { children: (0, jsx_runtime_1.jsx)(QuestionStemText, { children: (0, jsx_runtime_1.jsx)(Content_1.Content, { html: questionStemHtml, block: true }) }) }), (0, jsx_runtime_1.jsx)(ExpandToggleRow, { children: (0, jsx_runtime_1.jsx)(ExpandToggleButton, { type: "button", onClick: handleExpandToggleAll, children: allExpanded ? 'Collapse all answers' : 'Expand all answers' }) }), (0, jsx_runtime_1.jsx)(StudentList, { children: students.map((studentProps) => {
                            const uid = String(studentProps.student.userId);
                            return ((0, jsx_runtime_1.jsx)(NeedsGradingStudentRow_1.NeedsGradingStudentRow, { ...studentProps, expanded: expandedIds.has(uid), onToggle: () => handleStudentToggle(uid) }, uid));
                        }) })] })] }));
};
exports.NeedsGradingQuestion = NeedsGradingQuestion;
//# sourceMappingURL=NeedsGradingQuestion.js.map