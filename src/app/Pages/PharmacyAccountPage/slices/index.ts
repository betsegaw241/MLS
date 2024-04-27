import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { IbankData, pharmacyAccountPageState } from "./types";
import { OrderPageSaga } from "./saga";
import { IPharmacy } from "../types";

export const initialState: pharmacyAccountPageState = {
  isLoading: false,
  isUpdating: false,
  isUpdated: false,
  link: "",
  pharmacy: {} as IPharmacy,
  banks: {} as IbankData,
};
const slice = createSlice({
  name: "pharmacyAccount",
  initialState,
  reducers: {
    getpharmacyDetail: (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    getpharmacyDetailSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.pharmacy = action.payload;
    },
    getpharmacyDetailFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
    },

    updatepharmacyDetail: (state, action: PayloadAction<any>) => {
      state.isUpdating = true;
      state.isUpdated = false;
    },
    updatepharmacyDetailSuccess: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
      state.pharmacy = action.payload;
      state.isUpdated = true;
    },
    updatepharmacyDetailFailed: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
      state.isUpdated = false;
    },
    uploadFile: (state, action: PayloadAction<string>) => {
      state.isLoading = true;
    },
    uploadFilelSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.link = action.payload;
    },
    uploadFileFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
    getBanks: (state) => {
      state.isLoading = true;
    },
    getBanksSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.banks = action.payload;
    },
    getBanksFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
    },
  },
});
export const { actions: pharmacyAccountPageActions } = slice;

export const usePharmacyAccountSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderPageSaga });
  return { actions: slice.actions };
};
