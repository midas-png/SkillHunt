import { useRef } from 'react';
import { IoFilterSharp } from 'react-icons/io5';
import {
  VacanciesHeadWrapper,
  VacanciesSearchWrapper,
  VacanciesTypesWrapper,
  VacanciesFiltersWrapper,
  SearchWrapper,
  FiltersMenuWrapper,
} from './styles';
import { Filters } from './Filters';
import { VacanciesMenu } from './Menu';
import {
  useToggle,
  useAppDispatch,
  useAppSelector,
  useOutsideClick,
} from 'features';
import { vacanciesSlice } from 'store';
import { Button, Textfield, Title } from 'ui';

export const VacanciesSearch = () => {
  const filtersRef = useRef<HTMLInputElement>(null);
  const [filtersOpen, toggleFiltersOpen] = useToggle();
  const { search } = useAppSelector((state) => state.vacanciesSlice);
  const { setSearch } = vacanciesSlice.actions;
  const dispatch = useAppDispatch();

  const handleSearch = (e: { target: { value: string } }): void => {
    sessionStorage.setItem('searchVacancies', e.target.value);
    dispatch(setSearch(e.target.value));
  };

  const handleClickOutside = (): void => {
    if (filtersOpen) toggleFiltersOpen();
  };

  useOutsideClick(filtersRef, handleClickOutside);

  return (
    <VacanciesHeadWrapper>
      <VacanciesSearchWrapper>
        <Title variant='h2' weight='bold'>
          Vacancies
        </Title>
        <SearchWrapper>
          <Textfield
            extent='large'
            onChange={handleSearch}
            defaultValue={search}
          />
          <Button disableShadow size='medium' variant='tertiary'>
            Search
          </Button>
        </SearchWrapper>
        <FiltersMenuWrapper>
          <VacanciesFiltersWrapper onClick={toggleFiltersOpen}>
            <IoFilterSharp />
          </VacanciesFiltersWrapper>
          {filtersOpen && <Filters />}
        </FiltersMenuWrapper>
      </VacanciesSearchWrapper>
      <VacanciesTypesWrapper>
        <VacanciesMenu />
      </VacanciesTypesWrapper>
    </VacanciesHeadWrapper>
  );
};
