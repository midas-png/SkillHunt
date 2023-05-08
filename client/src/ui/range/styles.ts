import styled from 'styled-components';

export const RangeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TextifeldsWrapper = styled.div`
  display: grid;
  height: 35px;
  grid-auto-columns: 1fr;
  grid-template-columns: 1fr 1fr;
  gap: 0px 5px;
  justify-content: space-between;

  input {
    height: 35px;
  }
`;

export const RangeLabel = styled.span`
  font-size: 10px;
  letter-spacing: 0.5px;
`;
