import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "../../../../store/utils/toolkit";
import {
  useInjectReducer,
  useInjectSaga,
} from "../../../../store/utils/redux-injectors";
import { GetPharmaciesListSaga } from "./saga";
import { IpharmacyData, AdminPharmaciesPageState } from "./types";

export const initialState: AdminPharmaciesPageState = {
  errorMessage: "",
  loading: false,
  pharmaciesList: {} as IpharmacyData,
};

const slice = createSlice({
  name: "getPharmaciesList",
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

export const { actions: getPharmaciesActions } = slice;

export const UseGetPharmaciesSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: GetPharmaciesListSaga });
  return { actions: slice.actions };
};
