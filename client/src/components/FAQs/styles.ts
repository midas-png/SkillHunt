import styled from 'styled-components';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.palette.secondary};
  padding: 130px 110px;
  gap: 56px;

  @media screen and (max-width: 768px) {
    padding: 130px 50px;
  }
`;

export const FaqsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 100%;
`;
