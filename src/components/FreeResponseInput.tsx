import { ReactNode } from 'react';
import { countWords } from '../utils';
import styled, { css } from 'styled-components';
import { colors } from '../theme';

export interface FreeResponseProps {
  readOnly: boolean;
  wordLimit: number;
  leftInfoComponent?: ReactNode;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue: string;
}

const TextAreaErrorStyle = css`
  background-color: #f5e9ea;
`;

const InfoRow = styled.div<{hasLeftComponent: boolean}>`
  margin: 8px 0;
  display: flex;
  justify-content: ${props => props.hasLeftComponent ? 'space-between' : 'flex-end'};
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
  ${props => isOverWordLimit(props.wordLimit, props.defaultValue) && TextAreaErrorStyle};
  ${props => isOverWordLimit(props.wordLimit, props.defaultValue) && css`
    border: 2px solid ${colors.palette.danger};
  `}
  background-color: ${props => props.readOnly && colors.palette.neutralCool};
`;
TextArea.displayName = 'TextArea';

const isOverWordLimit = (limit: number, str: string) => countWords(str) > limit;

export const FreeResponseInput = (props: FreeResponseProps) => {
  const {
    defaultValue,
    leftInfoComponent,
    wordLimit,
  } = props;

  return (
    <>
      <TextArea
          {...props}
          data-test-id="free-response-box"
          placeholder="Enter your response..."
          aria-label="question response text box"
      />
      <InfoRow hasLeftComponent={!!leftInfoComponent}>
          {leftInfoComponent}
          <div>
              <span>{countWords(defaultValue)} words</span>
              {isOverWordLimit(wordLimit, defaultValue) && <span className="word-limit-error-info">Maximum {wordLimit} words</span>}
          </div>
      </InfoRow>
    </>
);
}

FreeResponseInput.defaultProps = {
  readOnly: false,
  wordLimit: 100,
  defaultValue: '',
}

FreeResponseInput.displayName = 'OSFreeResponse';
