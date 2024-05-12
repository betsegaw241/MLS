import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { LoginSaga } from "./saga";
import { LoginState } from "./types";
import { IUser, data } from "../../../models/user";
import { IuserData } from "app/Pages/AdminUsersPage/slice/types";

export const initialState: LoginState = {
  isAuthenticated: false,
  user: {} as IUser,
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
    loginSuccess: (state: LoginState, action: PayloadAction<IUser>) => {
      state.isLogging = false;
      state.isAuthenticated = true;
      state.role = action.payload.role;
      state.user = action.payload;
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
      localStorage.removeItem("avatar");
      localStorage.removeItem("email");
      localStorage.removeItem("role");
      localStorage.removeItem("name");
      localStorage.removeItem("pharmacyId");
    },
  },
});

export const { actions: loginActions } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LoginSaga });
  return { actions: slice.actions };
};
