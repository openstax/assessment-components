import { ReactNode } from "react";
import { breakpoints, colors } from "../theme";
import { AvailablePoints, Step } from "../types";
import styled from "styled-components";
import cn from "classnames";

export const InnerStepCard = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 400px;
  border-radius: 0.25rem;
  margin: 0 auto 5rem auto;
  border: 1px solid ${colors.palette.light};
  border-radius: 0.25rem;
  background-color: white;

  ${breakpoints.desktop`
    max-width: 1000px;
    min-width: 750px;
  `}
`;

export const OuterStepCard = styled.div`
  padding: 2rem;

  ${breakpoints.tablet`
    padding: 0;
  `}
`;

const StepCardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 24px;
  background: ${colors.card.background};
  font-size: 1.8rem;
  line-height: 3rem;

  div {
    display: flex;
    align-items: center;
  }

  div.question-info {
    font-weight: bold;

    .ox-icon-lock {
        margin-right: 1rem;
    }
  }

  .num-questions, .points, .separator {
      display: none;
  }

  .exercise-id, .separator {
      font-weight: normal;
  }

  .separator {
      margin: 0 1rem;
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
      font-size: 1.4rem;
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
    padding: 48px 140px;

    ${breakpoints.tablet`
      padding: ${breakpoints.margins.tablet} ${breakpoints.margins.tablet};
    `}

    ${breakpoints.mobile`
      padding: calc(${breakpoints.margins.mobile} * 2) ${breakpoints.margins.mobile};
    `}
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
  leftHeaderChildren?: ReactNode;
  rightHeaderChildren?: ReactNode;
  headerTitleChildren?: ReactNode;
}

export interface StepCardProps extends SharedProps {
  unpadded: boolean;
  className?: string;
  children?: ReactNode;
  stepType: Step['type'];
  availablePoints: AvailablePoints;
  questionId?: string;
  multipartBadge?: ReactNode;
  isHomework: boolean;
}

const StepCard = ({
  questionNumber,
  numberOfQuestions,
  stepType,
  isHomework,
  availablePoints,
  unpadded,
  className,
  children,
  questionId,
  multipartBadge,
  leftHeaderChildren,
  rightHeaderChildren,
  headerTitleChildren,
  ...otherProps }: StepCardProps) => {
  return (
    <OuterStepCard {...otherProps}>
      {multipartBadge}
      <InnerStepCard className={className}>
        {questionNumber && isHomework && stepType === 'exercise' &&
          <StepCardHeader>
            <div>
              {leftHeaderChildren}
              <div className="question-info">
                {headerTitleChildren}
                <span>Question {questionNumber}</span>
                <span className="num-questions">&nbsp;/ {numberOfQuestions}</span>
                <span className="separator">|</span>
                <span className="question-id">ID: {questionId}</span>
              </div>
            </div>
            <div>
              <div className="points">{availablePoints} Points</div>
              {rightHeaderChildren}
            </div>
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
  step: Step;
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
  stepType={step.type}
  isHomework={step.task.type === 'homework'}
  data-task-step-id={step.id}
  availablePoints={step.available_points}
  className={cn(`${step.type}-step`, className)}
  questionId={step.uid}
>
  {children}
</StepCard>);

TaskStepCard.displayName = 'OSTaskStepCard';

export { StepCard, TaskStepCard };
