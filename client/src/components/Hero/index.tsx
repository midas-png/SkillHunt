import { FC } from 'react';
import {
  HeroWrapper,
  HeroBackgroundImage,
  Subtitle,
  SubtitleWrapper,
  TitlesWrapper,
  TitleWrapper,
  TextfieldWrapper,
  MainCanvas,
} from './styles';
import { LazyShow } from 'components';
import { Button, Circle3D, Title, Textfield } from 'ui';
import { Assets } from 'assets';

export const Hero: FC = () => (
  <HeroWrapper>
    <HeroBackgroundImage src={Assets.Hero} />
    <TitlesWrapper>
      <LazyShow direction='top'>
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
      </LazyShow>
    </TitlesWrapper>
    <SubtitleWrapper>
      <Subtitle>
        <LazyShow direction='top' delay={0.5}>
          The best place to discover & apply to the coolest start up jobs,
          without the black box.
        </LazyShow>
      </Subtitle>
    </SubtitleWrapper>
    <TextfieldWrapper>
      <Textfield />
      <Button variant='secondary' size='large' disableShadow>
        Explore
      </Button>
    </TextfieldWrapper>
    <MainCanvas>
      <Circle3D
        image={Assets.Hero}
        position={[3.7, 1.4, 0]}
        rotation={[1.5, 1.6, -0.1]}
        args={[0.45, 0.45, 0.15, 55, 1]}
      />
      <Circle3D
        image={Assets.Hero}
        position={[-5, -1.5, 0]}
        rotation={[1.3, 1.5, 0.2]}
        args={[0.5, 0.5, 0.15, 55, 1]}
      />
    </MainCanvas>
  </HeroWrapper>
);
