import styled from 'styled-components';

export const TextfieldComponent = styled.input`
  font-size: 30px;
  width: 440px;
  border: ${({ theme }) => `2px solid ${theme.palette.secondary}`};
  border-radius: 4px;
  padding-left: 5px;
  outline: none;
`;
