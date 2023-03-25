import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  display: flex;
  gap: 35px;
  flex-direction: column;
  height: 100vh;

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

export const TitlesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 100px 54px 68px;

  @media screen and (max-width: 768px) {
    padding: 100px 0px 54px 0px;
  }

  @media screen and (max-width: 550px) {
    gap: 15px;
  }
`;

export const TitleWrapper = styled.div<{ reversed?: boolean }>`
  ${({ reversed }) => (reversed ? 'margin-left: 15vw;' : 'margin-right: 29%;')}

  @media screen and (max-width: 550px) {
    margin-left: 0;
    margin-right: 0;
  }

  ${({ reversed }) =>
    reversed &&
    `
    @media screen and (max-width: 280px) {
      span {
        font-size: 35px;
      }
    }
  `}
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Subtitle = styled.span`
  font-size: 24px;
  line-height: 36px;
  max-width: 640px;
  color: ${({ theme }) => theme.palette.secondary};

  @media screen and (max-width: 768px) {
    text-align: center;
  }
`;

export const TextfieldWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 0 50px;

    input,
    button {
      width: 100%;
    }
  }
`;
