import { css } from "styled-components";

export const exerciseStyles = css`

  &.included-card {
    background-color: #daf3f8;
    .step-card-footer-inner, .step-card-body, .step-card-header {
      background-color: #daf3f8 !important;
    }

    .answer-letter-wrapper::before:not(.answer-correct} {
      background-color: #daf3f8 !important;
    }
  }

  &.preview-card {
    --spacing: 0.8rem;

    .step-card-header,
    .step-card-body {
      background-color: #FFFFFF;
      padding: var(--spacing);
      font-size: 1.6rem;
      line-height: 2rem;
    }

    .step-card-footer {
      padding: 0 var(--spacing) var(--spacing);
    }

    .step-card-footer-inner {
      padding-top: var(--spacing);
    }

    .answers-table {
      margin: 0;
    }

    .exercise-context {
      .os-title {
        margin: 0 0 var(--spacing);
      }
      .os-subtitle {
        margin: var(--spacing) 0;
      }
      figure {
        float: left;
        margin: 0;
      }
      img {
        max-width: 16rem;
      }
      p:last-child {
        margin-bottom: 0;
      }
    }
    .openstax-question {
      .openstax-answer {
        padding: 0;
        border: none;

        .answer-label {
          padding-top: var(--spacing);
        }

        .answer-letter-wrapper {
          .answer-answer {
            margin-left: var(--spacing);
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

      .question-feedback-content {
        font-size: 1.6rem;
      }

      .points,
      .question-feedback {
        max-width: unset;
      }
    }

    .step-card-footer, .detailed-solution {
      display: none;
    }

    .question-stem,
    .question-feedback-content,
    .question-info,
    .exercise-context {
      line-height: 2rem;
    }

    .question-info {
      font-weight: bold;
      font-size: 1.6rem;
    }

    .question-id {
      font-weight: 400;
      font-size: 1.6rem;
    }

    .question-stem {
      color: #424242;
      font-weight: bold;
      font-size: 1.6rem;
    }
  }
`;
