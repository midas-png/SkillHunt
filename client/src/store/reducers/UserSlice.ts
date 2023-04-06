import { createSlice } from '@reduxjs/toolkit';

interface UserState {
  isAuth: boolean;
}

const initialState: UserState = {
  isAuth: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    toggleAuth(state) {
      state.isAuth = !state.isAuth;
    },
  },
});

export default userSlice.reducer;
