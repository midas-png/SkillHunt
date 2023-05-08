import { FC } from 'react';
import { Link } from 'react-router-dom';
import {
  HeroWrapper,
  HeroBackgroundImage,
  Subtitle,
  SubtitleWrapper,
  TitlesWrapper,
  TitleWrapper,
  TextfieldWrapper,
  MainCanvas,
  InnerTextfieldWrapper,
} from './styles';
import { LazyShow } from 'components';
import { useAppDispatch, useAppSelector } from 'features';
import { vacanciesSlice } from 'store';
import { Button, Circle3D, Title, Textfield } from 'ui';
import { Assets } from 'assets';

export const Hero: FC = () => {
  const { search } = useAppSelector((state) => state.vacanciesSlice);
  const { setSearch } = vacanciesSlice.actions;
  const dispatch = useAppDispatch();

  const handleSearch = (e: { target: { value: string } }): void => {
    sessionStorage.setItem('searchVacancies', e.target.value);
    dispatch(setSearch(e.target.value));
  };

  return (
    <HeroWrapper>
      <HeroBackgroundImage src={Assets.Hero} />
      <TitlesWrapper>
        <LazyShow direction='top'>
          <TitleWrapper>
            <Title fontSize={120} letterSpacing={5.2} textAlign='center'>
              Land a job
            </Title>
          </TitleWrapper>
          <TitleWrapper reversed>
            <Title fontSize={120} letterSpacing={5.2} textAlign='center'>
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
        <InnerTextfieldWrapper>
          <Textfield onChange={handleSearch} defaultValue={search} />
        </InnerTextfieldWrapper>
        <Link to='/vacancies'>
          <Button variant='secondary' size='large' disableShadow>
            Explore
          </Button>
        </Link>
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
};
