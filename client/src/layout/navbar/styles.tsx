import styled from 'styled-components';
import { CiMenuBurger } from 'react-icons/ci';

export const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 72px;
  margin-top: -72px;
  z-index: 10;
  padding: 0 30px;
  background: ${({ theme }) => theme.palette.primary};
`;

export const ItemsWrapper = styled.div`
  display: flex;
  gap: 50px;
  margin-left: auto;

  @media (max-width: 768px) {
    margin-left: 0;
  }

  @media (max-width: 420px) {
    display: none;
  }
`;

export const NavbarItem = styled.span`
  display: inline-block;
  margin-top: 8px;
  font-size: 18px;
  letter-spacing: 0.48px;
  color: ${({ theme }) => theme.palette.secondary};
  cursor: pointer;

  &:after {
    display: block;
    content: '';
    padding-bottom: 5px;
    border-bottom: solid 2px currentColor;
    transform: scaleX(0);
    transition: transform 0.25s ease-in-out;
  }

  &:hover:after {
    transform: scaleX(1);
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const AuthorizationWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  margin-left: auto;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavbarBurger = styled(CiMenuBurger)`
  display: none;
  margin-left: auto;
  height: 30px;
  width: 30px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;
