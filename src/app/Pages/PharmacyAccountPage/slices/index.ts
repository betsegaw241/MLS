import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { pharmacyAccountPageState } from "./types";
import { OrderPageSaga } from "./saga";
import { IPharmacy } from "./types";

export const initialState: pharmacyAccountPageState = {
  isLoading: false,
  isUpdating: false,
  pharmacy: {} as IPharmacy,
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
    },
    updatepharmacyDetailSuccess: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
      state.pharmacy = action.payload;
    },
    updatepharmacyDetailFailed: (state, action: PayloadAction<any>) => {
      state.isUpdating = false;
    },
  },
});
export const { actions: pharmacyAccountPageActions } = slice;

export const usePharmacyAccountSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderPageSaga });
  return { actions: slice.actions };
};
