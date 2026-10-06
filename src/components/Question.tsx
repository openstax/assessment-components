import styled, { css } from 'styled-components';
import { mixins, colors, layouts, transitions } from '../theme';
import { CompactDisplayProps } from './compactDisplay';
import { AnswersTable } from './AnswersTable';
import classnames from 'classnames';
import { Answer as AnswerType, ID, ExerciseQuestionData } from '../types';
import React, { ReactNode } from 'react';
import { Content } from './Content';

const StyledBodyContainer = styled.div`
  width: 100%;
`;

const StyledQuestion = styled.div<CompactDisplayProps>`
&.openstax-question {
  img {
    display: block;
    margin: auto;
    max-width: 100%;
  }

  .question-stem {
    margin-bottom: 0;
  }

  .answers-table {
    font-size: calc(1.6rem * var(--content-text-scale, 1));
    line-height: calc(2rem * var(--content-text-scale, 1));
  }

  .instructions {
    font-size: 1.4rem;
    font-style: italic;
    margin-top: 10px;
    color: ${colors.palette.neutral};
    margin: 0;

    i {
      margin-left: 5px;
    }

    .text-info {
      color: ${colors.palette.neutralLightBlue};
      padding-left: 5px;
      cursor: pointer;
      font-style: normal;
    }
  }

  .multiple-choice-prompt {
    font-weight: 600;
  }

  &:not(.openstax-question-preview) {
    .answers-answer {
      width: initial;
      &.answer-selected {
        font-weight: bold;
      }
      ${mixins.answer()};
    }

    .answer-answer {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-left: ${layouts.answer.horizontalSpacing};
      * {
        margin: 0;
      }
    }

    .answer-letter-wrapper::before {
      content: attr(data-answer-choice);
      text-align: center;
      padding: 0;
      font-size: 1.6rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .answer-label {
      align-items: center;
      width: 100%;
      padding: ${layouts.answer.verticalSpacing} 0 0 0;
      margin: 0;
      transition: color ${transitions.answer};
    }

    // a selectable answer
    .answer-input-box:not([disabled]) ~ .answer-label {
      cursor: pointer;

      &:hover {
        ${mixins.answerHover()}
      }
    }

    .answer-input-box {
      ${mixins.visuallyHidden()}
    }

    // a selected answer
    &:not(.has-correct-answer) {
      .answer-input-box {
        &:checked {
          + .answer-label,
          + .answer-label:hover {
            ${mixins.answerChecked()};
          }
        }

        &:focus-visible {
          + .answer-label .answer-letter-wrapper::before {
            outline-style: solid;
            outline-width: 2px;
            outline-offset: 2px;
            outline-color: ${colors.answer.checked};
          }
        }
      }

      .answer-selected {
        .answer-label, .answer-label:hover {
          ${mixins.answerChecked()};
        }
      }
    }

    // answer that has been checked
    &.has-correct-answer {
      .answer-selected {
        &:not(.answer-correct) {
          .answer-label {
            ${mixins.answerIncorrect(true)};
          }
        }

        &.answer-correct {
          .answer-label {
            ${mixins.answerCorrect(true)};
          }
        }
      }

      .answer-correct:not(.answer-selected) {
        .answer-label {
          ${mixins.answerCorrect(false)}
        }
      }
    }

    &.has-incorrect-answer {
      .answer-incorrect {
        .answer-label, .answer-label:hover {
          ${mixins.answerIncorrect()}
        }
        &.answer-selected.answer-incorrect {
          ${mixins.answerIncorrect(true)}
        }
      }
    }

    .question-feedback {
      ${mixins.popover()}
      max-width: ${layouts.answer.feedback.popover.maxWidth};
      .question-feedback-content {
        padding: ${layouts.answer.feedback.popover.verticalSpacing} ${layouts.answer.feedback.popover.horizontalSpacing};
      }
    }
  }

  .openstax-answer {
    border-top: 1px solid #d5d5d5;
    margin: 10px 0;
    padding: 6px 8px;
  }

  /* the last answer, or the feedback under it, ends flush: the frame adds the space below */
  .answers-table > :last-child {
    margin-bottom: 0;
  }

  .answers-table + * {
    margin-top: 20px;
  }
}

${props => props.compactDisplay && css`
  &&&.openstax-question {
    .answers-table + * {
      margin-top: var(--spacing, 0.8rem);
    }

    .question-stem {
      color: ${colors.palette.neutralDarker};
      font-weight: bold;
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .question-feedback-content {
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .question-feedback {
      max-width: unset;
    }

    .openstax-answer {
      padding: 0;
      border: none;

      .answer-label {
        padding-top: var(--spacing, 0.8rem);
      }

      .answer-letter-wrapper {
        .answer-answer {
          margin-left: var(--spacing, 0.8rem);
        }

        &::before {
          min-width: 2.3rem;
          min-height: 2.3rem;
          width: 2.3rem;
          height: 2.3rem;
        }
      }

      .answer-letter {
        min-width: 2.8rem;
        min-height: 2.8rem;
        width: 2.8rem;
        height: 2.8rem;
        display: flex;
      }
    }
  }
`}
`;

export interface QuestionProps {
  question: ExerciseQuestionData,
  answer_id?: ID;
  correct_answer_id: ID | null;
  incorrectAnswerId: ID;
  hideAnswers: boolean;
  hidePreambles?: boolean,
  exercise_uid?: string;
  displayFormats: boolean,
  className?: string;
  questionNumber: number;
  /**
   * @deprecated The detailed solution is composed in rather than rendered from the question.
   * Pass a `QuestionLevelFeedback` as `feedback`.
   */
  displaySolution?: boolean;
  context?: string;
  correct_answer_feedback_html?: string;
  contentRenderer?: JSX.Element;
  feedback_html: string;
  onChange: (answer: AnswerType) => void;
  labelAnswers?: boolean;
  show_all_feedback?: boolean;
  children?: ReactNode;
  /** rendered at the bottom of the body, below the answers */
  feedback?: ReactNode;
  choicesEnabled?: boolean;
  previewMode?: boolean;
}

export type QuestionPropsWithCompactDisplay = QuestionProps & CompactDisplayProps;

export const Question = React.forwardRef((
  props: QuestionPropsWithCompactDisplay, ref: React.ForwardedRef<HTMLDivElement>
) => {
  let exerciseUid;

  const {
    question, correct_answer_id, incorrectAnswerId, exercise_uid, className, questionNumber,
    context, hidePreambles
  } = props;

  const { stem_html, formats, stimulus_html } = question;

  const hasCorrectAnswer = !!correct_answer_id;
  const hasIncorrectAnswer = !!incorrectAnswerId;

  const classes = classnames('openstax-question', className, {
    'has-correct-answer': hasCorrectAnswer,
    'has-incorrect-answer': hasIncorrectAnswer,
  });

  if (exercise_uid != null) {
    exerciseUid = (
      <div className="exercise-uid">
        {exercise_uid}
      </div>
    );
  }

  return (
    <StyledQuestion
      ref={ref}
      className={classes}
      data-question-number={questionNumber}
      data-test-id="question"
      compactDisplay={props.compactDisplay}
    >
      <StyledBodyContainer>
        <div>
          <QuestionHtml type="context" html={context} hidden={hidePreambles} />
          <QuestionHtml type="stimulus" html={stimulus_html} hidden={hidePreambles} />
          <QuestionHtml type="stem" html={stem_html} hidden={hidePreambles} questionNumber={questionNumber} />
          {props.children}

          <AnswersTable
            {...props}
            onChangeAnswer={props.onChange}
            hasCorrectAnswer={hasCorrectAnswer}
          />

          {props.feedback}
          {props.displayFormats ? <FormatsListing formats={formats} /> : undefined}
          {exerciseUid}
        </div>
      </StyledBodyContainer>
    </StyledQuestion>
  );
});

interface QuestionHtmlProps {
  html?: string;
  type: string;
  hidden: QuestionProps['hidePreambles'];
  questionNumber?: QuestionProps['questionNumber'];
}

export const QuestionHtml = (props: QuestionHtmlProps) => {
  const { html = '', type, hidden, questionNumber } = props;
  if (hidden === true || !(html.length > 0)) { return null; }

  return (
    <Content
      html={html}
      data-question-number={questionNumber}
      className={`question-${type}`}
      block={true}
    />
  );
};

const FormatsListing = ({ formats = [] }: { formats: ExerciseQuestionData['formats'] }) => {
  return (
    <div className="formats-listing">
      <div className="header">Formats:</div>
      {formats.map((format, i) => <span key={i}>{format}</span>)}
    </div>
  );
};
