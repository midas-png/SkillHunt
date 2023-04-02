import styled from 'styled-components';

export const BenefitsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.secondary};
  padding: 150px 85px;
  gap: 80px;
  min-height: 100vh;

  div {
    z-index: 2;
  }
`;

export const BenefitsHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
`;

export const BenefitsCardsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 45px;
  flex-wrap: wrap;
`;

export const BenefitCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  width: 310px;
`;

export const BenefitCardSubtitle = styled.span`
  color: ${({ theme }) => theme.palette.primary};
  line-height: 24px;
`;
