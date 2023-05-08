import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 23px;
  width: 330px;
  background: ${({ theme }) => theme.palette.primary};
  border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  border-radius: 8px;
  padding: 30px;
`;

export const CardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    height: 22px;
    width: 22px;
    cursor: pointer;
  }
`;

export const CardImage = styled.img`
  height: 42px;
  width: 42px;
  object-fit: cover;
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 5px;
  cursor: pointer;
`;

export const CardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const CardTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.palette.secondary};
  cursor: pointer;
`;

export const CardSubtitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const CardEmployees = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.secondary};
`;
