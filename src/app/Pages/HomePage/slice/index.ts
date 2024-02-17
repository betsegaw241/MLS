/* eslint-disable no-unused-vars */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useInjectReducer, useInjectSaga } from "redux-injectors";
import { addPharmacyPageSaga } from "./saga";
import { homePageState } from "./types";

export const initialState: homePageState = {
  pharmcies: [],
  errorMessage: "",
  isLoading: false
};

const slice = createSlice({
  name: "homePage",
  initialState,
  reducers: {
    getPharmacies: (state, action: PayloadAction<any>) => {
      state.isLoading = true;
    },
    getPharmaciesSuccess: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.pharmcies = action.payload;
      // state.isAccountCreated = true;
    },
    getPharmaciesFailed: (state, action: PayloadAction<any>) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      // state.isAccountCreated = false;
    },
  },
});

export const { actions: HomePageActions } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: addPharmacyPageSaga });
  return { actions: slice.actions };
};
