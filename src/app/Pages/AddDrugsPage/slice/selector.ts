import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) =>
  state?.addDrug || initialState;

export const selectAddDrugState = createSelector(
  [selectSlice],
  (state) => state
);
export const selectDrug = createSelector(
  [selectSlice],
  (state) => state.drug
);
export const selectIsAdding = createSelector(
  [selectSlice],
  (state) => state.loading
);

export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
