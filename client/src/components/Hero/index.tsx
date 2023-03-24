import { FC } from 'react';
import { HeroWrapper, HeroBackgroundImage } from './styles';
import { Assets } from 'assets';

export const Hero: FC = () => (
  <HeroWrapper>
    <HeroBackgroundImage src={Assets.Hero} />
  </HeroWrapper>
);
