import { Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Vacancies } from './Vacancies';
import { PrivateRoute } from 'features';

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path='/' element={<Home />} />
      </Route>
      <Route path='/vacancies' element={<Vacancies />} />
    </Routes>
  );
};
