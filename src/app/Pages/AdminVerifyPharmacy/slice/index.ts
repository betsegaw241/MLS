import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { VerifyPharmaciesListSaga } from "./saga";
import { IpharmacyData, VerifyPharmaciesPageState } from "./types";

export const initialState: VerifyPharmaciesPageState = {
  errorMessage: "",
  loading: false,
  pharmaciesList: {} as IpharmacyData,
};

const slice = createSlice({
  name: "verifyPharmacy",
  initialState,
  reducers: {
    getpharmacies: (state, action: PayloadAction<any>) => {
      state.loading = true;
    },
    getpharmaciesSuccess: (state, action: PayloadAction<any>) => {
      state.pharmaciesList = action.payload;
      state.loading = false;
    },
    getpharmaciesFailed: (state, action: PayloadAction<any>) => {
      state.errorMessage = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: VerifyPharmaciesActions } = slice;

export const UseVerifyPharmaciesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: VerifyPharmaciesListSaga });
  return { actions: slice.actions };
};
