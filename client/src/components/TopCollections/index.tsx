import { FC } from 'react';
import {
  TopCompaniesWrapper,
  TrendingTitleWrapper,
  ButtonWrapper,
  ButtonContent,
  ButtonArrow,
  CollectionsWrapper,
  CollectionCardWrapper,
  CardHeaderImage,
  CardBodyWrapper,
  CardBodyInfoWrapper,
  CardBodyStats,
} from './styles';
import { TOP_COLLECTIONS } from './data';
import { Button, Title } from 'ui';

export const TopCollections: FC = () => {
  return (
    <TopCompaniesWrapper>
      <TrendingTitleWrapper>
        <Title variant='h2'>Browse Collections</Title>
        <ButtonWrapper>
          <ButtonContent>View all</ButtonContent>
          <ButtonArrow />
        </ButtonWrapper>
      </TrendingTitleWrapper>
      <CollectionsWrapper>
        {TOP_COLLECTIONS.map((collection) => (
          <CollectionCardWrapper key={collection.id}>
            <CardHeaderImage />
            <CardBodyWrapper>
              <CardBodyInfoWrapper>
                <Title variant='h3'>{collection.name}</Title>
                <CardBodyStats>
                  {collection.companies} Companies · {collection.openPositions}{' '}
                  Jobs
                </CardBodyStats>
              </CardBodyInfoWrapper>
              <Button size='square' disableShadow />
            </CardBodyWrapper>
          </CollectionCardWrapper>
        ))}
      </CollectionsWrapper>
    </TopCompaniesWrapper>
  );
};
