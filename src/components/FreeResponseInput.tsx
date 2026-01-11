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
  value: string;
  isSubmitDisabled: boolean;
  questionNumber: number;
  question: ExerciseQuestionData;
  availablePoints?: AvailablePoints;
  textHasChanged: boolean;
  submitBtnLabel: string;
}


const StyledFreeResponse = styled.div`
  display: flex;
  flex-direction: column;

  .step-card-body {
    ${mixins.stepCardPadding()}
    padding-bottom: 1rem;
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
    font-size: 14px;
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

export const FreeResponseTextArea = styled.textarea<FreeResponseProps>`
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
    value,
    infoRowChildren,
    isSubmitDisabled,
    question,
    questionNumber,
    saveHandler,
    submitBtnLabel,
    textHasChanged,
    wordLimit,
    onChange,
  } = props;

  const wordCount = countWords(value);
  const isOverWordLimit = wordCount > wordLimit;

  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    const raw = e.target.value;
    const words = raw.trim().split(/\s+/);

    if (words.length >= wordLimit) {
      const limited = words.slice(0, wordLimit).join(' ');

      e.target.value = limited;
    }

    onChange(e);
  };

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
          onChange={handleChange}
          data-test-id="free-response-box"
          placeholder="Enter your response..."
          aria-label="question response text box"
        />
        <InfoRow hasChildren={!!infoRowChildren}>
          {infoRowChildren}
          <div>
            {wordCount >= wordLimit && <span className="word-limit-error-info">Word limit reached</span>}
            <span> Remaining words: {wordLimit - countWords(value)}</span>
          </div>
        </InfoRow>
      </div>
      <StepCardFooter>
      {availablePoints
        ? <div className="points" role="status"><strong>Points: {availablePoints}</strong></div>
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
