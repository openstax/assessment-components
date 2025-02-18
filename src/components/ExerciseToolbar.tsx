import { colors, layouts, breakpoints } from "../../src/theme";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { ExerciseIcons } from "./Exercise";

export const StyledToolbar = styled.div<{
  mobile: boolean;
  desktop: boolean;
}>`
  position: absolute;
  background: #fff;
  width: 4.5rem;
  border: 1px solid ${colors.palette.light};
  background: #fff;
  margin: ${layouts.card.spacing} 0 0 ${layouts.card.spacing};
  z-index: 1;

  > * {
    height: 4.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${colors.palette.neutral};
    background: #fff;
    text-decoration: none;

    &:after {
      border-bottom: 1px solid #f1f1f1;
    }

    svg {
      width: 4.3rem;
      height: 1.6rem;
      transition: color 150ms;
    }

    span {
      display: none;
      flex-grow: 1;
      font-size: 1.4rem;
      color: ${colors.palette.neutralDarker};
    }

    &:hover {
      box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 2px;
      width: 20rem;

      svg {
        color: ${colors.palette.neutralDarker};
      }

      span {
        display: block;
      }
    }
  }

  ${props => !props.desktop && css`
    ${breakpoints.desktop`
      display: none;
    `}
    ${breakpoints.tablet`
      display: none;
    `}
  `}

  ${props => props.mobile && breakpoints.mobile`
    display: block;
    position: relative;
    width: auto;
    display: flex;
    flex-direction: row;
    margin: 0;

    &:not(:last-child) {
      border-bottom: 0;
    }

    > * {
      flex-direction: column;
      flex-grow: 1;
      align-items: center;
      justify-content: center;
      padding: 1rem 1.8rem 0.6rem;
      height: auto;
      min-height: 4.8rem;

      &:hover {
        width: auto;
      }

      span {
        display: block;
        font-size: 1.4rem;
        margin-top: 0.2rem;
        color: ${colors.palette.neutral};
        text-align: center;
      }

      & + * {
        border-left: 1px solid ${colors.palette.light};
      }
    }
  `}
`;

export const ExerciseToolbar = ({ icons }: { icons?: ExerciseIcons }) => {
  if (!icons) {
    return null;
  }
  const settings = Object.values(icons);
  const mobile = settings.some(({ location }) => location?.toolbar?.mobile ?? true);
  const desktop = settings.some(({ location }) => location?.toolbar?.desktop ?? false);
  const topicUrl = icons.topic?.url;
  const errataUrl = icons.errata?.url;

  return <StyledToolbar {...{ mobile, desktop }}>
    {topicUrl ? <a href={topicUrl} target="_blank">
      <FontAwesomeIcon icon={faBookOpen}></FontAwesomeIcon>
      <span>View topic in textbook</span>
    </a> : null}
    {errataUrl ? <a href={errataUrl} target="_blank">
      <FontAwesomeIcon icon={faTriangleExclamation}></FontAwesomeIcon>
      <span>Suggest a correction</span>
    </a> : null}
  </StyledToolbar>
};
