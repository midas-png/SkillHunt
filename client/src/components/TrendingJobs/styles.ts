import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { HiArrowNarrowRight } from 'react-icons/hi';
import 'swiper/css';

export const TrendingJobsWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.palette.primary};
  padding: 135px 40px;
  gap: 55px;
  min-height: 80vh;

  div {
    z-index: 2;
  }
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

export const JobCardWrapper = styled(SwiperSlide)`
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

export const JobCardHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  svg {
    height: 22px;
    width: 22px;
    cursor: pointer;
  }
`;

export const JobCardImage = styled.img`
  height: 42px;
  width: 42px;
  object-fit: cover;
  background: ${({ theme }) => theme.palette.secondary};
  border-radius: 5px;
  cursor: pointer;
`;

export const JobCardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 19px;
`;

export const JobCardTitle = styled.span`
  font-size: 18px;
  letter-spacing: 0.6px;
  color: ${({ theme }) => theme.palette.secondary};
  cursor: pointer;
`;

export const JobCardSubtitle = styled.span`
  font-size: 14px;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const JobCardEmployees = styled.span`
  font-size: 16px;
  color: ${({ theme }) => theme.palette.secondary};
`;
