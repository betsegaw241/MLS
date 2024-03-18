import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { LoginSaga } from "./saga";
import { LoginState } from "./types";
import { data } from "../../../models/user";

export const initialState: LoginState = {
  isAuthenticated: false,
  user: undefined,
  role: "",
  mode: "light",
  isLogging: false,
  redirectTo: {
    path: null,
  },
  errorMessage: "",
};

const slice = createSlice({
  name: "login",
  initialState,
  reducers: {
    login: (state: LoginState, action: PayloadAction<any>) => {
      state.isLogging = true;
    },
    loginSuccess: (state: LoginState, action: PayloadAction<data>) => {
      state.isLogging = false;
      state.isAuthenticated = true;
      // state.user = action.payload;
      state.role = action.payload.role;
    },
    loginFailed: (state: LoginState, action: PayloadAction<any>) => {
      state.isLogging = false;
      state.isAuthenticated = false;
      state.errorMessage = action.payload;
    },

    logout: (state: LoginState) => {
      state.isAuthenticated = false;
      state.user = undefined;
      localStorage.removeItem("token");
      localStorage.removeItem("id");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
    },
  },
});

export const { actions: loginActions } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LoginSaga });
  return { actions: slice.actions };
};
