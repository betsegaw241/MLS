import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { VerifyPharmacySaga } from "./saga";
import { pharmacy, VerifyPharmacyDetailPageState } from "./types";

export const initialState: VerifyPharmacyDetailPageState = {
  errorMessage: "",
  loading: false,
  verified: false,
  pharmacy: {} as pharmacy,
};

const slice = createSlice({
  name: "verifyPharmacyDetail",
  initialState,
  reducers: {
    getpharmacy: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getpharmacySuccess: (state, action: PayloadAction<any>) => {
      state.pharmacy = action.payload;
      state.loading = false;
    },
    getpharmacyFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
    verifyPharmacy: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    verifyPharmacySuccess: (state, action: PayloadAction<any>) => {
      state.pharmacy = action.payload;
      state.loading = false;
      state.verified = true;
    },
    verifyPharmacyFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: VerifyPharmacyActions } = slice;

export const UseVerifyPharmacySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: VerifyPharmacySaga });
  return { actions: slice.actions };
};
