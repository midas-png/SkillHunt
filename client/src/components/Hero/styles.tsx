import styled from 'styled-components';

export const HeroWrapper = styled.div`
  position: relative;
  height: 100vh;
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
  ${({ reversed }) => (reversed ? 'margin-left: 10vw;' : 'margin-right: 29%;')}

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
