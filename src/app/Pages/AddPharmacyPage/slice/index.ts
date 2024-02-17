/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { addPharmacyPageSaga } from "./saga";
import { addPharmacyPageState } from "./types";

export const initialState: addPharmacyPageState = {
  isCreatingAccount: false,
  errorMessage: "",
  account: undefined
};

const slice = createSlice({
  name: "createAccount",
  initialState,
  reducers: {
    addPharmacy: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = true;
    },
    addPharmacySuccess: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.account = action.payload;
      // state.isAccountCreated = true;
    },
    addPharmacyFailed: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.errorMessage = action.payload;
      // state.isAccountCreated = false;
    },
  },
});

export const { actions: AddPharmacyPageActions } = slice;

export const useAddPharmacyPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addPharmacyPageSaga });
  return { actions: slice.actions };
};
