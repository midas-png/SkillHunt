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
}

const initialState: VacanciesState = {
  type: 'ALL',
  vacancies: [],
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
  },
});

export default vacanciesSlice.reducer;
