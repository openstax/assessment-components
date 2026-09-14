import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from 'classnames';
import { Content } from './Content';
const SimpleFeedback = (props) => (_jsx("aside", { children: _jsx(Content, { component: props.contentRenderer, className: classnames('question-feedback-content', 'has-html', props.className), html: props.children, block: true }) }));
const Feedback = ({ id, ...props }) => {
    const position = props.position || 'bottom';
    const wrapperClasses = classnames('question-feedback', position);
    return (_jsxs("aside", { id: id, className: wrapperClasses, children: [_jsx("div", { className: "arrow", "aria-label": "Answer Feedback" }), _jsx(SimpleFeedback, { ...props, children: props.children })] }));
};
export { Feedback, SimpleFeedback };
//# sourceMappingURL=Feedback.js.map