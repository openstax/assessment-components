import { MouseEventHandler, ReactNode } from 'react';
import { countWords } from '../utils';
import styled, { css } from 'styled-components';
import { colors, mixins } from '../theme';
import { AvailablePoints, ExerciseQuestionData } from 'src/types';
import { QuestionHtml } from './Question';
import Button from './Button';
import { StepCardFooter } from './StepCardFooter';

export interface FreeResponseProps {
  readOnly: boolean;
  wordLimit: number;
  infoRowChildren?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cancelHandler: MouseEventHandler<HTMLButtonElement>;
  saveHandler: MouseEventHandler<HTMLButtonElement>;
  defaultValue: string;
  isSubmitDisabled: boolean;
  questionNumber: number,
  question: ExerciseQuestionData,
  availablePoints?: AvailablePoints,
  textHasChanged: boolean;
  submitBtnLabel: string;
}

const TextAreaErrorStyle = css`
  background-color: #f5e9ea;
`;

const StyledFreeResponse = styled.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${mixins.stepCardPadding()}
  }
`;

const SyledQuestionStem = styled.div`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`;

const InfoRow = styled.div<{ hasChildren: boolean }>`
  margin: 8px 0;
  display: flex;
  justify-content: ${props => props.hasChildren ? 'space-between' : 'flex-end'};
  line-height: 1.6rem;

  .word-limit-error-info {
    color: ${colors.palette.danger};
  }

  div > span {
    font-size: 12px;
    line-height: 16px;

    + span {
      margin-left: 1rem;
    }
  }

  .last-submitted + * {
    margin-top: 0.8rem;
  }

  color: ${colors.palette.neutralThin};
`;

export const FreeResponseTextArea = styled.textarea<{ isOverWordLimit: boolean } & FreeResponseProps>`
  display: block;
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 3rem;
  width: 100%;
  min-height: 10.5em;
  line-height: 1.5em;
  margin: 2.5rem 0 0 0;
  padding: 0.5em;
  border: 1px solid ${colors.palette.neutral};
  color: ${colors.palette.neutralDark};
  ${props => props.isOverWordLimit && TextAreaErrorStyle};
  ${props => props.isOverWordLimit && css`
    border: 2px solid ${colors.palette.danger};
  `}
  background-color: ${props => props.readOnly && colors.palette.neutralCool};
`;
FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';

const RevertButton = (props: {
  disabled: boolean
} & React.ComponentPropsWithoutRef<'button'>) => (
  <Button {...props}>
    Cancel
  </Button>
);


export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    availablePoints,
    cancelHandler,
    defaultValue,
    infoRowChildren,
    isSubmitDisabled,
    question,
    questionNumber,
    saveHandler,
    submitBtnLabel,
    textHasChanged,
    wordLimit,
  } = props;

  const isOverWordLimit = countWords(defaultValue) > wordLimit;

  const questionProps = {};
  if (questionNumber) { questionProps['data-question-number'] = questionNumber; }

  return (
    <StyledFreeResponse data-test-id="student-free-response">
      <div className="step-card-body">
        <SyledQuestionStem {...questionProps}>
          {question.stem_html &&
            <QuestionHtml type="stem" html={question.stem_html} hidden={false} />}
        </SyledQuestionStem>
        <FreeResponseTextArea
          {...props}
          isOverWordLimit={isOverWordLimit}
          data-test-id="free-response-box"
          placeholder="Enter your response..."
          aria-label="question response text box"
        />
        <InfoRow hasChildren={!!infoRowChildren}>
          {infoRowChildren}
          <div>
            <span>{countWords(defaultValue)} words</span>
            {isOverWordLimit && <span className="word-limit-error-info">Maximum {wordLimit} words</span>}
          </div>
        </InfoRow>
      </div>
      <StepCardFooter>
      {availablePoints
        ? <div className="points"><strong>Points: {availablePoints}</strong></div>
        : null}
        <div className="controls">
          <RevertButton disabled={!textHasChanged} onClick={cancelHandler} />
          <Button
            data-test-id="submit-answer-btn"
            disabled={isSubmitDisabled || isOverWordLimit}
            onClick={saveHandler}
          >
            {submitBtnLabel}
          </Button>
        </div>
      </StepCardFooter>
    </StyledFreeResponse>
  );
}

FreeResponseInput.displayName = 'OSFreeResponse';
