import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 35px;
  flex-direction: column;

  div {
    z-index: 2;
  }
`;

export const HeroBackgroundImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export const BannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 35px;
  padding: 175px 120px 120px 135px;

  @media screen and (max-width: 768px) {
    padding: 100px 20%;
  }

  @media screen and (max-width: 550px) {
    // gap: 15px;
  }
`;

export const BannerSubtitle = styled.span`
  font-size: 20px;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 18px;

  button {
    height: 44px;
    width: 220px;
  }
`;
