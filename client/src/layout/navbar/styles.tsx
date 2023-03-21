import styled from 'styled-components';

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
`;

export const NavbarItem = styled.span`
  color: ${({ theme }) => theme.palette.secondary};
  font-family: ${({ theme }) => theme.fontFamily.primary};
  cursor: pointer;
`;

export const AuthorizationWrapper = styled.div`
  display: flex;
  gap: 30px;
  margin-left: auto;
`;
