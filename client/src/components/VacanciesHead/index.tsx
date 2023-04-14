import { IoFilterSharp } from 'react-icons/io5';
import {
  VacanciesHeadWrapper,
  VacanciesSearchWrapper,
  VacanciesTypesWrapper,
  SearchWrapper,
  VacanciesFiltersWrapper,
} from './styles';
import { VacanciesMenu } from './Menu';
import { Button, Textfield, Title } from 'ui';

export const VacanciesHead = () => {
  return (
    <VacanciesHeadWrapper>
      <VacanciesSearchWrapper>
        <Title variant='h2' weight='bold'>
          Vacancies
        </Title>
        <SearchWrapper>
          <Textfield extent='large' />
          <Button disableShadow size='medium' variant='tertiary'>
            Search
          </Button>
        </SearchWrapper>
        <VacanciesFiltersWrapper>
          <IoFilterSharp />
        </VacanciesFiltersWrapper>
      </VacanciesSearchWrapper>
      <VacanciesTypesWrapper>
        <VacanciesMenu />
      </VacanciesTypesWrapper>
    </VacanciesHeadWrapper>
  );
};
