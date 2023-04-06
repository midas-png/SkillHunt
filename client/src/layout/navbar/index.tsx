import {
  NavbarWrapper,
  ItemsWrapper,
  NavbarItem,
  AuthorizationWrapper,
  NavbarBurger,
} from './styles';
import { useAppDispatch } from 'features';
import { modalSlice } from 'store';
import { Button } from 'ui';

export const Navbar = () => {
  const { setType } = modalSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <NavbarWrapper>
      <ItemsWrapper>
        <NavbarItem>Find Jobs</NavbarItem>
        <NavbarItem>For Companies</NavbarItem>
      </ItemsWrapper>
      <AuthorizationWrapper>
        <NavbarItem onClick={() => dispatch(setType('SIGNIN'))}>
          Sign In
        </NavbarItem>
        <Button onClick={() => dispatch(setType('SIGNUP'))}>Sign Up</Button>
      </AuthorizationWrapper>
      <NavbarBurger />
    </NavbarWrapper>
  );
};
