import { FC } from 'react';
import {
  HeroWrapper,
  HeroBackgroundImage,
  BannerWrapper,
  BannerSubtitle,
  ButtonsWrapper,
} from './styles';
import { Button, Title } from 'ui';
import { Assets } from 'assets';

export const JoinBanner: FC = () => (
  <HeroWrapper>
    <HeroBackgroundImage src={Assets.JoinBanner} />
    <BannerWrapper>
      <Title fontSize={75}>Your one stop job shop.</Title>
      <BannerSubtitle>
        Join to apply to 100’s of the best start up jobs.
      </BannerSubtitle>
      <ButtonsWrapper>
        <Button variant='tertiary' size='large'>
          Start for free
        </Button>
        <Button size='large'>Join as a company</Button>
      </ButtonsWrapper>
    </BannerWrapper>
  </HeroWrapper>
);
