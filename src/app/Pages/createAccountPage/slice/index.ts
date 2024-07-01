/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { CreateAccountPageSaga } from "./saga";
import { createAccountPageState } from "./types";
import showToast from "utils/toast";

export const initialState: createAccountPageState = {
  isCreatingAccount: false,
  errorMessage: "",
  isAcountCreated: false,
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
      state.isAcountCreated = true;
    },
    createAccountFailed: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.errorMessage = action.payload;
      state.isAcountCreated = false;
      showToast(action.payload,'error')
    },
  },
});

export const { actions: CreateAccountPageActions } = slice;

export const useCreateAccountPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: CreateAccountPageSaga });
  return { actions: slice.actions };
};
