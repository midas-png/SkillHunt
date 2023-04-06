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

export const TextfieldComponent = styled.input<IProps>`
  font-size: 19px;
  height: 100%;
  width: 100%;
  border-radius: 4px;
  padding: 10px 5px;
  outline: none;
  ${({ variant = 'primary' }) => variantMap[variant]};
`;
