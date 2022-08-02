import { ReactNode } from 'react';
import { countWords } from '../utils';
import styled, { css } from 'styled-components';
import { colors } from '../theme';

export interface FreeResponseProps {
  isErrored: boolean;
  showWarning: boolean;
  isDisplayingNudge: boolean;
  readOnly: boolean;
  lastSubmitted: string;
  wordLimit: number;
  nudgeComponent?: ReactNode;
  submittedComponent?: ReactNode;
  changeHandler: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

const StyledFreeResponse = styled.div`
  display: flex;
  flex-direction: column;
`;

const TextAreaErrorStyle = css`
  background-color: #f5e9ea;
`;

const InfoRow = styled.div`
  margin: 8px 0;
  display: flex;
  justify-content: space-between;
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
  ${props => props.isErrored && TextAreaErrorStyle};
  ${props => props.showWarning && css`
    border: 2px solid ${colors.palette.danger};
  `}
  background-color: ${props => props.readOnly && colors.palette.neutralCool};
`;
TextArea.displayName = 'TextArea';

export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    value,
    isDisplayingNudge,
    lastSubmitted,
    wordLimit,
    changeHandler,
  } = props;

  const isOverWordLimit = (limit: number) => countWords(value) > limit;

  return (
    <StyledFreeResponse
      data-test-id="student-free-response"
    >
      <div className="step-card-body">
          <TextArea
              {...props}
              onChange={changeHandler}
              data-test-id="free-response-box"
              placeholder="Enter your response..."
              aria-label="question response text box"
          />
          <InfoRow>
              <div>
                  {lastSubmitted && props.submittedComponent}
                  {isDisplayingNudge && props.nudgeComponent}
              </div>

              <div>
                  <span>{countWords(value)} words</span>
                  {isOverWordLimit(wordLimit) && <span className="word-limit-error-info">Maximum {wordLimit} words</span>}
              </div>
          </InfoRow>
      </div>
  </StyledFreeResponse>
);
}

FreeResponseInput.defaultProps = {
  isErrored: false,
  showWarning: false,
  value: '',
  isDisplayingNudge: false,
  lastSubmitted: '',
  wordLimit: 100,
  readOnly: false,
}

FreeResponseInput.displayName = 'OSFreeResponse';
