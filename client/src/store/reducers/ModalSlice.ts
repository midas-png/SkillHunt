import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type Modal = 'SIGNIN' | 'SIGNUP' | null;

interface ModalState {
  type: Modal;
}

const initialState: ModalState = {
  type: null,
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setType(state, action: PayloadAction<Modal>) {
      state.type = action.payload;
    },
  },
});

export default modalSlice.reducer;
