import styled from 'styled-components';

export const SigninModalWrapper = styled.div`
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

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const ModalLinkWrapper = styled.div`
  display: flex;
  gap: 5px;
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
