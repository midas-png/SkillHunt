import styled from 'styled-components';

export const FiltersWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 205px;
  top: 50px;
  left: -160px;
  bottom: 0;
  justify-content: center;
  gap: 10px;
  height: fit-content;
  padding: 15px 10px;
  background: ${({ theme }) => theme.palette.primary};
  border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  border-radius: 5px;
  z-index: 2;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  input {
    height: 34px;
  }
`;
