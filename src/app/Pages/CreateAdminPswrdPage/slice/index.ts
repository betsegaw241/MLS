/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { createAdminPwdPageState } from "./types";
import { createAdminPwdPageSaga } from "./saga";

export const initialState: createAdminPwdPageState = {
  errorMessage: "",
  account: undefined,
  isPasswordCreated: false,
};

const slice = createSlice({
  name: "createPassword",
  initialState,
  reducers: {
    createAdminPwd: (state, action: PayloadAction<any>) => {

    },
    createAdminPwdSuccess: (state, action: PayloadAction<any>) => {
      state.account = action.payload;
      state.isPasswordCreated = true;
    },
    createAdminPwdFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { actions: CreateAdminPwdPageActions } = slice;

export const useCreateAdminPwdPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: createAdminPwdPageSaga });
  return { actions: slice.actions };
};
