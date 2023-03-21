import { HeroWrapper, HeroBackgroundImage } from './styles';
import { Assets } from 'assets';

export const Hero = () => (
  <HeroWrapper>
    <HeroBackgroundImage src={Assets.Hero} />
  </HeroWrapper>
);
