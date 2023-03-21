import {
  NavbarWrapper,
  ItemsWrapper,
  NavbarItem,
  AuthorizationWrapper,
} from './styles';

export const Navbar = () => (
  <NavbarWrapper>
    <ItemsWrapper>
      <NavbarItem>Find Jobs</NavbarItem>
      <NavbarItem>For Companies</NavbarItem>
    </ItemsWrapper>
    <AuthorizationWrapper>
      <NavbarItem>Sign In</NavbarItem>
      <NavbarItem>test</NavbarItem>
    </AuthorizationWrapper>
  </NavbarWrapper>
);
