/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { addAdminPageSaga } from "./saga";
import { addAdminPageState } from "./types";

export const initialState: addAdminPageState = {
  errorMessage: "",
  account: undefined,
  FormValues: {
    firstName: "",
    lastName: "",
    adminEmailAddress: "",
    adminPhoneNumber: "",
    adminPassword: "",
  },
  isCreated: false,
  loading: false,
};

const slice = createSlice({
  name: "addAdmin",
  initialState,
  reducers: {
    addAdmin: (state, action: PayloadAction<any>) => {
      state.isCreated = false;
      state.loading = true;
    },
    addAdminSuccess: (state, action: PayloadAction<any>) => {
      state.isCreated = true;
      state.account = action.payload;
      state.loading = false;
    },
    addAdminFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.isCreated = false;
      state.loading = false;
    },
    addReset: (state) => {
      state.isCreated = false;
    },
  },
});

export const { actions: AddAdminPageActions } = slice;

export const useAddAdminPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addAdminPageSaga });
  return { actions: slice.actions };
};
