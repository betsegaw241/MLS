import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '../../../../store/utils/toolkit';
import { useInjectReducer, useInjectSaga } from '../../../../store/utils/redux-injectors';
import { DefaultLayoutSaga } from './saga';
import { LayoutState, IModeAction, IRedirectAction } from './types';
import { IUserModel } from '../../../models/user';

export const initialState: LayoutState = {
  isAuthenticated: false,
  user: undefined,
  role: null,
  mode: 'light',
  isLogging: false,
  redirectTo: {
    path: null,
  },
  errorMessage: '',
};

const slice = createSlice({
  name: 'Layout',
  initialState,
  reducers: {
   
    login: (state:LayoutState) => {
      state.isLogging = true;
    },
    loginSuccess: (state:LayoutState, action: PayloadAction<IUserModel>) => {
      state.isLogging = false;
      state.isAuthenticated = true;
      state.user = action.payload;
      state.role = action.payload.role;
    },
    loginFailed: (state:LayoutState, action: PayloadAction<string>) => {
      state.isLogging = false;
      state.isAuthenticated = false;
      state.errorMessage = action.payload;
    },
    setRole(state:LayoutState, action: PayloadAction<string | null>) {
      state.role = action.payload;
    },
    clearRole(state:LayoutState) {
      state.role = undefined;
    },
    setMode(state:LayoutState, action: PayloadAction<IModeAction>) {
      state.mode = action.payload;
    },
    setRedirectTo(state:LayoutState, action: PayloadAction<IRedirectAction>) {
      state.redirectTo = action.payload;
    },
    clearRedirectTo(state:LayoutState) {
      state.redirectTo = {
        path: null,
      };
    },
    logout:( state :LayoutState)=> {
      state.isAuthenticated = false;
      state.user = undefined;
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('email');
      localStorage.removeItem('role');
      localStorage.removeItem('name');
    },
  },
});

export const { actions: defaultLayoutActions } = slice;

export const useDefaultLayoutSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: DefaultLayoutSaga });
  return { actions: slice.actions };
};

