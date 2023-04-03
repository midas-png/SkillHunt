import styled from 'styled-components';
import { Assets } from 'assets';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FaqWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: #262626;
  padding: 26px;
  cursor: pointer;
  z-index: 2;
`;

export const FaqQuestion = styled.span`
  font-size: 21px;
  letter-spacing: 0.72px;
  color: ${({ theme }) => theme.palette.primary};
`;

export const FaqArrow = styled(Assets.Arrow)<{ open: boolean }>`
  transform: rotate(${({ open }) => (open ? '-180deg' : '0deg')});
  transition: transform 0.3s ease-in-out;
`;

export const AnswerWrapper = styled.div<{ open: boolean }>`
  background: ${({ theme }) => theme.palette.primary};
  max-height: ${({ open }) => (open ? '1000px' : '0.001px')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  padding: ${({ open }) => open && '26px'};
  transition: all 0.3s ease-in-out;
`;

export const Answer = styled.span<{ open: boolean }>`
  font-size: ${({ open }) => (open ? '21px' : '0')};
  letter-spacing: 0.72px;
  color: ${({ theme }) => theme.palette.secondary};
`;
