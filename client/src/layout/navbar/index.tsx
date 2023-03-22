import {
  NavbarWrapper,
  ItemsWrapper,
  NavbarItem,
  AuthorizationWrapper,
  NavbarBurger,
} from './styles';
import { Button } from 'ui';

export const Navbar = () => (
  <NavbarWrapper>
    <ItemsWrapper>
      <NavbarItem>Find Jobs</NavbarItem>
      <NavbarItem>For Companies</NavbarItem>
    </ItemsWrapper>
    <AuthorizationWrapper>
      <NavbarItem>Sign In</NavbarItem>
      <Button>Sign Up</Button>
    </AuthorizationWrapper>
    <NavbarBurger />
  </NavbarWrapper>
);
