import { FC } from 'react';
import {
  HeroWrapper,
  HeroBackgroundImage,
  TitlesWrapper,
  TitleWrapper,
} from './styles';
import { Title } from 'ui';
import { Assets } from 'assets';

export const Hero: FC = () => (
  <HeroWrapper>
    <HeroBackgroundImage src={Assets.Hero} />
    <TitlesWrapper>
      <TitleWrapper>
        <Title fontSize={120} weight='bold' textAlign='center'>
          Land a job
        </Title>
      </TitleWrapper>
      <TitleWrapper reversed>
        <Title fontSize={120} textAlign='center'>
          the easy way
        </Title>
      </TitleWrapper>
    </TitlesWrapper>
  </HeroWrapper>
);
