import { useEffect, FC } from 'react';
import { VacanciesWrapper } from './styles';
import { VACANCIES } from './data';
import { VacancyCard } from 'ui';
import { vacanciesSlice } from 'store';
import { useAppDispatch, useAppSelector } from 'features';

export const VacanciesResult: FC = () => {
  const { setVacancies } = vacanciesSlice.actions;
  const { vacancies } = useAppSelector((state) => state.vacanciesSlice);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setVacancies(VACANCIES));
  }, []);

  return (
    <VacanciesWrapper>
      {vacancies.map((vacancy) => (
        <VacancyCard
          key={vacancy.id}
          title={vacancy.title}
          company={vacancy.company}
          location={vacancy.location}
          employees={vacancy.employees}
          apply={vacancy.apply}
        />
      ))}
    </VacanciesWrapper>
  );
};
