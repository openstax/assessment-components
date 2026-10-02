import styled from 'styled-components';
import { colors } from '../theme';
import { Content } from './Content';

export const ReviewScoreText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  font-weight: bold;
  color: ${colors.palette.neutralDarker};
`;

export const FeedbackText = styled.div`
  font-size: calc(1.4rem * var(--content-text-scale));
  color: ${colors.palette.neutralDarker};
  white-space: pre-wrap;

  .feedback-label {
    color: ${colors.palette.neutralDarker};
    font-weight: bold;
  }
`;

/**
 * The styling used to live in `Question`, nested under `&.openstax-question`, so the same
 * markup rendered in a footer got none of it. It belongs to the component now, so this
 * renders the same way wherever it is composed.
 */
const StyledQuestionLevelFeedback = styled.div`
  .detailed-solution {
    margin-bottom: 1rem;

    .header {
      display: inline;
      margin-right: 0.5rem;
      color: #5e6062;
      font-weight: bold;
      flex-basis: 0;
    }

    .solution {
      display: inline;
      color: #6f6f6f;
    }
  }
`;

export interface QuestionLevelFeedbackProps {
  score?: { raw?: number; max?: number };
  /** the grader's manual-grading comment, rendered as "Feedback:" */
  gradingComments?: string;
  /** from the exercise definition, rendered as "Detailed solution:" */
  detailedSolution?: string;
  className?: string;
}

/**
 * Feedback about a question as a whole — its score, a grader's comment and the detailed
 * solution. Per-answer feedback (`feedback_html` on an answer) is not part of this; it
 * renders under its answer in `AnswersTable`.
 *
 * Renders nothing when it has nothing to say, and carries its own live region, since it is
 * the thing that appears asynchronously.
 */
export const QuestionLevelFeedback = (props: QuestionLevelFeedbackProps) => {
  const { score, gradingComments, detailedSolution, className } = props;

  const scoreDisplay = typeof score?.raw === 'number' && typeof score?.max === 'number'
    ? `${score.raw}/${score.max}`
    : undefined;

  if (!scoreDisplay && !gradingComments && !detailedSolution) { return null; }

  return (
    <StyledQuestionLevelFeedback className={className} role="status">
      {scoreDisplay && <ReviewScoreText>Score: {scoreDisplay}</ReviewScoreText>}
      {gradingComments &&
        <FeedbackText>
          <span className="feedback-label">Feedback:</span>{' '}
          <Content html={gradingComments} block={false} />
        </FeedbackText>}
      {detailedSolution &&
        <div className="detailed-solution">
          <div className="header">
            Detailed solution:
          </div>
          <Content className="solution" block={true} html={detailedSolution} />
        </div>}
    </StyledQuestionLevelFeedback>
  );
};

QuestionLevelFeedback.displayName = 'OSQuestionLevelFeedback';
