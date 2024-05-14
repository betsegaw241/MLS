/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { VerifyAccountPageSaga } from "./saga";
import { verifyAccountPageState } from "./types";

export const initialState: verifyAccountPageState = {
  isAcountVerified: false,
  errorMessage: "",
  isVerifyingAccount: false,
};

const slice = createSlice({
  name: "verifyAccount",
  initialState,
  reducers: {
    verifyAccount: (state, action: PayloadAction<any>) => {
      state.isVerifyingAccount = true;
    },
    verifyAccountSuccess: (state, action: PayloadAction<any>) => {
      state.isVerifyingAccount = false;
      state.isAcountVerified = true;
    },
    verifyAccountFailed: (state, action: PayloadAction<any>) => {
      state.isVerifyingAccount = false;
      state.errorMessage = action.payload;
      state.isAcountVerified = false;
      // showToast(action.payload,'error')
    },
  },
});

export const { actions: verifyAccountPageActions } = slice;

export const useVerifyAccountPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: VerifyAccountPageSaga });
  return { actions: slice.actions };
};
