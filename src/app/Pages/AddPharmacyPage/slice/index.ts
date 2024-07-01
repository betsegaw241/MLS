/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { addPharmacyPageSaga } from "./saga";
import { addPharmacyPageState } from "./types";
import showToast from "utils/toast";

export const initialState: addPharmacyPageState = {
  isCreatingAccount: false,
  errorMessage: "",
  account: undefined,
  isAccountCreated: false,
};

const slice = createSlice({
  name: "addPharmacy",
  initialState,
  reducers: {
    addPharmacy: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = true;
    },
    addPharmacySuccess: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.account = action.payload;
      state.isAccountCreated = true;
      // showToast(action.payload.message, "success");
    },
    addPharmacyFailed: (state, action: PayloadAction<any>) => {
      state.isCreatingAccount = false;
      state.errorMessage = action.payload;
      state.isAccountCreated = false;
      showToast(action.payload, "error");
    },
    addReset: (state) => {
      state.isAccountCreated = false;
    },
  },
});

export const { actions: AddPharmacyPageActions } = slice;

export const useAddPharmacyPageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addPharmacyPageSaga });
  return { actions: slice.actions };
};
