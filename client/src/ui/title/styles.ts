import styled, { css } from 'styled-components';
import { IProps } from './props';

const headingStyles = {
  h1: css`
    font-size: 56px;
  `,
  h2: css`
    font-size: 38px;
  `,
  h3: css`
    font-size: 24px;
  `,
  h4: css`
    font-size: 20px;
  `,
};

const weightStyles = {
  bold: css`
    font-weight: 700;
  `,
  medium: css`
    font-weight: 500;
  `,
};

export const TitleComponent = styled.span<IProps>`
  margin: 0;
  user-select: none;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  color: ${({ theme }) => theme.palette.secondary};
  line-height: 110%;
  letter-spacing: ${({ letterSpacing }) => `${letterSpacing || 1.15}px`};

  ${({ variant = 'h1' }) => headingStyles[variant]}
  ${({ weight = 'medium' }) => weightStyles[weight]}
  ${({ fontSize }) =>
    fontSize &&
    `
    font-size: ${fontSize}px;

    @media screen and (max-width: 1024px) {
      font-size: ${fontSize / 1.5}px;
    }

    @media screen and (max-width: 420px) {
      font-size: ${fontSize / 2.5}px;
    }
    `}
  ${({ textAlign = 'start' }) => `text-align: ${textAlign};`}
  ${({ theme, light }) => light && `color: ${theme.palette.primary};`}
`;
