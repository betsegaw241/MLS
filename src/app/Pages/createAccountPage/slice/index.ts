/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { CreateAccountPageSaga } from "./saga";
import { createAccountPageState } from "./types";

export const initialState: createAccountPageState = {
  isCreatingAccount: false,
  errorMessage: "",
  account: undefined
};

const slice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    createAccount: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = true;
    },
    createAccountSuccess: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.account = action.payload;
      // state.isAccountCreated = true;
    },
    createAccountFailed: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.errorMessage = action.payload;
      // state.isAccountCreated = false;
    },
  },
});

export const { actions: CreateAccountPageActions } = slice;

export const useCreateAccountPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: CreateAccountPageSaga });
  return { actions: slice.actions };
};