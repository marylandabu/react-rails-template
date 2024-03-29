import { createSlice } from '@reduxjs/toolkit';
import { User } from '../../apis/userApi';

export interface AuthState {
  user: User | null;
}

const initialState: AuthState = {
  user: null, //{ username: 'test', email: 'test@test.com', value: 1, status: 'idle' },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state: AuthState, { payload }) => {
      const { role } = payload;

      state.user = {
        ...payload,
        role: {
          [role]: role,
        },
      };
    },
    logout: (state: AuthState) => {
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
