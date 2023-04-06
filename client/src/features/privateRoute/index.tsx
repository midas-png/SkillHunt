import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { IProps } from './props';
import { useAppSelector } from 'features';

export const PrivateRoute: FC<IProps> = ({ authRoute, redirectPath }) => {
  const { isAuth } = useAppSelector((state) => state.userReducer);
  const auth = authRoute ? isAuth : !isAuth;

  if (auth) {
    return <Outlet />;
  }

  return <Navigate to={redirectPath ? redirectPath : '/signin'} />;
};
