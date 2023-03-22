import styled, { css, keyframes } from 'styled-components';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IProps } from './props';

const spinnerAnimation = keyframes`
    0% {
        transform:rotate(0deg);
    }
    100% {
        transform:rotate(360deg);
    }
`;

const variantMap = {
  primary: css`
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.palette.primary} 50%, ${theme.palette.secondary} 50%) right`};
    background-size: 201% 100%;
    color: ${({ theme }) => theme.palette.secondary};
    border: 2px solid ${({ theme }) => theme.palette.secondary};
    box-shadow: 6px 6px 0px 0px ${({ theme }) => theme.palette.secondary};

    &:hover {
      background-position: left;
      color: ${({ theme }) => theme.palette.primary};
    }
  `,
  secondary: css`
    background: ${({ theme }) =>
      `linear-gradient(to left, ${theme.palette.tertiary} 50%, ${theme.palette.secondary} 50%) right`};
    background-size: 200% 100%;
    color: ${({ theme }) => theme.palette.secondary};
    border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
    box-shadow: 6px 6px 0px 0px ${({ theme }) => theme.palette.secondary};

    &:hover {
      background-position: left;
      color: ${({ theme }) => theme.palette.primary};
    }
  `,
};

const sizeMap = {
  small: css`
    padding: 6px 12px;
  `,
  medium: css`
    height: 40px;
    min-width: 150px;
    padding: 0 10px;
  `,
  large: css`
    padding: 12px 60px;
  `,
  full: css`
    width: 100%;
  `,
};

export const ButtonComponent = styled.button<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  font-size: 14px;
  letter-spacing: 0.36px;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  ${({ variant = 'primary' }) => variantMap[variant]};
  ${({ size = 'medium' }) => sizeMap[size]};
  ${({ disableShadow }) =>
    disableShadow &&
    `
    box-shadow: none;
  `}
`;

export const SpinLoader = styled(AiOutlineLoading3Quarters)`
  animation: ${spinnerAnimation} 1s linear infinite;
`;
