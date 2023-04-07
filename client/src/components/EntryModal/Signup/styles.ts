import styled from 'styled-components';

export const SignupModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 25px;
`;

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const LinkWrapper = styled.div`
  display: flex;
  gap: 5px;
`;

export const ModalTermsWrapper = styled.span`
  text-align: center;
`;

export const ModalTerms = styled.span`
  font-size: 14px;
  opacity: 0.6;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ModalTermsLink = styled.span`
  font-size: 14px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ModalLink = styled.span`
  font-size: 16px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.secondary};
`;

export const ModalLinkContent = styled.span`
  font-size: 16px;
  opacity: 0.6;
  color: ${({ theme }) => theme.palette.secondary};
`;
