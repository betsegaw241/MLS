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
  otpSent: false,
  otpVerified: false,
  passwordResetted: false,
  loading: false,
  error: "",
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
    sendOtp: (state: LoginState, action: PayloadAction<any>) => {
      state.loading = true;
    },
    sendOtpSuccess: (state: LoginState, action: PayloadAction<IUser>) => {
      state.otpSent = true;
      state.loading = false;
    },
    sendOtpFailed: (state: LoginState, action: PayloadAction<any>) => {
      state.otpSent = false;
      state.loading = false;
      state.error = action.payload;
    },
    verifyOtp: (state: LoginState, action: PayloadAction<any>) => {
      state.loading = true;
    },
    verifyOtpSuccess: (state: LoginState, action: PayloadAction<IUser>) => {
      state.otpVerified = true;
      state.loading = false;
    },
    verifyOtpFailed: (state: LoginState, action: PayloadAction<any>) => {
      state.otpVerified = false;
      state.loading = false;
      state.error = action.payload;
    },
    changePassword: (state: LoginState, action: PayloadAction<any>) => {
      state.loading = true;
    },
    changePasswordSuccess: (
      state: LoginState,
      action: PayloadAction<IUser>
    ) => {
      state.passwordResetted = true;
      state.loading = false;
    },
    changePasswordFailed: (state: LoginState, action: PayloadAction<any>) => {
      state.passwordResetted = false;
      state.loading = false;
      state.error = action.payload;
    },
    reset: (state: LoginState) => {
      state.otpVerified = false;
    },
  },
});

export const { actions: loginActions } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LoginSaga });
  return { actions: slice.actions };
};
