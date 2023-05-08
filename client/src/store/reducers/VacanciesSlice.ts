import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Vacancies {
  id: number;
  title: string;
  company: string;
  location: string;
  employees: number;
  apply: string;
  image: string;
}

interface VacanciesState {
  type: string;
  vacancies: Array<Vacancies>;
  search: string;
}

const initialState: VacanciesState = {
  type: 'ALL',
  vacancies: [],
  search: sessionStorage.getItem('searchVacancies') || '',
};

export const vacanciesSlice = createSlice({
  name: 'vacancies',
  initialState,
  reducers: {
    setType(state, action: PayloadAction<string>) {
      state.type = action.payload;
    },
    setVacancies(state, action: PayloadAction<Array<Vacancies>>) {
      state.vacancies = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.search = action.payload;
    },
  },
});

export default vacanciesSlice.reducer;
