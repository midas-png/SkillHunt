import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/UserSlice';
import modalReducer from './reducers/ModalSlice';
import vacanciesSlice from './reducers/VacanciesSlice';

const rootReducer = combineReducers({
  userReducer,
  modalReducer,
  vacanciesSlice,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
