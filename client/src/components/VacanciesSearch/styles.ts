import styled from 'styled-components';

export const VacanciesHeadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 55px 35px;
  margin-top: 72px;
`;

export const VacanciesSearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 16px;
`;

export const VacanciesTypesWrapper = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
`;

export const VacanciesFiltersWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  height: 45px;
  width: 45px;
  border-radius: 5px;
  cursor: pointer;

  svg {
    height: 50%;
    width: 100%;
  }
`;
