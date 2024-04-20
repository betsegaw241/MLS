import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.getPharmaciesList || initialState;

export const selectPharmaciesState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectPharmacies = createSelector(
  [selectSlice],
  (state) => state.pharmaciesList
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
