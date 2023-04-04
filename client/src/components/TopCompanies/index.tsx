import { FC } from 'react';
import {
  TopCompaniesWrapper,
  TrendingTitleWrapper,
  ButtonWrapper,
  ButtonContent,
  ButtonArrow,
  SwiperWrapper,
  CompanyCardWrapper,
  CompanyCardImage,
  CompanyCardInfoWrapper,
  CompanyCardTitle,
  CompanyCardSubtitle,
  CompanyCardEmployees,
  CompanyCardBodyWrapper,
  CompanyCardSubtitlesWrapper,
} from './styles';
import { TOP_COMPANIES } from './data';
import { Button, Title } from 'ui';

export const TopCompanies: FC = () => {
  return (
    <TopCompaniesWrapper>
      <TrendingTitleWrapper>
        <Title variant='h2'>Trending companys</Title>
        <ButtonWrapper>
          <ButtonContent>View all</ButtonContent>
          <ButtonArrow />
        </ButtonWrapper>
      </TrendingTitleWrapper>
      <SwiperWrapper spaceBetween={40} slidesPerView='auto'>
        {TOP_COMPANIES.map((company) => (
          <CompanyCardWrapper key={company.id}>
            <CompanyCardImage />
            <CompanyCardBodyWrapper>
              <CompanyCardInfoWrapper>
                <CompanyCardTitle>{company.name}</CompanyCardTitle>
                <CompanyCardSubtitlesWrapper>
                  <CompanyCardSubtitle>
                    {company.field} · {company.location}
                  </CompanyCardSubtitle>
                  <CompanyCardSubtitle>
                    {company.openPositions} Open Positions
                  </CompanyCardSubtitle>
                  <CompanyCardEmployees>
                    {company.employees} Active Employees
                  </CompanyCardEmployees>
                </CompanyCardSubtitlesWrapper>
              </CompanyCardInfoWrapper>
              <Button>Browse Companys</Button>
            </CompanyCardBodyWrapper>
          </CompanyCardWrapper>
        ))}
      </SwiperWrapper>
    </TopCompaniesWrapper>
  );
};
