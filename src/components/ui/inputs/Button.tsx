import { styled, css, DefaultTheme } from "solid-styled-components";

export interface Props {
  readonly disable?: boolean;
  readonly theme?: () => DefaultTheme;
}

export const SillyButton = styled("button")<Props>`
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: none;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: ${(p) => p.theme!()!.fonts.secondary};
  font-weight: 600;
  text-transform: uppercase;

  padding: 1.25em 2em;
  border-radius: 0.75em;
  background: var(--light-waffle);
  color: var(--text-1);
  border: 2px solid var(--waffle-border);

  touch-action: manipulation;

  transform-style: preserve-3d;
  transition:
    transform 150ms cubic-bezier(0, 0, 0.58, 1),
    background 150ms cubic-bezier(0, 0, 0.58, 1);

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: var(--dark-waffle);
    border-radius: inherit;
    box-shadow:
      0 0 0 2px var(--waffle-border),
      0 0.625em 0 0 #dea737;
    transform: translate3d(0, 0.75em, -1em);
    transition:
      transform 150ms cubic-bezier(0, 0, 0.58, 1),
      box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
  }

  @media (pointer: coarse) {
    &:active {
      transform: scale(0.98);
    }
  }

  &:hover {
    background: var(--waffle);
    transform: translateY(0.25em);

    &::before {
      box-shadow:
        0 0 0 2px var(--waffle-border),
        0 0.5em 0 0 #dba129;
      transform: translate3d(0, 0.5em, -1em);
    }
  }

  &:active {
    background: var(--waffle);
    transform: translateY(0.75em);

    &::before {
      box-shadow:
        0 0 0 2px var(--waffle-border),
        0 0 var(--waffle-shadow);
      transform: translate3d(0, 0, -1em);
    }
  }

  ${(props) =>
    props.disable
      ? css`
          cursor: not-allowed;
          pointer-events: none;
          opacity: 0.5;
          filter: grayscale(50%);
          transform: none;

          &::before {
            box-shadow: none;
            transform: none;
          }
        `
      : ""};
`;
