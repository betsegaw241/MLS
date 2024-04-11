import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.getDrugsList || initialState;

export const selectAddDrugState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectDrugs = createSelector(
  [selectSlice],
  (state) => state.drugsList
);
export const selectIsLoading = createSelector(
  [selectSlice],
  (state) => state.loading
);
export const selectIsAdded = createSelector(
  [selectSlice],
  (state) => state.isDrugAdded
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
