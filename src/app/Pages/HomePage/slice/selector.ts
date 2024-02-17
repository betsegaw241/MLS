import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "store/types";
import { initialState } from ".";

const selectSlice = (state: RootState) => state?.homePage || initialState;

export const selectHomePageState = createSelector(
  [selectSlice],
  (state) => state
);

export const selectPharmacies = createSelector(
  [selectSlice],
  (state) => state.pharmcies
);
export const selectErrorMessage = createSelector(
  [selectSlice],
  (state) => state.errorMessage
);
;
