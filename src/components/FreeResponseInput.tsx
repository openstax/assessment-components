import { MouseEventHandler, ReactNode } from 'react';
import { countWords } from '../utils';
import styled, { css } from 'styled-components';
import { breakpoints, colors } from '../theme';
import { AvailablePoints, Question as QuestionType } from 'src/types';
import { QuestionHtml } from './Question';
import Button from './Button';

export interface FreeResponseProps {
  readOnly: boolean;
  wordLimit: number;
  infoRowChildren?: ReactNode;
  pointsChildren?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  cancelHandler: MouseEventHandler;
  saveHandler: MouseEventHandler;
  defaultValue: string;
  isOverWordLimit?: boolean;
  isSubmitDisabled: boolean;
  questionNumber: number,
  question: QuestionType,
  availablePoints: AvailablePoints,
  textHasChanged: boolean;
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

const TextArea = styled.textarea<FreeResponseProps>`
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
`;
TextArea.displayName = 'TextArea';

export const StepCardFooter = styled.div`
    padding: var(--step-card-padding-top) var(--step-card-padding-side);
    border-top: 1px solid ${colors.palette.pale};
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: 1.4rem;
    line-height: 2rem;

    > * {
        flex-grow: 1;
    }

    button {
        width: 160px;
        height: 48px;
    }

    .points {
        margin-bottom: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        .attempts-left {
            color: #F36B32;
        }
    }

    .controls {
        display: flex;
        flex-flow: column wrap-reverse;
        margin-left: 1.6rem; // Replace with https://caniuse.com/?search=gap soon

        button + button {
            margin: 0.8rem 0 0 0;
        }
    }

    ${breakpoints.desktop`
        padding: 32px var(--step-card-padding-side);
        flex-wrap: nowrap;

        .points {
            max-width: 400px;
        }

        .controls {
            flex-flow: row;
            justify-content: flex-end;

            button + button {
                margin: 0 0 0 0.8rem;
            }
        }
    `}
`;

const ButtonLg = styled(Button)`
  align-self: flex-end;
  margin: 4rem;
  float: right;
`;


export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    availablePoints,
    cancelHandler,
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
          <QuestionHtml type="stem" html={question.stem_html} hidden={true} />}
        </SyledQuestionStem>
        <TextArea
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
          <Button
            disabled={!textHasChanged}
            onClick={cancelHandler}
          >
            Cancel
          </Button>
          <ButtonLg
              data-test-id="submit-answer-btn"
              disabled={isSubmitDisabled}
              onClick={saveHandler}
          >
              {submitBtnLabel}
          </ButtonLg>
        </div>
      </StepCardFooter>
    </StyledFreeResponse>
);
}

FreeResponseInput.displayName = 'OSFreeResponse';