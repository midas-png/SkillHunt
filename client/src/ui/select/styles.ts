import styled from 'styled-components';
import { Assets } from 'assets';

export const ComponentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  border: 2px solid black;
  background: ${({ theme }) => theme.palette.primary};
  border-radius: 5px;
  cursor: pointer;
  margin: 0 auto;
`;

export const SelectHeader = styled.div`
  font-size: 18px;
  letter-spacing: 0.7px;
  cursor: pointer;
`;

export const SelectHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2px 5px;
  gap: 10px;
  align-items: center;
  margin-top: 2px;
`;

export const SelectArrow = styled(Assets.Arrow)<{ open: boolean }>`
  height: 15px;
  width: 17px;
  transform: ${({ open }) => (open ? 'rotate(0deg)' : 'rotate(180deg)')};
  transition: transform 0.2s ease-in-out;
  user-select: none;

  & path {
    fill: black;
  }
`;

export const SelectListWrapper = styled.div`
  margin-top: 5px;
`;

export const SelectList = styled.ul<{ open: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  opacity: ${({ open }) => (open ? '1' : '0')};
  font-size: 18px;
  letter-spacing: 0.7px;
  margin: 0 auto;
  border-top: 1px solid #c0c0c0;
  transition: 200ms all ease-in-out;
  z-index: 2;
`;

export const SelectItem = styled.li<{ open: boolean }>`
  display: ${({ open }) => !open && 'none'};
  position: relative;
  list-style: none;
  padding: 5px;
  padding-left: 5px;
  height: 100%;

  &:hover {
    background: #c0c0c0;
  }
`;

export const SelectLabel = styled.span`
  font-size: 10px;
  letter-spacing: 0.5px;
`;
