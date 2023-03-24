import { FC } from 'react';
import {
  HeroWrapper,
  HeroBackgroundImage,
  Subtitle,
  SubtitleWrapper,
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
        <Title fontSize={120} textAlign='center'>
          Land a job
        </Title>
      </TitleWrapper>
      <TitleWrapper reversed>
        <Title fontSize={120} textAlign='center'>
          the easy way
        </Title>
      </TitleWrapper>
    </TitlesWrapper>
    <SubtitleWrapper>
      <Subtitle>
        The best place to discover & apply to the coolest start up jobs, without
        the black box.
      </Subtitle>
    </SubtitleWrapper>
  </HeroWrapper>
);
