import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
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

export const SwiperWrapper = styled(Swiper)`
  width: 100%;
  height: 330px;
`;

export const CompanyCardWrapper = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  width: 330px;
  background: ${({ theme }) => theme.palette.primary};
  border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  border-radius: 8px;
`;

export const CompanyCardImage = styled.img`
  height: 100px;
  width: 100%;
  object-fit: cover;
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 5px 5px 0px 0px;
  cursor: pointer;
`;

export const CompanyCardBodyWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 17px;
  padding: 25px 30px;
`;

export const CompanyCardSubtitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const CompanyCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 60%;
  gap: 12px;
`;

export const CompanyCardTitle = styled.span`
  font-size: 18px;
  font-weight: 700;
  height: 40px;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.palette.secondary};
  cursor: pointer;
`;

export const CompanyCardSubtitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const CompanyCardEmployees = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.secondary};
`;
