import styled, { css } from 'styled-components';
import { IProps } from './props';

const variantMap = {
  primary: css`
    background: ${({ theme }) => theme.palette.primary};
    border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  `,
  secondary: css`
    background: rgba(255, 255, 255, 0.1);
    color: ${({ theme }) => theme.palette.primary};
    border: none;
  `,
};

const extentMap = {
  medium: css`
    height: 100%;
    min-width: 200px;
  `,
  large: css`
    height: 100%;
    min-width: 350px;
  `,
  full: css`
    height: 100%;
    width: 100%;
  `,
};

export const ComponentWrapper = styled.div<IProps>`
  display: flex;
  flex-direction: column;
  gap: 5px;
  height: 100%;
  ${({ extent = 'full' }) => extentMap[extent]}
`;

export const TextfieldComponent = styled.input<IProps>`
  font-size: 19px;
  height: 100%;
  width: fit-content;
  border-radius: 4px;
  padding: 10px 5px;
  outline: none;
  ${({ variant = 'primary' }) => variantMap[variant]}
  ${({ extent = 'full' }) => extentMap[extent]}
  ${({ error }) =>
    error &&
    `
    border-color: #f00;
  `}
`;

export const ErrorMessage = styled.span`
  color: #f00;
`;

export const TextfieldLabel = styled.span`
  font-size: 10px;
  letter-spacing: 0.5px;
`;
