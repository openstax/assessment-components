import { MouseEventHandler, ReactNode } from 'react';
import { countWords } from '../utils';
import styled, { css } from 'styled-components';
import { colors } from '../theme';
import { AvailablePoints, Question as QuestionType } from 'src/types';
import { QuestionHtml } from './Question';
import Button from './Button';
import { StepCardFooter } from './StepCardFooter';

export interface FreeResponseProps {
  readOnly: boolean;
  wordLimit: number;
  infoRowChildren?: ReactNode;
  pointsChildren?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cancelHandler: MouseEventHandler<HTMLButtonElement>;
  saveHandler: MouseEventHandler<HTMLButtonElement>;
  defaultValue: string;
  isSubmitDisabled: boolean;
  questionNumber: number,
  question: QuestionType,
  availablePoints: AvailablePoints,
  textHasChanged: boolean;
  canRevert: boolean;
  submitBtnLabel: string;
}

const TextAreaErrorStyle = css`
  background-color: #f5e9ea;
`;

const StyledFreeResponse = styled.div`
  display: flex;
  flex-direction: column;
`;

const SyledQuestionStem = styled.div`
  font-size: 2rem;
  line-height: 1.68em;
  position: relative;
`;

const InfoRow = styled.div<{hasChildren: boolean}>`
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

export const FreeResponseTextArea = styled.textarea<{isOverWordLimit: boolean} & FreeResponseProps>`
  display: block;
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
  font-family: inherit;
  font-size: 1.8rem;
  line-height: 3rem;
`;
FreeResponseTextArea.displayName = 'OSFreeResponseTextArea';

const SubmitBtn = styled(Button)`
  align-self: flex-end;
  margin: 4rem;
  float: right;
`;

const RevertButton = (props: {
  canRevert: boolean,
  textHasChanged: boolean,
} & React.ComponentPropsWithoutRef<'button'>) => {
  if (!props.textHasChanged || !props.canRevert) {
      return null;
  }

  return (
      <Button
        {...props}
        disabled={!props.textHasChanged}
        secondary
      >
          Cancel
      </Button>
  );
};



export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    availablePoints,
    cancelHandler,
    canRevert,
    defaultValue,
    infoRowChildren,
    isSubmitDisabled,
    pointsChildren,
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
        <div className="points">
          <strong>Points: {availablePoints}</strong>
          {pointsChildren}
        </div>
        <div className="controls">
          <RevertButton 
            textHasChanged={textHasChanged}
            canRevert={canRevert}
            onClick={cancelHandler} 
          />
          <SubmitBtn
              data-test-id="submit-answer-btn"
              disabled={isSubmitDisabled || isOverWordLimit}
              onClick={saveHandler}
          >
              {submitBtnLabel}
          </SubmitBtn>
        </div>
      </StepCardFooter>
    </StyledFreeResponse>
);
}

FreeResponseInput.displayName = 'OSFreeResponse';
