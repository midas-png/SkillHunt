import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 50px;
  padding: 72px 100px 100px 30px;
  background: ${({ theme }) => theme.palette.secondary};
`;

export const EmailSocialsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 35px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const TextfieldWrapper = styled.div`
  width: 240px;
`;

export const MediaLinksWrapper = styled.div`
  display: flex;
  gap: 25px;
`;

export const MediaLinkItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 38px;
  width: 38px;
  background: ${({ theme }) => theme.palette.secondary};
  border: ${({ theme }) => `1px solid ${theme.palette.primary}`};
  cursor: pointer;

  svg {
    height: 19px;
    width: 19px;
    fill: ${({ theme }) => theme.palette.primary};
  }
`;

export const NavigationWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

export const NavigationColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const NavigationItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const NavigationItem = styled(Link)`
  font-size: 17px;
  line-height: 27px;
  color: ${({ theme }) => theme.palette.primary};
  text-decoration: none;
  letter-spacing: 1.5px;
`;
