/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { addAdminPageSaga } from "./saga";
import { addAdminPageState } from "./types";

export const initialState: addAdminPageState = {
  isCreatingAccount: false,
  errorMessage: "",
  account: undefined,
  isAccountCreated: false,
  FormValues: {
    firstName: "",
    lastName: "",
    adminEmailAddress: "",
    adminPhoneNumber: "",
    adminPassword: "",
  },
};

const slice = createSlice({
  name: "registerAdmin",
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = true;
    },
    addAdminSuccess: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.account = action.payload;
      state.isAccountCreated = true;
      
    },
    addAdminFailed: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.errorMessage = action.payload;
      state.isAccountCreated = false;
      
    },
  },
});

export const { actions: AddAdminPageActions } = slice;

export const useAddAdminPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addAdminPageSaga });
  return { actions: slice.actions };
};
