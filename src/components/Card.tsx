import { ReactNode } from "react";
import { breakpoints, colors, layouts, mixins } from "../theme";
import { AvailablePoints, StepBase, StepWithData } from "../types";
import styled from "styled-components";
import cn from "classnames";

export const InnerStepCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  margin: 0 auto 5rem auto;
  border: 1px solid ${colors.palette.light};
  border-radius: 0.25rem;
  background-color: white;
  overflow: hidden;

  ${breakpoints.desktop`
    max-width: 1000px;
  `}
`;

export const OuterStepCard = styled.div`
  padding: ${layouts.card.spacing};

  ${breakpoints.mobile`
    padding: 0;
  `}
`;

const StepCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${colors.card.header.background};
  font-size: 1.8rem;
  line-height: 3rem;
  letter-spacing: -0.72px;

  h2.question-info {
    display: flex;
    align-items: baseline;
    font-size: inherit;
    margin: inherit;

    .question-id {
      font-weight: normal;
    }
    .ox-icon-lock {
        margin-right: 1rem;
    }
  }

  .num-questions, .points {
      display: none;
  }

  .exercise-id, .separator {
      font-weight: normal;
  }

  .separator {
      margin: 0 0.4rem;
  }

  .exercise-id {
      height: 28px; // Fix baseline issue
  }

  button {
    color: ${colors.palette.gray};
  }

  .openstax-exercise-badges {
      margin: 0;
      line-height: 2rem;
      svg {
          display: block;
          &:not(.interactive) {
              margin: 0 0 0 6px !important;
          }
      }
  }

  ${breakpoints.desktop`
      button.ox-icon-angle-left, button.ox-icon-angle-right {
          display: none;
      }
      .separator {
          display: inherit;
      }
  `}

    /*
    1. Show the arrows to move to previous and next question.
    2. Show the number of questions.
    3. Override box-shadow of icons when turned into a button.
    */
    ${breakpoints.tablet`
        font-size: 1.6rem;
        line-height: 2.5rem;

        svg.ox-icon {
            display: inherit;
            margin: 0;
        }
        button.ox-icon-angle-left {
            margin-right: ${breakpoints.margins.tablet};
        }
        button.ox-icon-angle-right {
            margin-left: ${breakpoints.margins.tablet};
        }
        .openstax-exercise-badges svg {
            display: none;
        }
        .num-questions, points {
            display: inherit;
        }

        .exercise-id {
            display: none;
        }

        button[class^='ox-icon-angle']:hover {
            box-shadow: none;
        }
  `}

  ${breakpoints.mobile`
      font-size: 1.6rem;
      line-height: 2rem;
      padding: 10px 8px;

      button.ox-icon-angle-left {
          margin-right: ${breakpoints.margins.mobile};
      }
      button.ox-icon-angle-left {
          margin-right: ${breakpoints.margins.mobile};
      }
  `}
`;
StepCardHeader.displayName = 'StepCardHeader';

const StepCardQuestion = styled.div<{ unpadded?: boolean }>`
  .step-card-body {
    ${mixins.stepCardPadding()}
    overflow: auto;
    background: ${colors.card.body.background};

    &.exercise-stimulus {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }

    & + div .step-card-body {
        padding-top: 0;
    }

    &.exercise-context, &.exercise-stimulus, &.exercise-stem {
        padding-bottom: 0;
    }

    ${breakpoints.only.mobile`
        && .question-feedback {
            margin-left: 0;

           .arrow { margin-left: 12px; }
        }
    `}

    .reading-step & {
        padding: 0;
    }

    ${breakpoints.desktop`
        .video-step &, .interactive-step & {
            .openstax-exercise-badges {
              margin-right: 3.8rem;
            }
        }
    `}

    ${breakpoints.mobile`
        .openstax-exercise-badges svg {
            margin-right: ${breakpoints.margins.mobile};
        }
    `}

    &&& {
        .openstax-has-html .splash .frame-wrapper { margin-top: 0; }
    }
`;

interface SharedProps {
  questionNumber: number;
  numberOfQuestions: number;
  showTotalQuestions: boolean;
  leftHeaderChildren?: ReactNode;
  rightHeaderChildren?: ReactNode;
  headerTitleChildren?: ReactNode;
}

export interface StepCardProps extends SharedProps {
  unpadded: boolean;
  className?: string;
  children?: ReactNode;
  stepType: StepWithData['type'];
  availablePoints?: AvailablePoints;
  questionId?: string;
  multipartBadge?: ReactNode;
  isHomework: boolean;
}

const StepCard = ({
  questionNumber,
  numberOfQuestions,
  showTotalQuestions,
  stepType,
  isHomework,
  availablePoints,
  unpadded, // currently does nothing; may need to restore if this causes tutor stepcard regression
  className,
  children,
  questionId,
  multipartBadge,
  leftHeaderChildren,
  rightHeaderChildren,
  headerTitleChildren,
  ...otherProps }: StepCardProps) => {

  const formattedQuestionNumber = numberOfQuestions > 1
    ? `Questions ${questionNumber} - ${questionNumber + numberOfQuestions - 1}`
    : `Question ${questionNumber}`;

  return (
    <OuterStepCard {...otherProps}>
      {multipartBadge}
      <InnerStepCard className={className}>
        {questionNumber && isHomework && stepType === 'exercise' &&
          <StepCardHeader>
            <div>
              {leftHeaderChildren}
              <h2 className="question-info">
                {headerTitleChildren}
                <span>{formattedQuestionNumber}</span>
                {showTotalQuestions ? <span className="num-questions">&nbsp;/ {numberOfQuestions}</span> : null}
                <span className="separator">|</span>
                <span className="question-id">ID: {questionId}</span>
              </h2>
            </div>
            {availablePoints || rightHeaderChildren ? <div>
              {availablePoints && <div className="points">{availablePoints} Points</div>}
              {rightHeaderChildren}
            </div> : null}
          </StepCardHeader>
        }
        <StepCardQuestion unpadded={unpadded}>{children}</StepCardQuestion>
      </InnerStepCard>
    </OuterStepCard>
  )
};
StepCard.displayName = 'OSStepCard';

export interface TaskStepCardProps extends SharedProps {
  className?: string;
  children?: ReactNode;
  step: StepBase | StepWithData;
  questionNumber: number;
  numberOfQuestions: number;
}

const TaskStepCard = ({
  step,
  questionNumber,
  numberOfQuestions,
  children,
  className,
  ...otherProps
}: TaskStepCardProps) =>
(<StepCard {...otherProps}
  unpadded={true}
  questionNumber={questionNumber}
  numberOfQuestions={numberOfQuestions}
  stepType={'type' in step ? step.type : 'exercise'}
  isHomework={'task' in step ? (step.task === undefined || step.task.type === 'homework') : true}
  data-task-step-id={step.id}
  // uncomment next line to display available points on exercise questions
  // availablePoints={step.available_points}
  className={cn(`${('type' in step ? step.type : 'exercise')}-step`, className)}
  questionId={step.uid}
>
  {children}
</StepCard>);

TaskStepCard.displayName = 'OSTaskStepCard';

export { StepCard, TaskStepCard };
