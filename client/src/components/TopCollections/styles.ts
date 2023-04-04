import styled from 'styled-components';
import { HiArrowNarrowRight } from 'react-icons/hi';
import 'swiper/css';

export const TopCompaniesWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.primary};
  padding: 135px 40px;
  padding-top: 0;
  gap: 55px;
  min-height: 80vh;
`;

export const TrendingTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 25px;
  flex-wrap: wrap;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  margin-left: auto;
`;

export const ButtonContent = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
  font-size: 18px;
  font-family: ${({ theme }) => theme.fontFamily.secondary};
`;

export const ButtonArrow = styled(HiArrowNarrowRight)`
  height: 19px;
  width: 26px;
`;

export const CollectionsWrapper = styled.div`
  display: flex;
  //   justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
`;

export const CollectionCardWrapper = styled.div`
  height: 310px;
  width: 340px;
  background: ${({ theme }) => theme.palette.primary};
  border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  border-radius: 12px;
`;

export const CardHeaderImage = styled.img`
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 12px 12px 0px 0px;
  height: 195px;
  width: 100%;
`;

export const CardBodyWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 32px;
`;

export const CardBodyInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const CardBodyStats = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
`;
