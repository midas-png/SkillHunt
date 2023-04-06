import { FC } from 'react';
import { IProps } from './props';
import { ModalWrapper } from './styles';
import { useAppSelector, useAppDispatch } from 'features';
import { modalSlice } from 'store';

export const Modal: FC<IProps> = ({ children }) => {
  const { type } = useAppSelector((state) => state.modalReducer);
  const { setType } = modalSlice.actions;
  const dispatch = useAppDispatch();
  const open = type !== null;

  return (
    <ModalWrapper open={open} onCancel={() => dispatch(setType(null))}>
      {children}
    </ModalWrapper>
  );
};
